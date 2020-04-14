export const drawRectangle = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  strokeColor: string,
  context: CanvasRenderingContext2D
) => {
  context.beginPath()
  context.rect(x1, y1, x2 - x1, y2 - y1)
  context.strokeStyle = strokeColor
  context.stroke()
}
