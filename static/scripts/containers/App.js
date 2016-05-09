import React from 'react'
import SearchIcon from './SearchIcon'
import Square from './Square'
import City from './City'
import Intro from './Intro'

export default ({ children }) => {
  window.ontouchmove = e => {
    if (children.type === Intro) {
      e.preventDefault()
    }
  }
  return (
    <div>
      {children}
      {(children.type === Square || children.type === City) && <SearchIcon />}
    </div>
  )
}
