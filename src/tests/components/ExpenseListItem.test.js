import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListIem from '../../components/ExpenseListItem'

test('should render an expense list item', () => {
  const wrapper = shallow(<ExpenseListIem {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})
