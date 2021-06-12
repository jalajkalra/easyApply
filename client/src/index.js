import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import AccountReducer from './entities/reducer/reducer';
import CompanyReducer from './entities/reducer/companyReducer';
import { BrowserRouter } from 'react-router-dom';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

const instance = createInstance({
  urlBase: 'https://easyapply-jobs-internship.herokuapp.com/',
  siteId: 1,
})

const Combined = combineReducers({
  account:AccountReducer,
  companyAccount:CompanyReducer
})
const store = createStore(Combined,applyMiddleware(thunk));

ReactDOM.render(
  <MatomoProvider value={instance}>
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </MatomoProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
