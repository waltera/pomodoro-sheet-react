import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.2'
import HomeTimerButton from './HomeTimerButton'
import { timerStates } from './homeTypes'

Enzyme.configure({ adapter: new Adapter() })

const setup = (timerProps) => {
  return shallow(<HomeTimerButton {...timerProps} />)
}

describe('HomeTimerButton', () => {
  it('render initial state', () => {
    const text = 'Text'
    const style = 'btn-success mr-1'
    const wrapper = setup({text, style})
    const button = wrapper.find('button')

    expect(button.text()).toBe('Text')
    expect(button.prop('className')).toBe('btn btn-success mr-1')
    expect(button.prop('disabled')).toBe(false)
  })

  it('handle onClick', () => {
    const action = jest.fn()
    const wrapper = setup({action})
    wrapper.find('button').simulate('click')

    expect(action.mock.calls.length).toBe(1)
  })

  it('handle action state', () => {
    const text = 'Text'
    const timer = { action: timerStates.POMODORO }
    const state = timerStates.POMODORO
    const wrapper = setup({text, timer, state})
    const button = wrapper.find('button')

    expect(button.text()).toBe('Text...')
    expect(button.prop('disabled')).toBe(true)
  })

  it('handle other action', () => {
    const text = 'Text'
    const timer = { action: timerStates.POMODORO }
    const state = timerStates.LONG_BREAK
    const wrapper = setup({text, timer, state})
    const button = wrapper.find('button')

    expect(button.text()).toBe('Text')
    expect(button.prop('disabled')).toBe(false)
  })
})