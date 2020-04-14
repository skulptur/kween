import * as React from 'react'
import { Canvas } from './Canvas/Canvas'
import { useCanvas } from './Canvas/useCanvas'
import { useEffect } from 'react'
import { EasingFunction, tween } from '../../src'
import { drawPoint } from '../utils/drawPoint'
import { Box, Text } from 'rebass'
import { setContextScale } from '../utils/setContextScale'
import { mapTweenRange } from '../utils/mapRange'
import { drawRectangle } from '../utils/drawRectangle'

interface EasingGraphProps {
  label: string
  ease: EasingFunction
  size?: number
}

export const EasingGraph: React.FC<EasingGraphProps> = ({ ease, label, size = 200 }) => {
  const { canvasRef, contextRef } = useCanvas()

  useEffect(() => {
    const context = contextRef.current
    if (!context) return

    setContextScale(2, 2, context)

    const padding = 50
    const dotRadius = 1
    const x1 = padding
    const y1 = padding
    const x2 = size * 2 - padding
    const y2 = size - padding

    drawRectangle(x1, y1, x2, y2, 'rgb(0,0,0,0.5)', context)

    return tween({
      duration: 10000,
      ease,
      onUpdate: (value, progress) => {
        const x = mapTweenRange(x1, x2, progress)
        const y = mapTweenRange(y1, y2, 1 - value)

        // TODO: use paths instead of points
        drawPoint(x, y, dotRadius, 'black', context)
      },
    })
  }, [])

  return (
    <Box padding={2} margin={2} backgroundColor='secondaryBg' sx={{ display: 'inline-block' }}>
      <Text>{label}</Text>
      <Box backgroundColor='white' sx={{ display: 'inline-block' }}>
        <Canvas width={size * 2} height={size} ref={canvasRef} />
      </Box>
    </Box>
  )
}
