import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import routes from './routes'
import createStore from './store'

const store = createStore({})

const App = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>{routes}</BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
}

App()

export default hot(module)(App)
