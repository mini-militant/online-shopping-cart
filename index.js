import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store'


render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter> 
  </Provider>
  , document.getElementById('root'));
