export const cubicIn = (t: number): number => {
  return t * t * t
}

export const cubicOut = (t: number): number => {
  const f = t - 1.0

  return f * f * f + 1.0
}

export const cubicInOut = (t: number): number => {
  if (t < 0.5) {
    return 4.0 * t * t * t
  } else {
    const f = 2.0 * t - 2.0

    return 0.5 * f * f * f + 1.0
  }
}
