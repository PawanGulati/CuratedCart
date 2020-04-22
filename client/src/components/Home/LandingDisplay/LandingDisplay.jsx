import React from 'react'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import classes from './LandingDisplay.module.css'


export default function LandingDisplay() {
    return (
        <section className={classes.main_display}>
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
        </section>
    )
}
