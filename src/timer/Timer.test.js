import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Timer from './Timer'
import {POMODORO, SHORT_BREAK, LONG_BREAK} from './timerStates'

Enzyme.configure({ adapter: new Adapter() })

const setup = (action) => {
  const startPomodoro = jest.fn()
  const startShortBreak = jest.fn()
  const startLongBreak = jest.fn()
  const cancelTimer = jest.fn()
  const timer = {
    action: action,
    minutes: '00',
    seconds: '00'
  }
  const actions = {
    startPomodoro,
    startShortBreak,
    startLongBreak,
    cancelTimer
  }
  const initialState = {
    timer,
    actions
  }
  const wrapper = mount(<Timer {...initialState} />)

  return {
    startPomodoro,
    startShortBreak,
    startLongBreak,
    cancelTimer,
    wrapper
  }
}

describe('Timer', () => {
  it('render initial state', () => {
    const {wrapper} = setup()
    const divContainer = wrapper.find('.pricing-header')
    const expectedContainerClass = 'pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'
    const buttons = divContainer.find('.lead').find('button')

    expect(divContainer.prop('className')).toBe(expectedContainerClass)
    expect(buttons.length).toBe(3)
    expect(buttons.at(0).text()).toBe('Pomodoro')
    expect(buttons.at(1).text()).toBe('Short Break')
    expect(buttons.at(2).text()).toBe('Long Break')
  })

  it('render pomodoro state', () => {
    const {wrapper} = setup(POMODORO)
    const buttons = wrapper.find('.pricing-header').find('.lead').find('button')

    expect(buttons.length).toBe(2)
    expect(buttons.at(0).text()).toBe('Pomodoro...')
    expect(buttons.at(1).text()).toBe('Cancelar')
  })

  it('render short break', () => {
    const {wrapper} = setup(SHORT_BREAK)
    const buttons = wrapper.find('.pricing-header').find('.lead').find('button')

    expect(buttons.length).toBe(2)
    expect(buttons.at(0).text()).toBe('Short Break...')
    expect(buttons.at(1).text()).toBe('Cancelar')
  })

  it('render long brak', () => {
    const {wrapper} = setup(LONG_BREAK)
    const buttons = wrapper.find('.pricing-header').find('.lead').find('button')

    expect(buttons.length).toBe(2)
    expect(buttons.at(0).text()).toBe('Long Break...')
    expect(buttons.at(1).text()).toBe('Cancelar')
  })
})