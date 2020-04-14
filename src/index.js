import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core';

// REDUX implementation
import {Provider} from 'react-redux'
import store from './store'

const theme = createMuiTheme({
  palette : {
    main : '#E8E8CF'
  },
  secondary : {
    main : '#FFFFFF'
  },
  type : 'light'
})

const app = (
  <BrowserRouter>
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    </React.StrictMode>
  </BrowserRouter> 
)

ReactDOM.render(app,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
