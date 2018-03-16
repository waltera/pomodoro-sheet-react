import React from 'react';
import Head from './Head';
import Timer from './Timer';
import TodoToday from './TodoToday';
import DoneYesterday from './DoneYesterday';

const App = () => (
  <div>
    <Head />
    <Timer />
    <div className="container">
      <TodoToday />
      <DoneYesterday />
    </div>
  </div>
);

export default App;
