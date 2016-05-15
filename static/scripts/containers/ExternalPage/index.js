import React from 'react'
import './externalPage.scss'

export default () =>
  <div className="external-page-wrap">
    <h4>啊哦，出错了？</h4>
    <div className="dinosaur"></div>
    <div>
      <p>该页面需要在内网环境打开，请先检查是否连接名为 youzan-office 的 wifi——</p>
      <ol>
        <li>若未连接，请返回引导页，根据 wifi 连接指南完成操作</li>
        <li>若已连接，请刷新页面重试</li>
      </ol>
    </div>
  </div>
