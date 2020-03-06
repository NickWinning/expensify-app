import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense with valid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should remove expense with invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 4
  }

  const state = expensesReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    amount: 1000,
    note: 'test note',
    description: 'test description'
  }
  const state = expensesReducer(expenses, action)
  expect(state.length).toBe(4)
})

test('should edit and expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: { amount: 10000 }
  }

  const state = expensesReducer(expenses, action)
  expect(state[0].amount).toBe(10000)
})

test('should not edit expense if expense is not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '100',
    updates: { amount: 10000 }
  }

  const state = expensesReducer(expenses, action)
  expect(expenses).toEqual(state)
})
