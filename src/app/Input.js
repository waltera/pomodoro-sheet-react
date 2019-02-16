import React from 'react'
import FormInvalidFeedback from './FormInvalidFeedback'

const Input = ({input, label, type, size, meta: {error}}) => {
  const invalidClass = () => {
    if(error != undefined) {
      return 'is-invalid'
    }

    return ''
  }

  const invalidFeedback = () => {
    if (error != undefined) {
      return error.map((feedback, i) => {
        return <FormInvalidFeedback key={i} feedback={feedback} />
      })
    }
  }

  return <div className={"form-group " + size}>
    <label htmlFor="{input.name}">{label}</label>

    <input
      {...input}
      type={type}
      className={"form-control " + invalidClass()} />

    {invalidFeedback()}
  </div>
}

export default Input