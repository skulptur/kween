import * as React from 'react'
import { Canvas } from './Canvas/Canvas'
import { useCanvas } from './Canvas/useCanvas'
import { useEffect } from 'react'
import { EasingFunction, tween } from '../../src'
import { drawPoint } from '../utils/drawPoint'
import { Box, Text } from 'rebass'
import { setContextScale } from '../utils/setContextScale'
import { mapRange } from '../utils/mapRange'

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

    return tween({
      duration: 10000,
      ease,
      onUpdate: (value, progress) => {
        const x = mapRange(0, 1, padding, size * 2 - padding, progress)
        const y = mapRange(0, 1, padding, size - padding, 1 - value)

        // TODO: use paths instead of points
        drawPoint(x, y, dotRadius, 'black', context)
      },
    })
  }, [])

  return (
    <Box padding={2} margin={5} backgroundColor='primary' sx={{ display: 'inline-block' }}>
      <Text>{label}</Text>
      <Box backgroundColor='white' sx={{ display: 'inline-block' }}>
        <Canvas width={size * 2} height={size} ref={canvasRef} />
      </Box>
    </Box>
  )
}
