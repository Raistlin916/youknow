import React from 'react'
import { Link } from 'react-router'
import SearchIcon from './SearchIcon'

export default ({ children }) =>
  <div>
    {children}
    <Link to="/search"><SearchIcon /></Link>
  </div>
