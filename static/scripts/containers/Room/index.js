import React, { Component, PropTypes } from 'react'

export default class Floor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    const { roomId } = this.props.routeParams
  }

  render() {
    const { title, content } = this.state
    return (
      <div>
        <h4>{title}</h4>
        <div>{content}</div>
      </div>
    )
  }
}
