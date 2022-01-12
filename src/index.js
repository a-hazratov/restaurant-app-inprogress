import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import './index.css';
import store from './redux/store';
import { restaurants } from './fixtures';

window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App restaurants={restaurants} />
  </Provider>,
  document.getElementById('root')
);
