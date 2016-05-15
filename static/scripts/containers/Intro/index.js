import React from 'react'
import { Link } from 'react-router'
import './intro.scss'

export default ({ isExternal }) =>
  <div className="intro-wrap">
    {
      <Link className="intro-enter-link" to="/city">立即开启有赞之旅</Link>
    }
  </div>
