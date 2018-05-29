import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import reducers from './app/reducers'
import { helloSaga } from './app/sagas'
import App from './app/App'

import boostrap from 'bootstrap'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app/styles.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSaga)

render(
  <App store={store} />,
  document.getElementById('root')
)
