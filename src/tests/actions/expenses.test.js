import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup removeExpense action object', () => {
  const action = removeExpense({ id: '123abc' })

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup editExpense action obhect', () => {
  const action = editExpense('test123', { note: 'new note value' })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'test123',
    updates: { note: 'new note value' }
  })
})

test('should setup addExpense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'this was last months rent'
  }

  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup addExpense action object with default values', () => {
  const action = addExpense()

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
