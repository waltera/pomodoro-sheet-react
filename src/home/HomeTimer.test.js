import React from 'react';
import Enzime, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.2'
import HomeTimer from './HomeTimer'
import { timerStates } from './homeTypes'

Enzime.configure({ adapter: new Adapter() })

const setup = (action) => {
  const props = {
    timer: {
      action: action,
      minutes: 1,
      seconds: 1
    }
  }

  return shallow(<HomeTimer {...props} />)
}


describe('HomeTimer', () => {
  it('render initial state', () => {
    const wrapper = setup(undefined)

    console.log(wrapper.find('button[disabled="true"]'))

    expect(wrapper.find('.btn-success').text()).toBe('Pomodoro')
    expect(wrapper.find('.btn-info').text()).toBe('Short Break')
    expect(wrapper.find('.btn-warning').text()).toBe('Long Break')
  })

  it('render pomodoro state', () => {
    const wrapper = setup(timerStates.POMODORO)

    const pomodoroButton = wrapper.find('.btn-success')
    expect(pomodoroButton.text()).toBe('Pomodoro...')
    expect(pomodoroButton.prop('disabled')).toBe(true)
  })

  it('render short break state', () => {

  })

  it('render long break state', () => {

  })
})