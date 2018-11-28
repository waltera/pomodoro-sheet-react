import React from 'react'

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
      class={'btn ' + style}
      disabled={disabled()}>{buttonText()}</button>
  )
}

export default HomeTimerButton