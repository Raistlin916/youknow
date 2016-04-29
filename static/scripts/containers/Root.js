import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import City from './City'

export default function Root() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={City} />
      <Route path="*" component={City} />
    </Router>
  )
}
