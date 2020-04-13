export const quinticIn = (t: number): number => {
  return t * t * t * t * t
}

export const quinticOut = (t: number): number => {
  const f = t - 1.0

  return f * f * f * f * f + 1.0
}

export const quinticInOut = (t: number): number => {
  if (t < 0.5) {
    return 16.0 * t * t * t * t * t
  } else {
    const f = 2.0 * t - 2.0

    return 0.5 * f * f * f * f * f + 1.0
  }
}
