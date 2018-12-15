import React from 'react'
import Enzyme, {render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SHORT_BREAK} from './timerStates'
import ButtonShortBreak from './ButtonShortBreak'

Enzyme.configure({ adapter: new Adapter() })

const setup = (action) => {
  const startShortBreak = jest.fn()
  const timer = {
    action: action,
    minutes: '00',
    seconds: '00'
  }
  const initialState = {
    timer,
    startShortBreak
  }

  return render(<ButtonShortBreak {...initialState} />)
}

describe('ButtonShortBreak', () => {
  it('render initial state', () => {
    const wrapper = setup()

    expect(wrapper.text()).toBe('Short Break')
    expect(wrapper.prop('class')).toBe('btn btn-info mr-1')
    expect(wrapper.prop('disabled')).toBe(false)
  })

  it('render action state', () => {
    const wrapper = setup(SHORT_BREAK)

    expect(wrapper.text()).toBe('Short Break...')
    expect(wrapper.prop('class')).toBe('btn btn-info mr-1')
    expect(wrapper.prop('disabled')).toBe(true)
  })
})