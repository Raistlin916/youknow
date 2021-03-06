import React from 'react'

export default props => {
  const originSize = { width: 375, height: 680 }
  const scale = Math.min(window.screen.width, 500) / originSize.width
  const style = {
    transform: `scale(${scale}) translate(-50%, 0)`,
    WebkitTransform: `scale(${scale}) translate(-50%, 0)`,
    transformOrigin: 'left top',
    WebkitTransformOrigin: 'left top',
    ...originSize
  }
  return <div {...props} style={style}></div>
}
