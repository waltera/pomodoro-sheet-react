import React from 'react'
import PropTypes from 'prop-types'

const HomeTimerButton = ({timer, action, text, style, state}) => {
  const buttonText = () => {
    if (timer == undefined || timer.action != state) return text
    return text + '...'
  }
  const disabled = () => {
    if (timer == undefined) return false
    return timer.action == state
  }
  return (
    <button
      onClick={action}
      className={'btn ' + style}
      disabled={disabled()}>{buttonText()}</button>
  )
}

HomeTimerButton.propTypes = {
  timer: PropTypes.object,
  action: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.string,
  state: PropTypes.string
}

export default HomeTimerButton