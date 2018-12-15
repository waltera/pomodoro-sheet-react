import React from 'react'
import PropTypes from 'prop-types'
import {POMODORO} from './timerStates'
import Button from './Button'

const ButtonPomodoro = ({timer, startPomodoro}) => {
  return <Button
    timerAction={timer.action}
    handleClick={startPomodoro}
    stateAction={POMODORO}
    style="btn btn-success mr-1"
    text='Pomodoro'
  />
}

ButtonPomodoro.propTypes = {
  timer: PropTypes.object,
  startPomodoro: PropTypes.func,
}

export default ButtonPomodoro