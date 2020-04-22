import React from 'react'

import Grid from '@material-ui/core/Grid';
import classes from './SignInPage.module.css'
import SignIn from '../../../components/Auth/SignIn/SignIn'
import { Container, Paper ,Typography} from '@material-ui/core';


export default function SignInPage(){
    return(
        <div className={classes.SignInPage}>
            <Container>
            <Grid container>
            <Grid item sm={7}>
                <div className={classes.textStyle}>
                    <Typography variant='h5' style={{fontFamily : '"Exo 2",sans-serif'}}>One step ahead,<snap>World</snap> is open for you.</Typography>
                </div>
            </Grid>
            <Grid item sm={5} justify='flex-end' style={{zIndex:'1'}}>
                <Paper elevation={7} style={{padding : '1rem'}}>
                     <SignIn />
                </Paper>
            </Grid>
            </Grid>
            </Container>
        </div>
    )
}