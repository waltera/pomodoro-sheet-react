import React from 'react'
import PropTypes from 'prop-types'
import {LONG_BREAK} from './timerStates'
import Button from './Button'

const ButtonLongBreak = ({timer, startLongBreak}) => {
  return <Button
    timerAction={timer.action}
    handleClick={startLongBreak}
    stateAction={LONG_BREAK}
    style='btn-warning mr-1'
    text='Long Break'
  />
}

ButtonLongBreak.propTypes = {
  timer: PropTypes.object,
  startLongBreak: PropTypes.func,
}

export default ButtonLongBreak