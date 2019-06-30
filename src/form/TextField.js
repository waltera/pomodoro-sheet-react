import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TextField extends Component {
  constructor(props) {
    super(props)
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.inputClass = this.inputClass.bind(this);
    this.showErrors = this.showErrors.bind(this);
  }

  setValue(event) {
    this.props.setValue(this.props.name, event.target.value)
  }

  getValue() {
    return this.state.value
  }

  inputClass() {
    if(!this.props.errors) { return 'form-control' }

    return 'form-control is-invalid'
  }

  showErrors() {
    if(!this.props.errors) { return }

    return <div className="invalid-feedback">
      {this.props.errors.join('<br />')}
    </div>
  }

  render() {
    return <div>
      <label htmlFor={this.props.name}>{this.props.label}</label>
      <input
        name={this.props.name}
        value={this.props.value}
        type="text"
        className={this.inputClass()}
        onChange={this.setValue} />
      {this.showErrors()}
    </div>
  }
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