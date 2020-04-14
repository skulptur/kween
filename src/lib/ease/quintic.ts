import { EasingFunction } from 'lib/types'
import { pow } from './shared'

export const quinticIn: EasingFunction = (t) => {
  return t * t * t * t * t
}

export const quinticOut: EasingFunction = (t) => {
  return 1 - pow(1 - t, 5)
}

export const quinticInOut: EasingFunction = (t) => {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - pow(-2 * t + 2, 5) / 2
}
