import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({show, level, message}) => {
  const alertClass = () => {
    let className = 'alert '

    switch (level) {
      case 'success' :
        className += 'alert-success'
        break
      case 'error':
        className += 'alert-danger'
        break
    }

    return className
  }
  const display = () => {
    if (show) {
      return ''
    }

    return 'hidden'
  }
  const alertBody = () => {
    if (!show) { return '' }

    return <div style={{display: display()}} className={alertClass()} role="alert">
      {message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  }

  return <div>{alertBody()}</div>
}

Alert.propTypes = {
  show: PropTypes.bool,
  level: PropTypes.string,
  message: PropTypes.string
}

export default Alert