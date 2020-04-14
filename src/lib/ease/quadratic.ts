import { EasingFunction } from 'lib/types'
import { pow } from './shared'

export const quadraticIn: EasingFunction = (t) => {
  return t * t
}

export const quadraticOut: EasingFunction = (t) => {
  return 1 - (1 - t) * (1 - t)
}

export const quadraticInOut: EasingFunction = (t) => {
  return t < 0.5 ? 2 * t * t : 1 - pow(-2 * t + 2, 2) / 2
}
