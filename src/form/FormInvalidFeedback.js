import React from 'react'
import PropTypes from 'prop-types'

const FormInvalidFeedback = ({feedback}) => {
  return <div className="invalid-feedback">
    {feedback}
  </div>
}

FormInvalidFeedback.propTypes = {
  feedback: PropTypes.string
}

export default FormInvalidFeedback