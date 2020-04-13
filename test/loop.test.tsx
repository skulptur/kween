import { loop } from '../src/lib/loop'

const increment = (stepSize: number) => {
  let initialTime = -stepSize

  return () => {
    initialTime += stepSize
    return initialTime
  }
}

const emptyArray = (size: number) => {
  return [...Array(size)]
}

const getIncrementsArray = (size: number, stepSize: number) => {
  return emptyArray(size).map(increment(stepSize))
}

const requestFrame = (fn: () => void) => fn()

describe('it', () => {
  it('getIncrementsArray works', () => {
    expect(getIncrementsArray(5, 0.25)).toEqual([0, 0.25, 0.5, 0.75, 1])
  })

  it('loops the correct number of times with the right increments', () => {
    const duration = 8
    const stepSize = 0.5
    const numberOfUpdates = duration / stepSize + 1 // onUpdate is called once right away with 0
    const getTimeNow = increment(stepSize)
    const onUpdateMock = jest.fn()

    loop({ duration, getTimeNow, requestFrame, onUpdate: onUpdateMock })

    expect(onUpdateMock).toHaveBeenCalledTimes(numberOfUpdates)

    expect(onUpdateMock.mock.calls.flat(1)).toEqual(
      getIncrementsArray(numberOfUpdates, stepSize / duration)
    )
  })
})
