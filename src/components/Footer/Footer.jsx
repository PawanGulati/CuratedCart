import React from 'react'
import classes from './Footer.module.css' 
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

export default function Footer() {
    return (
        <div className={classes.Footer}>
            <Container style={{height : '100%'}}>
            <Grid container style={{height : '100%'}}>
                <Grid item xs={12} sm={10}>
                <div className={classes.left_part}>
                    {/* TODO: Have to change these bellow divs to typography */}
                    <div className={classes.text}>STAY IN THE LOOP?</div>
                    <div className={classes.google}/>
                    <div className={classes.twitter}/>
                    <div className={classes.instagram}/>
                    <div className={classes.facebook}/>
                </div>
                </Grid>

                <Grid item xs={12} sm={2}>
                    <div className={classes.copyright}>© Curated Cart 2020</div>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}
