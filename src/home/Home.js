import React from 'react';
import Timer from './Timer';
import TodoToday from './TodoToday';
import WorkLog from './WorkLog';

const Home = () => (
  <div>
    <Timer />
    <div className="container">
      <TodoToday />
      <WorkLog />
    </div>
  </div>
);

export default Home;
