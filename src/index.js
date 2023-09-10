import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import{Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import thunk from "redux-thunk" 
import {  applyMiddleware } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
(applyMiddleware(thunk)),
  <BrowserRouter>

  <Provider store={store} >
 
  <App/>

  </Provider>
  </BrowserRouter>
);

