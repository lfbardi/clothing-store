import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_t3oMzyJrOfmArXY9SrEJPh6T00gsHoXRkV';

    const onToken = token => alert(`Payment Successful!`)

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Hex Store"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;