export const drawPoint = (
  x: number,
  y: number,
  radius: number,
  fillColor: string,
  context: CanvasRenderingContext2D
) => {
  context.beginPath()
  context.arc(x, y, radius, 0, 2 * Math.PI, false)
  context.fillStyle = fillColor
  context.fill()
}
