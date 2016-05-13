import React, { Component } from 'react'
import SearchIcon from './SearchIcon'
import Square from './Square'
import City from './City'
import Intro from './Intro'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isExternal: false
    }
  }

  componentDidMount() {
    this.sniffer()
      .then(() => this.setState({ isExternal: false }))
      .catch(() => this.setState({ isExternal: true }))

    const img = new Image()
    img.src = 'http://img.yzcdn.cn/public_files/2016/05/09/a903e4e4de9c5591b411ac105c6be5a0.png'
  }

  sniffer() {
    const imgSniffer = new Promise(resolve => {
      const img = new Image
      img.src = 'http://doc.qima-inc.com'
      img.onerror = img.onload = resolve

      setTimeout(() => { img.src = '/' }, 1100)
    })

    return Promise.race([
      imgSniffer,
      new Promise((resolve, reject) => setTimeout(reject, 1000))
    ])
  }

  render() {
    const { children } = this.props
    const { isExternal } = this.state

    window.ontouchmove = e => {
      if (children.type === Intro) {
        e.preventDefault()
      }
    }

    return (
      <div>
        {React.cloneElement(children, { isExternal })}
        {
          (children.type === Square || children.type === City) && <SearchIcon />
        }
      </div>
    )
  }
}
