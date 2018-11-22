import { createAction, createReducer } from 'redux-act'
import axios from 'axios'
import { API } from 'src/services'

export const REDUCER = 'SEARCH'

const NS = `${REDUCER}__`

const initialState = {
  search: '',
  isLoading: false,
}

const reducer = createReducer({}, initialState)

const startSearch = createAction(`${NS}SEARCH_GOOD`)
reducer.on(startSearch, (state, searchInput) => ({
  ...state,
  search: searchInput,
  isLoading: true,
}))

export const searchGood = search => dispatch => {
  dispatch(startSearch(search))
}

export default reducer
