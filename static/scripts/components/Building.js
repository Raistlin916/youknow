import React from 'react'

export default ({ floors }) =>
(
  <ul className="building-floors">
    {
      floors.map((floor, index) =>
        <li
          key={index} className="floor-item"
          onClick={() => { location.href = floor.url }}
        >{floor.title}</li>)
    }
  </ul>
)
