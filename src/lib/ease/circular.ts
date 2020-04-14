import { EasingFunction } from 'lib/types'
import { pow, sqrt } from './shared'

export const circularIn: EasingFunction = (t) => {
  return 1 - sqrt(1 - pow(t, 2))
}

export const circularOut: EasingFunction = (t) => {
  return sqrt(1 - pow(t - 1, 2))
}

export const circularInOut: EasingFunction = (t) => {
  return t < 0.5 ? (1 - sqrt(1 - pow(2 * t, 2))) / 2 : (sqrt(1 - pow(-2 * t + 2, 2)) + 1) / 2
}
