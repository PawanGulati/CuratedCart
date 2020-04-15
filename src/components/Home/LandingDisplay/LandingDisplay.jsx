import React from 'react'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import classes from './LandingDisplay.module.css'


export default function LandingDisplay() {
    return (
        <div className={classes.main_display}>
            <Container style={{height : "100%"}}>
                <Grid container style={{height : "100%"}}>
                    
                <Grid item xs = {12} sm={6}>
                        <div className={classes.left_part}>
                            <p className={classes.title}>Curated Cart</p>
                            <p className={classes.subTitle}>REASON OF YOUR HAPPINESS</p>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div className={classes.right_part}>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

// <div 
// style={{
//     height : '96%',
//     width : '90.5%',
//     position : 'relative',
//     top : '5%',
//     left : '-10%',
//     backgroundImage : 'url("https://i.ibb.co/jzYSmJY/shopping-cart-colour-400px.png")', 
//     backgroundImage : 'url("https://i.ibb.co/bXJJXDY/shopping-cart-colour-800px-1.png")',
//     backgroundImage : 'url(" https://i.ibb.co/JjNvVwL/shopping-cart-colour-800px-1.jpg")', 
//     backgroundRepeat : 'no-repeat',
//     backgroundSize : 'cover',
//     backgroundPosition : 'center'
// }}></div>