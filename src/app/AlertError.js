import React from 'react'
import PropTypes from 'prop-types'

const AlertError = ({message}) => {
  const display = () => {
    if (message == undefined) {
      return 'none'
    }

    return ''
  }

  return <div style={{display: display()}} className="alert alert-danger" role="alert">
    {message}
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
}

AlertError.propTypes = {
  message: PropTypes.string
}

export default AlertError