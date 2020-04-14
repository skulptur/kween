const mapRange = (inMin: number, inMax: number, outMin: number, outMax: number, value: number) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

export const mapTweenRange = (outMin: number, outMax: number, value: number) => {
  return mapRange(0, 1, outMin, outMax, value)
}
