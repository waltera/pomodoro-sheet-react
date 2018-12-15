import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ButtonCancel from './ButtonCancel'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const cancelTimer = jest.fn()
  const wrapper = shallow(<ButtonCancel cancelTimer={cancelTimer} />)

  return {
    cancelTimer,
    wrapper
  }
}

describe('ButtonCancel', () => {
  it('render button', () => {
    const {wrapper} = setup()
    const button = wrapper.find('button')

    expect(button.text()).toBe('Cancelar')
    expect(button.prop('className')).toBe('btn btn-danger')
  })

  it('handle click', () => {
    const {wrapper, cancelTimer} = setup()
    const button = wrapper.find('button')

    button.simulate('click')

    expect(cancelTimer.mock.calls.length).toBe(1)
  })
})