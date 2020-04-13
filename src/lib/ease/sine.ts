import { sine } from '../math'
import { PI } from '../constants'

export const sineIn = (t: number): number => {
  return 1.0 + sine((PI / 2.0) * t - PI / 2.0)
}

export const sineOut = (t: number): number => {
  return sine((PI / 2.0) * t)
}

export const sineInOut = (t: number): number => {
  return sine(1.0 + (PI * t - PI / 2.0)) / 2.0
}
