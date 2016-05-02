import React from 'react'
import { Link } from 'react-router'
import ScreenAdapter from './ScreenAdapter'
import './City.scss'

export default function City() {
  document.title = '有赞百事通'
  return (
    <div className="city-container">
      <h3>欢迎开启有赞探险之旅</h3>
      <p>点击对应模块进入，或搜索输入关键词，了解更多信息！</p>
      <ScreenAdapter className="link-wrap">
        <Link
          to={'/square/zixun'} className="city-link"
          style={{ marginLeft: -76, top: 86 }}
        />
        <Link
          to={'/square/hr'} className="city-link"
          style={{ marginLeft: 76, top: 200 }}
        />
        <Link
          to={'/square/enjoy'} className="city-link"
          style={{ marginLeft: -76, top: 300 }}
        />
        <Link
          to={'/square/tiyan'} className="city-link"
          style={{ marginLeft: 76, top: 410 }}
        />
        <Link
          to={'/square/zhanghao'} className="city-link"
          style={{ marginLeft: -76, top: 505 }}
        />
        <div
          className="animation-icon animation-boat"
          style={{
            backgroundImage: 'url(/assets/boat.png)',
            top: 255,
            right: 78,
            width: 33,
            height: 33
          }}
        />
        <div
          className="animation-icon animation-light"
          style={{
            backgroundImage: 'url(/assets/light.png)',
            top: 560,
            left: 99,
            width: 10,
            height: 24
          }}
        />
      </ScreenAdapter>
    </div>
  )
}
