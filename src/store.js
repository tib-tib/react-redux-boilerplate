import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

const combinedReducers = combineReducers(reducers)

export default function(initialState) {
  return createStore(combinedReducers, initialState, composeWithDevTools())
}
