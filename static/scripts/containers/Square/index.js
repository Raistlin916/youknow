import React, { Component } from 'react'
import './Square.scss'
import buildings from './buildings'

export default class Square extends Component {
  render() {
    const { params: { building: buildingName } } = this.props
    const building = buildings[buildingName]
    document.title = building.name

    return (
      <div className="square-wrap">
        <h2 className="building-name">{building.name}</h2>
        <ul className="building-floors">
          {
            building.items.map((floor, index) =>
              <li
                key={index} className="floor-item"
                onClick={() => { location.href = floor.url }}
              >{floor.title}</li>)
          }
        </ul>
      </div>
    )
  }
}
