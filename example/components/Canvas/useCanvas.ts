import { useRef, useEffect } from 'react'

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null | undefined>()
  const contextRef = useRef<CanvasRenderingContext2D | null>()

  useEffect(() => {
    if (!canvasRef.current || contextRef.current) return
    contextRef.current = canvasRef.current.getContext('2d')
  }, [contextRef, canvasRef])

  return {
    // TODO: there seems to be a mismatch in the React types and the version we are using
    // that might be the cause for it not accepting the type we specified
    canvasRef: canvasRef as any,
    contextRef,
  }
}
