import React from 'react'

import Grid from '@material-ui/core/Grid';
import classes from './SignUpPage.module.css'
import SignUp from '../../../components/Auth/SignUp/SignUp'
import { Container, Paper,Typography} from '@material-ui/core';
import { Redirect } from 'react-router';


export default function SignUpPage({currentUser}){
    if(currentUser===null)
    {
        return (
            <div className={classes.SignUpPage}>
                <Container>
                <Grid container>
                <Grid item sm={7}>
                    <div className={classes.textStyle}>
                        <Typography variant='h5' style={{fontFamily : '"Exo 2",sans-serif'}}>One step ahead,<snap>World</snap> is open for you.</Typography>
                    </div>
                </Grid>
                <Grid item sm={5} justify='flex-end' style={{zIndex:'1'}}>
                    <Paper elevation={7} style={{padding : '1rem'}}>
                        <SignUp/>
                    </Paper>
                </Grid>
                </Grid>
                </Container>
            </div>
        )
    }
    
    else return <Redirect to ='/' />
}