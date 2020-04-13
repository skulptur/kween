import { FRAC_PI_2 } from '../constants/FRAC_PI_2'

import { sine } from '../math'
import { power } from '../math/power'

export const elasticIn = (t: number): number => {
  return sine(13.0 * FRAC_PI_2 * t) * power(2.0, 10.0 * (t - 1.0))
}

export const elasticOut = (t: number): number => {
  return sine(13.0 * FRAC_PI_2 * (t + 1.0)) * power(2.0, 10.0 * t) + 1.0
}

export const elasticInOut = (t: number): number => {
  if (t < 0.5) {
    return 0.5 * sine(13.0 * FRAC_PI_2 * 2.0 * t) * power(2.0, 10.0 * (2.0 * t - 1.0))
  } else {
    return 0.5 * sine(13.0 * FRAC_PI_2 * 2.0 * t * power(2.0, 10.0 * (2.0 * t - 1.0)) + 2.0)
  }
}
