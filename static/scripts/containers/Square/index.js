import React, { Component } from 'react'
import './Square.scss'
import buildings from '../buildings'
import Building from '../../components/Building'

export default class Square extends Component {

  constructor(props) {
    super(props)
    const { params: { building: buildingName } } = this.props
    this.state = {
      loading: false,
      building: {
        items: [],
        name: buildingName
      }
    }
  }

  componentWillMount() {
    const { params: { building: buildingName } } = this.props

    this.setState({
      loading: true
    })
    buildings.get(buildingName)
      .then(building =>
        this.setState({
          building,
          loading: false
        }))
  }

  render() {
    const { building, loading } = this.state
    const { isExternal } = this.props
    document.title = building.name

    return (
      <div className="square-wrap">
        <h2 className="building-name">{building.name}</h2>
        <Building floors={building.items} loading={loading} isExternal={isExternal} />
      </div>
    )
  }
}
