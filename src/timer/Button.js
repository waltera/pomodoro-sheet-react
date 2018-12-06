import React from 'react'
import PropTypes from 'prop-types'

const Button = ({timerAction, handleClick, text, style, state}) => {
  const buttonText = () => {
    if (timerAction == undefined || timerAction != state) return text
    return text + '...'
  }
  const disabled = () => {
    if (timerAction == undefined) return false
    return timerAction == state
  }
  return (
    <button
      onClick={handleClick}
      className={'btn ' + style}
      disabled={disabled()}>{buttonText()}</button>
  )
}

Button.propTypes = {
  timerAction: PropTypes.string,
  handleClick: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.string,
  state: PropTypes.string
}

export default Button