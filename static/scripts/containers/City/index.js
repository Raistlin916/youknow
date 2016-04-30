import React from 'react'
import { Link } from 'react-router'
import ScreenAdapter from './ScreenAdapter'
import './City.scss'

export default function City() {
  document.title = '有赞百事通'
  return (
    <div className="city-container">
      <ScreenAdapter className="link-wrap">
        <Link
          to={'/square/zixun'} className="city-link"
          style={{ marginLeft: '-70px', top: '70px' }}
        />
        <Link
          to={'/square/hr'} className="city-link"
          style={{ marginLeft: '70px', top: '160px' }}
        />
        <Link
          to={'/square/enjoy'} className="city-link"
          style={{ marginLeft: '-70px', top: '250px' }}
        />
        <Link
          to={'/square/tiyan'} className="city-link"
          style={{ marginLeft: '70px', top: '350px' }}
        />
        <Link
          to={'/square/zhanghao'} className="city-link"
          style={{ marginLeft: '-70px', top: '420px' }}
        />
      </ScreenAdapter>
    </div>
  )
}
