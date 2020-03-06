import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })

  expect(state.sortBy).toEqual('amount')
})

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().startOf('month')
  }

  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)

  expect(state.sortBy).toBe('date')
})

test('should set text for filter value', () => {
  const text = 'test filter'
  const filters = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, filters)

  expect(state.text).toBe(text)
})

test('should set start date for filter value', () => {
  const startDate = moment()
  const filters = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer(undefined, filters)

  expect(state.startDate).toBe(startDate)
})

test('should set end date for filter value', () => {
  const endDate = moment()
  const filters = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filtersReducer(undefined, filters)

  expect(state.endDate).toBe(endDate)
})
