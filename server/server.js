require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});
// Import Mongoose models
const Customer = require('./models/Customer');
const Order = require('./models/Order');

// POST route to process payment and store customer and order data
app.post('/checkout', async (req, res) => {
  try {
    const { token, product } = req.body;

    // Create a new customer or retrieve an existing one
    const customer = await Customer.findOne({ email: token.email });
    let customerId;

    if (!customer) {
      const newCustomer = await stripe.customers.create({
        email: token.email,
      });

      await Customer.create({
        email: token.email,
        stripeCustomerId: newCustomer.id,
      });

      customerId = newCustomer.id;
    } else {
      customerId = customer.stripeCustomerId;
    }

    // Create a Stripe charge
    const charge = await stripe.charges.create({
      amount: product.price * 100,
      currency: 'cad',
      description: product.description,
      customer: customerId,
      receipt_email: token.email,
      source: token.id,
    });

    // Save the order data in the database
    await Order.create({
      customer: customerId,
      product: {
        name: product.name,
        price: product.price,
      },
      stripeChargeId: charge.id,
    });

    res.status(200).json({ message: 'Payment successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Payment failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend Site Running on ${PORT}, press ctrl+C to end`);
});
