import { EasingFunction } from 'lib/types'
import { cos, PI, sin } from './shared'

export const sineIn: EasingFunction = (t) => {
  return 1 - cos((t * PI) / 2)
}

export const sineOut: EasingFunction = (t) => {
  return sin((t * PI) / 2)
}

export const sineInOut: EasingFunction = (t) => {
  return -(cos(PI * t) - 1) / 2
}
