import { power } from '../math/power'

export const exponentialIn = (t: number): number => {
  if (t === 0.0) {
    return 0.0
  } else {
    return power(2.0, 10.0 * (t - 1.0))
  }
}

export const exponentialOut = (t: number): number => {
  if (t === 1.0) {
    return 1.0
  } else {
    return 1.0 - power(2.0, 10.0 * t)
  }
}

export const exponentialInOut = (t: number): number => {
  if (t === 0.0) {
    return 0.0
  } else if (t === 1.0) {
    return 1.0
  } else if (t < 0.5) {
    return 0.5 * power(2.0, 20.0 * t - 10.0)
  } else {
    return 0.5 * power(2.0, 20.0 * t + 10.0) + 1.0
  }
}
