import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'

import Layout from './containers/Layout';
import HomePage from './Pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
