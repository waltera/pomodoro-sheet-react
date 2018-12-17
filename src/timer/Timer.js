import React from 'react';
import PropTypes from 'prop-types'
import ButtonPomodoro from './ButtonPomodoro'
import ButtonShortBreak from './ButtonShortBreak'
import ButtonLongBreak from './ButtonLongBreak'
import ButtonCancel from './ButtonCancel'
import {POMODORO, SHORT_BREAK, LONG_BREAK} from './timerStates'

// const Timer = ({ timer, startPomodoro, startShortBreack, stopTimer }) => {
const Timer = ({ timer, actions}) => {
  const checkAction = (action) => {
    if (!timer.action || timer.action == action) {
      return true;
    }

    return false;
  }
  const buttonPomodoro = () => {
    if (checkAction(POMODORO)) {
      return <ButtonPomodoro timer={timer} startPomodoro={actions.startPomodoro} />
    }
  }
  const buttonShortBreak = () => {
    if (checkAction(SHORT_BREAK)) {
      return <ButtonShortBreak timer={timer} startShortBreak={actions.startShortBreak} />
    }
  }
  const buttonLongBreak = () => {
    if (checkAction(LONG_BREAK)) {
      return <ButtonLongBreak timer={timer} startLongBreak={actions.startLongBreak} />
    }
  }
  const buttonCancel = () => {
    if (timer.action && timer.action.trim() != '') {
      return <ButtonCancel cancelTimer={actions.stopTimer} />
    }
  }
  return(
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-1">
          {timer.minutes}:{timer.seconds}
      </h1>
      <p className="lead">
        {buttonPomodoro()}
        {buttonShortBreak()}
        {buttonLongBreak()}
        {buttonCancel()}
      </p>
    </div>
  )
}

Timer.propTypes = {
  timer: PropTypes.object,
  actions: PropTypes.object
}

export default Timer;
