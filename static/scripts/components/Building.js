import React, { PropTypes } from 'react'
import Loader from './Loader'

export default function Building({ floors, isExternal, loading }) {
  return loading ?
    <Loader /> :
    <ul className="building-floors">
      {
        floors.map((floor, index) =>
          <li
            key={index} className="floor-item"
            onClick={() => {
              const externalUrl = floor.externalUrl || '/external'
              location.href = isExternal ? externalUrl : floor.url
            }}
          >{floor.title}</li>)
      }
    </ul>
}

Building.propTypes = {
  floors: PropTypes.array.isRequired,
  isExternal: PropTypes.bool,
  loading: PropTypes.bool
}
