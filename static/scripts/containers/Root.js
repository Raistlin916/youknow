import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import City from './City'
import Square from './Square'

export default function Root() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={City} />
      <Route path="/square" component={Square} />
      <Route path="*" component={City} />
    </Router>
  )
}
