import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core';

// REDUX implementation
import {Provider} from 'react-redux'
import {store,persistor} from './store'

// REDUX-persist
import {PersistGate} from 'redux-persist/integration/react'

const theme = createMuiTheme({
  palette : {
    primary:{
      main:'#c4c49d'
    }
  }
})

const app = (
  <BrowserRouter>
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <App />
          </Provider>
        </PersistGate>
      </MuiThemeProvider>
    </React.StrictMode>
  </BrowserRouter> 
)

ReactDOM.render(app,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
