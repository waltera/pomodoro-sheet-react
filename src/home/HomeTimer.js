import React from 'react';
import HomeTimerButton from './HomeTimerButton'
import { timerStates } from './homeTypes'

const HomeTimer = ({ timer, startPomodoro, stopTimer }) => {
  return(
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-1">
          {timer.minutes}:{timer.seconds}
      </h1>
      <p className="lead">
        <HomeTimerButton
          timer={timer}
          action={startPomodoro}
          state={timerStates.POMODORO}
          style="btn btn-success mr-1"
          text='Pomodoro'
        />

        <button type="button" className="btn btn-info mr-1" onClick={stopTimer}>Short Break</button>
        <button type="button" className="btn btn-warning">Long Break</button>
      </p>
    </div>
  )
}

export default HomeTimer;
