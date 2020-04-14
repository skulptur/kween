import { EasingFunction } from 'lib/types'
import { pow } from './shared'

export const cubicIn: EasingFunction = (t) => {
  return t * t * t
}

export const cubicOut: EasingFunction = (t) => {
  return 1 - pow(1 - t, 3)
}

export const cubicInOut: EasingFunction = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - pow(-2 * t + 2, 3) / 2
}
