import React from 'react' // eslint-disable-line no-unused-vars
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import reducers from './app/reducers'
import rootSaga from './app/sagas'
import App from './app/App' // eslint-disable-line no-unused-vars

import boostrap from 'bootstrap' // eslint-disable-line no-unused-vars
import $ from 'jquery' // eslint-disable-line no-unused-vars
import 'bootstrap/dist/css/bootstrap.min.css'
import './app/styles.css'

const sagaMiddleware = createSagaMiddleware(rootSaga)
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

render(
  <App store={store} />,
  document.getElementById('root') // eslint-disable-line no-undef
)
