import configureStore from 'redux-mock-store'
import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TaskNew from './TaskNew'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  mount()
}

describe('TaskNew', () => {
  it('should render initial state', () => {

  })
})