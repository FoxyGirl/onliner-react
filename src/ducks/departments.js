import { createAction, createReducer } from 'redux-act'
import axios from 'axios'
import { API } from 'src/services'

export const REDUCER = 'DEPARTMENTS'

const NS = `${REDUCER}__`

const initialState = {
  data: [],
  isLoading: false,
}

const reducer = createReducer({}, initialState)

const readRequest = createAction(`${NS}READ_REQUEST`)
reducer.on(readRequest, state => ({
  ...state,
  isLoading: true,
}))

const readSuccess = createAction(`${NS}READ_SUCCESS`)
reducer.on(readSuccess, (state, items) => ({
  ...state,
  data: items,
  isLoading: false,
}))

const readFailure = createAction(`${NS}READ_FAILURE`)
reducer.on(readFailure, state => ({
  ...state,
  isLoading: false,
}))

export const readDepartments = () => dispatch => {
  dispatch(readRequest())
  return axios
    .get(`${API}departments/`)
    .then(({ status, statusText, data }) => {
      if (status !== 200) {
        throw new Error(statusText)
      }
      // console.log(`${NS}data = ${JSON.stringify(data)}`)
      dispatch(readSuccess(data))
    })
    .catch(error => {
      dispatch(readFailure())
      return Promise.reject(error)
    })
}

export default reducer
