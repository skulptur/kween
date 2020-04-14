export const setContextScale = (
  scaleX: number,
  scaleY: number,
  context: CanvasRenderingContext2D
) => {
  const { b, c, e, f } = context.getTransform()
  context.setTransform(scaleX, b, c, scaleY, e, f)
}
