import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// new imports start
import { createStore } from 'redux'
import { Provider } from "react-redux";
import reducers from './reducers'

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, window.STATE_FROM_SERVER);
  return store;
}

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
