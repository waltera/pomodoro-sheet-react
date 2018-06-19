import React from 'react'
import TimerContainer from './HomeTimerContainer'
import TodoToday from './HomeTodoToday'
import WorkLog from './HomeWorkLog'

const Home = () => (
  <div>
    <TimerContainer />
    <div className="row">
      <div className="col-sm-9">
        <TodoToday />
      </div>
      <div className="col-sm-3">
        <WorkLog />
      </div>
    </div>
  </div>
);

export default Home;
