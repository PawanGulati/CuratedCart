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

import classes from './SignUp.module.css'
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';


export default class SignUp extends Component{

  state = {
    userName:'',
    email:'',
    password:'',
    confirm_password:''
  }

  inputChangeHandler = ({target:{name,value}}) =>{
    this.setState({
      [name] : value
    })
  }

  submitHandler = async e =>{
    e.preventDefault()

    const {userName,email,password,confirm_password} = this.state
    try {
      if(password !== confirm_password){
        throw new Error('Password not matching')
      }
      
      const {user} = await auth().createUserWithEmailAndPassword(email,password)
      console.log(user);
      
      await createUserProfileDocument(user,{displayName:userName})

      //clearing form
      this.setState({
        userName:'',
        password:'',
        email:'',
        confirm_password:''
      })

    } catch (error) {
      console.log(error);
    }
    
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
            Sign up
          </Typography>
          <form onSubmit={this.submitHandler} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="Full Name"
                  name="userName"
                  autoComplete="off"
                  value={this.state.userName}
                  onChange={this.inputChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  value={this.state.email}
                  onChange={this.inputChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password1"
                  autoComplete="off"
                  value={this.state.password}
                  onChange={this.inputChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="confirm_password"
                  id="confirm_password"
                  autoComplete="off"
                  value={this.state.confirm_password}
                  onChange={this.inputChangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}