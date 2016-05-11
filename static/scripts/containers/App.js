import React, { Component } from 'react'
import SearchIcon from './SearchIcon'
import Square from './Square'
import City from './City'
import Intro from './Intro'
import fetch from '../utils/fetch'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isExternal: false
    }
  }

  componentDidMount() {
    Promise.race([
      fetch('http://doc.qima-inc.com', { method: 'HEAD' }),
      new Promise((resolve, reject) => setTimeout(reject, 1000))
    ]).then(() => this.setState({ isExternal: false }))
      .catch(() => this.setState({ isExternal: true }))
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
