import { squareRoot } from '../math'

export const circularIn = (t: number): number => {
  return 1.0 - squareRoot(1.0 - t * t)
}

export const circularOut = (t: number): number => {
  return squareRoot((2.0 - t) * t)
}

export const circularInOut = (t: number): number => {
  if (t < 0.5) {
    return 0.5 * (1.0 - squareRoot(1.0 - 4.0 * t * t))
  } else {
    return 0.5 * (squareRoot(-(2.0 * t - 3.0) * (2.0 * t - 1.0)) + 1.0)
  }
}
