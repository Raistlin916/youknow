import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import City from './City'
import Square from './Square'
import App from './App'
import Search from './Search'
import Intro from './Intro'
import './root.scss'

export default function Root() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Intro} />
        <Route path="city" component={City} />
        <Route path="square/search" component={Search} />
        <Route path="square/:building" component={Square} />
        <Route path="*" component={City} />
      </Route>
    </Router>
  )
}
