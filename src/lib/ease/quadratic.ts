export const quadraticIn = (t: number): number => {
  return t * t
}

export const quadraticOut = (t: number): number => {
  return -t * (t - 2.0)
}

export const quadraticInOut = (t: number): number => {
  if (t < 0.5) {
    return 2.0 * t * t
  } else {
    return -2.0 * t * t + 4.0 * t - 1.0
  }
}
