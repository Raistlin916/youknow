import React from 'react'

export default props => {
  const originSize = { width: 375, height: 680 }
  const scale = window.screen.width / originSize.width
  const style = {
    transform: `scale(${scale})`,
    transformOrigin: 'left top',
    ...originSize
  }
  return <div {...props} style={style}></div>
}
