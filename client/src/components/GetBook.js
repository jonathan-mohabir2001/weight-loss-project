import StripeCheckout from 'react-stripe-checkout';

import { useState } from 'react';

import axios from 'axios';

import myKey from './secretFolder/stripeKey';

function GetBook() {
  const [product] = useState({
    name: '60-Down -Jonathan Mohabir',
    price: 15.0,
    productBy: 'Jonathan Mohabir',
    description: 'This is a test product for my E Book',
  });

  async function handleToken(token, address) {
    const response = await axios.post('http://localhost:3001/checkout', {
      token,
      product,
    });

    // log the response of the status

    console.log(response.status);
  }

  return (
    <div className="App">
      <div className="container">
        <br></br>
        <h1 className="text-center"> Stripe Payment Demo</h1>

        <br></br>
        <br></br>
        <br></br>

        <div className="form-group container">
          <StripeCheckout
            className="center"
            id="stripe-button"
            stripeKey={myKey.stripeSecretKey}
            token={handleToken}
            amount={product.price * 100}
            name={product.name}
            currency="CAD"
          />
        </div>
      </div>
    </div>
  );
}

export default GetBook;
