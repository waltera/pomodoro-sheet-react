import React from 'react'

const Input = ({input, meta, label, type, size}) => {
  const invalidClass = () => {
    if(meta.error != undefined) {
      return 'is-invalid'
    }

    return ''
  }

  return <div className={"form-group " + size}>
    <label htmlFor="{input.name}">{label}</label>

    <input
      {...input}
      type={type}
      className={"form-control " + invalidClass()} />

    <div className="invalid-feedback">
      {meta.error}
    </div>
  </div>
}

export default Input