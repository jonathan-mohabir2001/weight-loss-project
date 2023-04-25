const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  stripeCustomerId: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;
