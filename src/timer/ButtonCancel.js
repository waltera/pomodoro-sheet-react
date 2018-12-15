import React from 'react'
import PropTypes from 'prop-types'

const ButtonCancel = ({cancelTimer}) => {
  return <button
    onClick={cancelTimer}
    className='btn btn-danger'>Cancelar</button>
}

ButtonCancel.propTypes = {
  cancelTimer: PropTypes.func
}

export default ButtonCancel