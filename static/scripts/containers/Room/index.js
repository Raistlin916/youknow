import React, { Component, PropTypes } from 'react'
import Loader from '../../components/Loader'
import { fetchJSON } from '../../utils/fetch'
import './room.scss'

export default class Floor extends Component {
  static propTypes = {
    routeParams: PropTypes.object
  };

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      loading: true
    }
  }

  componentDidMount() {
    const { roomId } = this.props.routeParams
    fetchJSON(`/api/room/${roomId}`)
      .then(data => this.setState(Object.assign(data, { loading: false })))
      .catch(error => {
        console.log(error)
        this.setState({ loading: false })
      })
  }

  render() {
    const { title, content, loading } = this.state
    return loading ?
      <Loader /> :
      <div className="room-wrap">
        <h4 className="building-name">{title}</h4>
        <div className="room-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
  }
}
