import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom';
import reducers from './app/reducers';
import App from './app/App';

import boostrap from 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles.css';

const store = createStore(reducers);

console.log(store);

render(
  <App store={store} />,
  document.getElementById('root')
);
