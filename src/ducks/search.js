import { createAction, createReducer } from 'redux-act'
import axios from 'axios'
import { API } from 'src/services'

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
