import React from 'react'
import { ReactComponent as BagIcon} from '../../../assets/Images/shopping-bag.svg'
import StripeCheckout from 'react-stripe-checkout'

export default function CheckoutButton({price}) {
    const fromRupToCent = amount => amount * 1.307189;  // calculated on basis of 1 cent is 0.765 rupees rgt now
    const CURRENCY = 'INR';
    const publishable_key = 'pk_test_KFUbIPVwGYBWk4o0rwrDQapH00HWOeYO0F' // JUST FOR TEST MODE, sry abt that

    const successPayment = data => {
        alert(`Payment Successful, We are in business ${data.email}`);
    };
    const errorPayment = data => {
        console.log(data);
        alert('Payment Error');
    };

    const onToken = (amount, description) => token =>
        alert('Payment Successful')
        // axios.post(PAYMENT_SERVER_URL,
        //     {
        //     description,
        //     source: token.id,
        //     currency: CURRENCY,
        //     amount: fromEuroToCent(amount)
        //     })
        //     .then(successPayment)
        //     .catch(errorPayment);

    return (
        <StripeCheckout 
            name="Curated Cart"
            description={`Your Total is ${price}`}
            image={BagIcon} // replace it afterwards, I donno if it will work or not
            label = "CHECKOUT"
            panelLabel="PAY NOW"
            amount={fromRupToCent(price)}
            currency={CURRENCY}
            stripeKey={publishable_key}
            token={onToken(amount,description)}
            billingAddress  
            shippingAddress
        />
    )
}
