import React from 'react'
import Enzyme, {render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {LONG_BREAK} from './timerStates'
import ButtonLongBreak from './ButtonLongBreak'

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

  return render(<ButtonLongBreak {...initialState} />)
}

describe('ButtonLongBreak', () => {
  it('render initial state', () => {
    const wrapper = setup()

    expect(wrapper.text()).toBe('Long Break')
    expect(wrapper.prop('class')).toBe('btn btn-warning mr-1')
    expect(wrapper.prop('disabled')).toBe(false)
  })

  it('render action state', () => {
    const wrapper = setup(LONG_BREAK)

    expect(wrapper.text()).toBe('Long Break...')
    expect(wrapper.prop('class')).toBe('btn btn-warning mr-1')
    expect(wrapper.prop('disabled')).toBe(true)
  })
})