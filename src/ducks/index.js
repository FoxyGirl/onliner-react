import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import goods from './goods'
import basket from './basket'

const reducer = history => {
  return combineReducers({
    router: connectRouter(history),
    goods,
    basket,
  })
}

export default reducer
