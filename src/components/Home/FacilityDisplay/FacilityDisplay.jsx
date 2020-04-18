import React from 'react'
import classes from './FacilityDisplay.module.css'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

export default function FacilityDisplay() {
    return (
        <div className={classes.main_display}>
        <Container style={{height : '100%'}}>
        <Grid container style={{height : '100%'}} spacing={4} >
        <Grid xs={6}>
                        <div className={classes.facility}>
                        <img src="https://i.ibb.co/8zjq8ZL/icons8-customer-insight-64.png" alt="Customer Car"></img>
                        <p>Customer Care</p>
                        </div>
                    </Grid>
                    
                    
                    
                    <Grid xs={6}>
                        <div className={classes.facility}>
                            <img src="https://i.ibb.co/yBv5yBz/icons8-in-transit-64.png" alt="Fast Shipping"></img>
                            <p>Fast Shipping</p>
                        </div>
                    </Grid>
                    
                    <Grid xs={6}>
                        <div className={classes.facility}>
                            <img src="https://i.ibb.co/px80kQ1/icons8-lock-64.png" alt="Secured Payments"></img>
                            <p>Secured Payments</p>
                        </div>
                    </Grid>
                    
                    

                    <Grid xs={6}>
                        <div className={classes.facility}>
                            <img src="https://i.ibb.co/Wy3wZqQ/icons8-guarantee-48.png" alt="Assured Products"></img>
                            <p>Assured Products</p>
                        </div>
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    )
}
