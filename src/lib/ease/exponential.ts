import { EasingFunction } from 'lib/types'
import { pow } from './shared'

export const exponentialIn: EasingFunction = (t) => {
  return t === 0 ? 0 : pow(2, 10 * t - 10)
}

export const exponentialOut: EasingFunction = (t) => {
  return t === 1 ? 1 : 1 - pow(2, -10 * t)
}

export const exponentialInOut: EasingFunction = (t) => {
  return t === 0
    ? 0
    : t === 1
    ? 1
    : t < 0.5
    ? pow(2, 20 * t - 10) / 2
    : (2 - pow(2, -20 * t + 10)) / 2
}
