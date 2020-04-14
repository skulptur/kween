import { EasingFunction } from 'lib/types'
import { pow } from './shared'

export const quarticIn: EasingFunction = (t) => {
  return t * t * t * t
}

export const quarticOut: EasingFunction = (t) => {
  return 1 - pow(1 - t, 4)
}

export const quarticInOut: EasingFunction = (t) => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - pow(-2 * t + 2, 4) / 2
}
