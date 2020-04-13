export const bounceOut = (t: number): number => {
  if (t < 4.0 / 11.0) {
    return (121.0 / 16.0) * t * t
  } else if (t < 8.0 / 11.0) {
    return (363.0 / 40.0) * t * t - (99.0 / 10.0) * t + 17.0 / 5.0
  } else if (t < 9.0 / 10.0) {
    return (4356.0 / 361.0) * t * t - (35442.0 / 1805.0) * t + 16061.0 / 1805.0
  } else {
    return (54.0 / 5.0) * t * t - (513.0 / 25.0) * t + 268.0 / 25.0
  }
}

export const bounceIn = (t: number): number => {
  return 1.0 - bounceOut(1.0 - t)
}

export const bounceInOut = (t: number): number => {
  if (t < 0.5) {
    return 0.5 * bounceIn(t * 2.0)
  } else {
    return 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5
  }
}
