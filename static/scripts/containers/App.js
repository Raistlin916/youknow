import React from 'react'
import SearchIcon from './SearchIcon'
import Square from './Square'
import City from './City'


export default ({ children }) => {
  return (
    <div>
      {children}
      {(children.type === Square || children.type === City) && <SearchIcon />}
    </div>
  )
}
