import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AlertError from './AlertError'

Enzyme.configure({ adapter: new Adapter() })

const setup = (message) => {
  return shallow(<AlertError message={message} />)
}

describe('AlertError', () => {
  it('should render initial state', () => {
    const wrapper = setup()

    expect(wrapper.find('.alert-danger').prop('style')).toEqual({display: 'none'})
  })

  it('should render error state', () => {
    const wrapper = setup('Error')

    expect(wrapper.find('.alert-danger').prop('style')).toEqual({display: ''})
  })
})