import React from 'react'
import PropTypes from 'prop-types'
import {SHORT_BREAK} from './timerStates'
import Button from './Button'

const ButtonShortBreak = ({timer, startShortBreak}) => {
  return <Button
    timerAction={timer.action}
    handleClick={startShortBreak}
    stateAction={SHORT_BREAK}
    style='btn-info mr-1'
    text='Short Break'
  />
}

ButtonShortBreak.propTypes = {
  timer: PropTypes.object,
  startShortBreak: PropTypes.func,
}

export default ButtonShortBreak