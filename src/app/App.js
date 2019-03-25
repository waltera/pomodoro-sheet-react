import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Head from './Head'
import Home from '../home/Home'
import AlertContainer from './AlertContainer'
import TaskNewContainer from '../task/TaskNewContainer'
import TaskEditContainer from '../task/TaskEditContainer'

const App = ({store}) => {
  return <Provider store={store}>
    <Router>
      <div>
        <Head />
        <div className="container">
          <AlertContainer />

          <Switch>
            <Route exact path="/" component={Home} />

            {/* Tasks */}
            <Route exact path="/tasks/new" component={TaskNewContainer} />
            <Route exact path="/tasks/:id/edit" component={TaskEditContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
};

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
