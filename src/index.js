import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

// import StoreContext from './StoreContext';
import { Provider } from 'react-redux';

import store from './redux/redux-store.js';

// setInterval(() => {
//   store.dispatch({type: 'FAKE'});
// }, 1000);

// let renderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
// };

// renderEntireTree(store.getState());

// store.subscribe(() => renderEntireTree(store.getState()));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
