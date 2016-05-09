import React from 'react'
import { Link } from 'react-router'
import ScreenAdapter from './ScreenAdapter'
import './City.scss'

export default function City() {
  document.title = '有赞百事通'
  // image size 375 * 680
  const cityHeight = Math.min(window.screen.width, 500) / 375 * 680
  return (
    <div className="city-container" style={{ height: cityHeight }}>
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
            backgroundImage: 'url(http://img.yzcdn.cn/public_files/2016/05/09/9107b89072cf5b6047cfea651e6e6ad5.png)',
            top: 255,
            right: 78,
            width: 33,
            height: 33
          }}
        />
        <div
          className="animation-icon animation-light"
          style={{
            backgroundImage: 'url(http://img.yzcdn.cn/public_files/2016/05/09/0d577cb0993f508f7fdd2e5be35606b0.png)',
            top: 560,
            left: 99,
            width: 10,
            height: 24
          }}
        />
        <div
          className="animation-icon animation-balloon"
          style={{
            backgroundImage: 'url(http://img.yzcdn.cn/public_files/2016/05/09/ec44247b9e6107b34174674eda173c41.png)',
            top: 110,
            right: 130,
            width: 49,
            height: 88
          }}
        />
        <div
          className="animation-icon animation-rice"
          style={{
            backgroundImage: 'url(http://img.yzcdn.cn/public_files/2016/05/09/7f9fda43e1d7e83a431a1bf9ce5260b1.png)',
            top: 344,
            left: 45,
            width: 53,
            height: 27
          }}
        />
        <div
          className="animation-icon animation-cloud"
          style={{
            backgroundImage: 'url(http://img.yzcdn.cn/public_files/2016/05/09/b81465ec1b93284a29bf15c99be46e38.png)',
            top: 415,
            right: 120,
            width: 17,
            height: 17
          }}
        />
      </ScreenAdapter>
    </div>
  )
}
