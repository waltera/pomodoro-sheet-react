import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Head from './Head';
import Errors from './Errors';
import Home from '../home/Home';
import TaskContainer from '../task/TaskContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Head />
        <div className="container">
          <Errors />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tasks" component={TaskContainer} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
