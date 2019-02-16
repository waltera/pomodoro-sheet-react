import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FormInvalidFeedback from './FormInvalidFeedback'

Enzyme.configure({ adapter: new Adapter() })

const setup = (feedback) => {
  return shallow(<FormInvalidFeedback feedback={feedback} />)
}

describe('FormInvalidFeedback', () => {
  it('shoud render initial state', () => {
    const wrapper = setup()

    expect(wrapper.find('.invalid-feedback').length).toBe(1)
  })

  it('shoud render error state', () => {
    const wrapper = setup('Error message')

    expect(wrapper.find('.invalid-feedback').text()).toBe('Error message')
  })
})