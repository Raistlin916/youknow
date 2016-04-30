import React, { Component } from 'react'
import './Square.scss'

export default class Square extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            [1, 2, 3].map((item, index) => <li key={index}>list item</li>)
          }
        </ul>
      </div>
    )
  }
}
