import { EasingFunction } from 'lib/types'
import { c1, c2, c3, pow } from './shared'

export const backIn: EasingFunction = (t) => {
  return c3 * t * t * t - c1 * t * t
}

export const backOut: EasingFunction = (t) => {
  return 1 + c3 * pow(t - 1, 3) + c1 * pow(t - 1, 2)
}

export const backInOut: EasingFunction = (t) => {
  return t < 0.5
    ? (pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
    : (pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2
}
