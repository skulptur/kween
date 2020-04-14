export const mapRange = (inMin: number, inMax: number, outMin: number, outMax: number, value) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
