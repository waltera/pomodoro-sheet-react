import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Alert from './Alert'

Enzyme.configure({ adapter: new Adapter() })

const setup = (state) => {
  return shallow(<Alert {...state} />)
}

describe('Alert', () => {
  it('should render initial state', () => {
    const wrapper = setup()

    expect(wrapper.find('div').html()).toEqual('<div></div>')
  })

  it('should render success', () => {
    const show = true
    const level = 'success'
    const message = 'Success Message'
    const wrapper = setup({show, level, message})
    const div = wrapper.find('.alert-success')

    expect(div.text().includes('Success Message')).toBe(true)
  })

  it('should render error', () => {
    const show = true
    const level = 'error'
    const message = 'Error Message'
    const wrapper = setup({show, level, message})
    const div = wrapper.find('.alert-danger')

    expect(div.text().includes('Error Message')).toBe(true)
  })
})