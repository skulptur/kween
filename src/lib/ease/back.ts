import { sine } from '../math'
import { PI } from '../constants'

export const backIn = (t: number): number => {
  return t * t * t - t * sine(t * PI)
}

export const backOut = (t: number): number => {
  const f = 1.0 - t

  return 1.0 - f * f * f + f * sine(f * PI)
}

export const backInOut = (t: number): number => {
  if (t < 0.5) {
    const f = 2.0 * t

    return 0.5 * (f * f * f - f * sine(f * PI))
  } else {
    const f = 2.0 - 2.0 * t

    return 0.5 * (1.0 - (f * f * f - f * sine(f * PI))) + 0.5
  }
}
