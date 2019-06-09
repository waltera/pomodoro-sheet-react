import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TextField extends Component {
  constructor(props) {
    super(props)
    this.state = { 'value': 'sim' }
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setValue(event) {
    this.props.setValue(this.props.name, event.target.value)
  }

  getValue() {
    return this.state.value
  }

  render() {
    return <div className={"form-group "}>
      <input
        onChange={this.setValue}
        value={this.props.value}
        type="text"
        className={"form-control "} />
    </div>
  }
}

// const TextField = ({setValue, name, label, size, value}) => {
//   onChange = (event) => {
//     console.log('onChange')
//     // setValue(name, event.target.value)
//   }

//   return <div className={"form-group "}>
//     <input
//       name={name}
//       onChange={onChange(event)}
//       value={value}
//       type="text"
//       className={"form-control "} />
//   </div>
// }

// TextField.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   size: PropTypes.number.isRequired,
//   value: PropTypes.string
// }

export default TextField