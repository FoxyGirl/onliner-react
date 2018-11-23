import { createAction, createReducer } from 'redux-act'

export const REDUCER = 'SEARCH'

const NS = `${REDUCER}__`

const initialState = {
  searchFilter: '',
}

const reducer = createReducer({}, initialState)

const startSearch = createAction(`${NS}SEARCH_GOOD`)
reducer.on(startSearch, (state, searchInput) => ({
  ...state,
  searchFilter: searchInput,
}))

export const searchGood = searchFilter => dispatch => {
  dispatch(startSearch(searchFilter))
}

export default reducer
