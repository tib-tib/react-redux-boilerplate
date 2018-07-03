import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'

export default (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
)
