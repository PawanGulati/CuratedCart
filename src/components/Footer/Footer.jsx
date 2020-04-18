import React from 'react'
import classes from './Footer.module.css' 
import { Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'

export default function Footer() {
    return (
        <div className={classes.Footer}>
            <Container style={{height : '100%'}}>
            <Grid container style={{height : '100%'}}>
                <Grid xs={12} sm={10}>
                <div className={classes.left_part}>
                    <div className={classes.text}>STAY IN THE LOOP?</div>
                    <div className={classes.google}/>
                    <div className={classes.twitter}/>
                    <div className={classes.instagram}/>
                    <div className={classes.facebook}/>
                </div>
                </Grid>

                <Grid xs={12} sm={2}>
                    <div className={classes.copyright}>© Curated Cart 2020</div>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}
