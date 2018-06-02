import React from 'react'
import Timer from './Timer'
import TodoToday from './TodoToday'
import WorkLog from './WorkLog'

const Home = () => (
  <div>
    <Timer />
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
