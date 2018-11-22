import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import departments from './departments'
import goods from './goods'
import basket from './basket'
import search from './search'

const reducer = history => {
  return combineReducers({
    router: connectRouter(history),
    departments,
    goods,
    search,
    basket,
  })
}

export default reducer
