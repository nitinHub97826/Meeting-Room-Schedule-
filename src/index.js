import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import { MuiThemeProvider,responsiveFontSizes,createTheme } from '@material-ui/core';
import {store} from './ReduxStore'
import './Style/index.scss'
import Routing from './Routing'

// let theme=createTheme();
// theme=responsiveFontSizes(theme);



ReactDOM.render(
  // <MuiThemeProvider theme={theme}>
  <Provider store={store}>
   {/* <React.StrictMode> */}
   <Routing />
   {/* </React.StrictMode> */}
  </Provider>
  // </MuiThemeProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
