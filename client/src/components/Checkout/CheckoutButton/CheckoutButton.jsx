import React from 'react'
// import { ReactComponent as BagIcon} from '../../../assets/Images/shopping-bag.svg'
import StripeCheckout from 'react-stripe-checkout'
// import './CheckoutButton.css'
import Axios from 'axios'
import Button from '@material-ui/core/Button';
import {makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';


const useStyles = makeStyles(theme=>({
    pay_button :{
        position : 'relative',
        top : '0',
        left : '0',
        width : '200px'
    }
}))

export default function CheckoutButton({price}) {
    const fromRupToPaisa = amount => amount * 100;  // calculated on basis of 1 cent is 0.765 rupees rgt now
    const CURRENCY = 'INR';
    const publishable_key = 'pk_test_KFUbIPVwGYBWk4o0rwrDQapH00HWOeYO0F' // JUST FOR TEST MODE, sry abt that
    const PAYMENT_SERVER_URL = 'http://localhost:8080/payment'

    const successPayment = data => {
        alert(`Payment Successful, We are in business ${data.email}`);
    };
    const errorPayment = data => {
        // console.log(data);
        alert('Payment Error');
    };

    const onToken = () => token =>{
        Axios.post(PAYMENT_SERVER_URL,
            {
            token:token,
            currency: CURRENCY,
            amount: fromRupToPaisa(price)
            })
            .then(successPayment=>(window.location.href = '/orderconfirmation'))
            .catch(errorPayment=>(window.location.href = '/orderconfirmation'));
        }
    return (
        <Grid container style={{width : '100%',height :'60px',display : 'flex',alignItems:'center',justifyContent:'flex-end'}}>
        <StripeCheckout 
            name="Curated Cart"
            description={`Your Total is ${price}`}
            image="https://i.ibb.co/2s3hBdV/Logo-3.jpg" // TODO: replace it afterwards with some good svg logo 
            label = "CHECKOUT"
            panelLabel="PAY "
            amount={fromRupToPaisa(price)}
            currency={CURRENCY}
            stripeKey={publishable_key}
            token={onToken()}
            billingAddress  
            shippingAddress
        >
        <Button 
                className={useStyles().pay_button}
                fullWidth
                variant="contained"
                color="secondary">
        PLACE ORDER</Button>
        </StripeCheckout>
        </Grid>
    )
}
