import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'

import Layout from './containers/Layout';
import HomePage from './Pages/HomePage/HomePage'
import ShopPage from './Pages/ShopPage/ShopPage';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
    <CssBaseline />
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
