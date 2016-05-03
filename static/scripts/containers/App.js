import React from 'react'
import SearchIcon from './SearchIcon'
import Search from './Search'
import City from './City'

let handleMouseMove

export default ({ children }) => {
  return (
    <div>
      {children}
      {children.type !== Search && <SearchIcon />}
    </div>
  )
}
