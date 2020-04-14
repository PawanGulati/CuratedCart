import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import classes from './SignIn.module.css'

import {signInWithGoogle} from '../../../firebase/firebase.utils'

export default class SignIn extends Component {
    
    state={
        email:'',
        password:''
    }

    inputChangeHandler = ({target:{name,value}}) =>{
        this.setState({
            [name] : value 
        })
    }

    submitHandler = e =>{
        e.preventDefault()

        console.log(this.state);
        
        this.setState({
            email:'',
            password:''
        })
    }

    render(){
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form onSubmit={this.submitHandler} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={this.state.email}
                        autoComplete="off"
                        autoFocus
                        onChange={this.inputChangeHandler}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={this.state.password}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={this.inputChangeHandler}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        onClick={signInWithGoogle}
                    >
                        Sign In With Google
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            </Container>
        );
    }  
}