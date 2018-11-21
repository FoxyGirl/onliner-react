import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
//import rootReducer from './ducks'
import configureStore, { history } from './store'
import './index.css'
import 'antd/dist/antd.css'

import * as serviceWorker from './serviceWorker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
