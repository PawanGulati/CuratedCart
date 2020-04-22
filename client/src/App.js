import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {setCurUser} from './store/user/user.actions'

import Layout from './containers/Layout';
import HomePage from './Pages/HomePage/HomePage'
import ShopPage from './Pages/ShopPage/ShopPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignUpPage from './Pages/AuthPage/SignUpPage/SignUpPage'
import SignInPage from './Pages/AuthPage/SignInPage/SignInPage' 

import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import ScrollToTop from './hoc/ScrollToTop';
import Checkout from './Pages/CheckoutPage/Checkout';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurUser} = this.props

    this.unsubscribeFromAuth = auth().onAuthStateChanged(async user =>{
      if(user){
        const userRef = await createUserProfileDocument(user)

        userRef.onSnapshot(snap =>{
          setCurUser({
            id:snap.id,
            ...snap.data()
          })
        })
      }
      else{
        setCurUser({currentUser:user})
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div className="App">
      <CssBaseline />
        <Layout>
        <ScrollToTop>
          <Switch>
          <Route exact path='/signup' component={SignUpPage}/>
          <Route exact path='/signin' component={SignInPage}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/' component={HomePage} />
          </Switch>
          </ScrollToTop>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurUser:user => dispatch(setCurUser(user))
})

export default connect(null,mapDispatchToProps)(App);
