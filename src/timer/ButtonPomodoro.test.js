import React from 'react'
import Enzyme, {render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.2'
import ButtonPomodoro from './ButtonPomodoro'
import {POMODORO} from './timerStates'

Enzyme.configure({ adapter: new Adapter() })

const setup = (action) => {
  const timer = {
    action: action,
    minutes: '00',
    seconds: '00'
  }
  const startPomodoro = jest.fn()

  const initialState = {timer, startPomodoro}

  return render(<ButtonPomodoro {...initialState} />)
}

describe('ButtonPomodoro', () => {
  it('render initial state', () => {
    const wrapper = setup()

    expect(wrapper.text()).toBe('Pomodoro')
    expect(wrapper.prop('class')).toBe('btn btn btn-success mr-1')
    expect(wrapper.prop('disabled')).toBe(false)
  })

  it('render action state', () => {
    const wrapper = setup(POMODORO)

    expect(wrapper.text()).toBe('Pomodoro...')
    expect(wrapper.prop('class')).toBe('btn btn btn-success mr-1')
    expect(wrapper.prop('disabled')).toBe(true)
  })
})
