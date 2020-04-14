import * as React from 'react'

interface CanvasProps {
  width: number
  height: number
}

export const Canvas = React.forwardRef<HTMLCanvasElement, CanvasProps>(({ width, height }, ref) => {
  return (
    <canvas
      ref={ref}
      width={width * devicePixelRatio}
      height={height * devicePixelRatio}
      style={{
        width,
        height,
        position: 'relative',
      }}
    />
  )
})
