import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TextField from './TextField'

Enzyme.configure({ adapter: new Adapter() })

const setup = (custom={}) => {
  const setValue = jest.fn()
  const props = Object.assign({setValue, name: 'name', label: 'Label'}, custom)
  const wrapper = shallow(<TextField {...props} />)
  return {
    wrapper,
    setValue
  }
}

describe('TextField', () => {
  it('should render initial state', () => {
    const {wrapper} = setup()

    // Assert input
    const input = wrapper.find('input')
    expect(input.hasClass('form-control')).toBe(true)
    expect(input.prop('name')).toBe('name')
    expect(input.prop('type')).toBe('text')

    // Assert label
    const label = wrapper.find('label')
    expect(label.prop('htmlFor')).toBe('name')
    expect(label.text()).toBe('Label')
  })

  it('should render with error', () => {
    const errors = ['erro1', 'erro2']
    const {wrapper} = setup({errors})

    // Assert input
    const input = wrapper.find('input')
    expect(input.hasClass('is-invalid')).toBe(true)

    // Assert error message
    const message = wrapper.find('.invalid-feedback')
    expect(message.text()).toBe('erro1<br />erro2')
  })

  it('should call set value on change', () => {
    const {wrapper, setValue} = setup()
    const input = wrapper.find('input')
    input.simulate('change', {target: {value: 'My new value'}})

    expect(setValue.mock.calls.length).toBe(1)
  })
})