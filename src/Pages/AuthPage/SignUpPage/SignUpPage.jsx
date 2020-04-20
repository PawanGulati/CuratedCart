import React from 'react'

import Grid from '@material-ui/core/Grid';
import classes from './SignUpPage.module.css'
import SignUp from '../../../components/Auth/SignUp/SignUp'
import { Container, Paper } from '@material-ui/core';

export default function SignUpPage(){
    return(
        <div className={classes.SignUpPage}>
        <Container>
            <Grid container justify='center' alignItems='center'>
                <Paper elevation={7} style={{padding : '1rem'}}>
                    <SignUp />
                </Paper>
            </Grid>
        </Container>
        </div>
    )
}