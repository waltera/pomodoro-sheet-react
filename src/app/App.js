import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Head from './Head';
import Errors from './Errors';
import Home from '../home/Home';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Head />
      <div className="container">
        <Errors />
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </div>
    </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
