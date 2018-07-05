import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const combinedReducers = combineReducers(reducers)

export default function(initialState) {
  const store = createStore(combinedReducers, initialState, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
