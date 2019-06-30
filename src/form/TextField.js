import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({setValue, name, label, wrapperClass, value, errors}) => {
  const onChange = (event) => {
    setValue(name, event.target.value)
  }

  const inputClass = () => {
    if(!errors) { return 'form-control' }

    return 'form-control is-invalid'
  }

  const showErrors = () => {
    if(!errors) { return }

    return <div className="invalid-feedback">
      {errors.join('<br />')}
    </div>
  }

  return <div className={wrapperClass}>
    <label htmlFor={name}>{label}</label>
    <input
      name={name}
      value={value}
      type="text"
      className={inputClass()}
      onChange={onChange} />
    {showErrors()}
  </div>
}

TextField.propTypes = {
  setValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.array
}

export default TextField