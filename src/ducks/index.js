import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import catalog from './catalog'
import goods from './goods'
import basket from './basket'

const reducer = history => {
  return combineReducers({
    router: connectRouter(history),
    catalog,
    goods,
    basket,
  })
}

export default reducer
