import { createAction, createReducer } from 'redux-act'

export const REDUCER = 'FILTER'

const NS = `${REDUCER}__`

const initialState = {
  producerFilter: [],
}

const reducer = createReducer({}, initialState)

const startSearch = createAction(`${NS}PRODUCER_GOOD`)
reducer.on(startSearch, (state, producerFilter) => ({
  ...state,
  producerFilter,
}))

export const filterGood = producerFilter => dispatch => {
  dispatch(startSearch(producerFilter))
}

export default reducer
