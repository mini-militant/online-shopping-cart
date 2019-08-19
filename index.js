import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App'
import {BrowserRouter} from 'react-router-dom'



render(
  <BrowserRouter>
  <App />
  </BrowserRouter> 
  , document.getElementById('root'));
