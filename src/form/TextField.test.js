import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TextField from './TextField'

Enzyme.configure({ adapter: new Adapter() })

const setup = (custom={}) => {
  const props = Object.assign({ name: 'name', label: 'Label', size: 'col-md-4' }, custom)
  return shallow(<TextField {...props} />)
}

describe('TextField', () => {
  it('should render initial state', () => {
    const wrapper = setup()

    const div = wrapper.find('div')
    expect(div.haveClass('form-group')).toBe(true)
    expect(div.haveClass('col-md-4')).toBe(true)
  })
})