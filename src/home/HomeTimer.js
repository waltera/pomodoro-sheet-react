import React from 'react';

const HomeTimer = ({ timer, actions }) => {
  console.log(timer)
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timer % (1000 * 60)) / 1000)

  console.log(minutes)
  console.log(seconds)

  return(
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-1">
          {minutes}:{seconds}
      </h1>
      <p className="lead">
        <button type="button" className="btn btn-success mr-1" onClick={() => actions.startPomodoro()}>Pomodoro</button>
        <button type="button" className="btn btn-info mr-1">Short Break</button>
        <button type="button" className="btn btn-warning">Long Break</button>
      </p>
    </div>
  )
}

export default HomeTimer;
