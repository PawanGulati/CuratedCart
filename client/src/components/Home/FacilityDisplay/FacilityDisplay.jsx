import React from 'react'
import classes from './FacilityDisplay.module.css'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

export default function FacilityDisplay() {
    return (
        <section className={classes.main_display}>
        <Container style={{height : '100%'}}>
            <Grid container style={{height : '100%'}} spacing={4} >
                <Grid item xs={6}>
                    <div className={classes.facility}>
                        <img id={classes.customer_care} src="https://i.ibb.co/8zjq8ZL/icons8-customer-insight-64.png" alt="Customer Car"/>
                        <p>Customer Care</p>
                    </div>
                </Grid>
                
                <Grid item xs={6}>
                    <div className={classes.facility}>
                        <img id={classes.fast_shipping} src="https://i.ibb.co/yBv5yBz/icons8-in-transit-64.png" alt="Fast Shipping"/>
                        <p>Fast Shipping</p>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className={classes.facility}>
                        <img id={classes.secured_payments} src="https://i.ibb.co/px80kQ1/icons8-lock-64.png" alt="Secured Payments"/>
                        <p>Secured Payments</p>
                    </div>
                </Grid>
                
                

                <Grid item xs={6}>
                    <div className={classes.facility}>
                        <img id={classes.assured_products} src="https://i.ibb.co/Wy3wZqQ/icons8-guarantee-48.png" alt="Assured Products"/>
                        <p>Assured Products</p>
                    </div>
                </Grid>
                
                </Grid>
        </Container>    
        </section>
    )
}
