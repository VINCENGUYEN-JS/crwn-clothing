import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken= token => {
    console.log(token);
    alert('Payment Successful')
}


const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publicshableKey = 'pk_test_uF3eG2yeoNwOvyfLDe9QHvZo00B6fP0VzS';
    return (
        <StripeCheckout 
         label='Pay Now'
         name='VINCE NGUYEN CLOTHING'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publicshableKey}
        />
    )
}

export default StripeCheckoutButton