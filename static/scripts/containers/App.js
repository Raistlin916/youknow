import React from 'react'
import SearchIcon from './SearchIcon'
import Search from './Search'

export default ({ children }) =>
  <div>
    {children}
    {children.type !== Search && <SearchIcon />}
  </div>
