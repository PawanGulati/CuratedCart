import React from 'react'

import Grid from '@material-ui/core/Grid';
import classes from './SignInPage.module.css'
import SignIn from '../../../components/Auth/SignIn/SignIn'
import { Container, Paper } from '@material-ui/core';

export default function SignInPage(){
    return(
        <div className={classes.SignInPage}>
            <Container>
            <Grid container justify='center' alignItems='center'>
                <Paper elevation={7} style={{padding : '1rem'}}>
                     <SignIn />
                </Paper>
            </Grid>
            </Container>
        </div>
    )
}