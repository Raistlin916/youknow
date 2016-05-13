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
    Promise.race([
      this.sniffer(),
      new Promise((resolve, reject) => setTimeout(reject, 1000))
    ]).then(() => this.setState({ isExternal: false }))
      .catch(() => this.setState({ isExternal: true }))
  }

  sniffer() {
    const img = new Image()
    img.src = 'http://doc.qima-inc.com'
    return new Promise((resolve, reject) => {
      img.onerror = img.onload = resolve
    })
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
