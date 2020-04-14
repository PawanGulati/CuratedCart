import React from 'react'

import classes from './AuthPage.module.css'
import SignIn from '../../components/Auth/SignIn/SignIn'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SignUp from '../../components/Auth/SignUp/SignUp';

export default function AuthPage() {
    return (
        <div className={classes.AuthPage}>
            <Grid container >
                <Grid item xs={12} sm={6} className={classes.item}>
                    <Paper className={classes.paper}>
                        <SignIn />
                    </Paper>    
                </Grid>
                <Grid item xs={12} sm={6} className={classes.item}>
                    <Paper className={classes.paper}>
                        <SignUp />
                    </Paper>    
                </Grid>
            </Grid>            
        </div>
    )
}
