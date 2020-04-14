import { EasingFunction } from 'lib/types'
import { c4, c5, pow, sin } from './shared'

export const elasticIn: EasingFunction = (t) => {
  return t === 0 ? 0 : t === 1 ? 1 : -pow(2, 10 * t - 10) * sin((t * 10 - 10.75) * c4)
}

export const elasticOut: EasingFunction = (t) => {
  return t === 0 ? 0 : t === 1 ? 1 : pow(2, -10 * t) * sin((t * 10 - 0.75) * c4) + 1
}

export const elasticInOut: EasingFunction = (t) => {
  return t === 0
    ? 0
    : t === 1
    ? 1
    : t < 0.5
    ? -(pow(2, 20 * t - 10) * sin((20 * t - 11.125) * c5)) / 2
    : (pow(2, -20 * t + 10) * sin((20 * t - 11.125) * c5)) / 2 + 1
}
