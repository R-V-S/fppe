import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders hello world', () => {
  expect(Enzyme.mount(<App />).text()).to.contain('Hello Maxwell')
})
