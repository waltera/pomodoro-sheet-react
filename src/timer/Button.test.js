import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.2'
import Button from './Button'
import * as timerStates from './timerStates'

Enzyme.configure({ adapter: new Adapter() })

const setup = (timerProps) => {
  return shallow(<Button {...timerProps} />)
}

describe('Button', () => {
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
    const handleClick = jest.fn()
    const wrapper = setup({handleClick})
    wrapper.find('button').simulate('click')

    expect(handleClick.mock.calls.length).toBe(1)
  })

  it('handle action state', () => {
    const text = 'Text'
    const timerAction = timerStates.POMODORO
    const state = timerStates.POMODORO
    const wrapper = setup({text, timerAction, state})
    const button = wrapper.find('button')

    expect(button.text()).toBe('Text...')
    expect(button.prop('disabled')).toBe(true)
  })

  it('handle other action', () => {
    const text = 'Text'
    const timerAction = timerStates.POMODORO
    const state = timerStates.LONG_BREAK
    const wrapper = setup({text, timerAction, state})
    const button = wrapper.find('button')

    expect(button.text()).toBe('Text')
    expect(button.prop('disabled')).toBe(false)
  })
})