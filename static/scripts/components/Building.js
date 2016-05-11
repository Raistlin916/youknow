import React from 'react'

export default ({ floors, isExternal }) =>
(
  <ul className="building-floors">
    {
      floors.map((floor, index) =>
        <li
          key={index} className="floor-item"
          onClick={() => {
            location.href = isExternal ? '/external' : floor.url
          }}
        >{floor.title}</li>)
    }
  </ul>
)
