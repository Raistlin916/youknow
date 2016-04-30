import React from 'react'
import { Link } from 'react-router'
import ScreenAdapter from './ScreenAdapter'
import './city.scss'

export default function City() {
  return (
    <div className="city-container">
      <ScreenAdapter className="link-wrap">
        <Link
          to={'/square'} className="city-link"
          style={{ marginLeft: '-70px', top: '70px' }}
        />
        <Link
          to={'/square'} className="city-link"
          style={{ marginLeft: '70px', top: '160px' }}
        />
        <Link
          to={'/square'} className="city-link"
          style={{ marginLeft: '-70px', top: '250px' }}
        />
        <Link
          to={'/square'} className="city-link"
          style={{ marginLeft: '70px', top: '350px' }}
        />
        <Link
          to={'/square'} className="city-link"
          style={{ marginLeft: '-70px', top: '420px' }}
        />
      </ScreenAdapter>
    </div>
  )
}
