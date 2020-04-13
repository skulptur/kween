import { noop } from './utils/noop'

export interface PlatformDependencies {
  getTimeNow: () => number
  requestFrame: (callback: () => void) => void
}

export interface LoopOwnProps {
  onUpdate: (value: number) => void
  onComplete?: () => void
  duration: number
}

interface LoopProps extends PlatformDependencies, LoopOwnProps {}

export const loop = ({
  duration,
  onUpdate,
  onComplete = noop,
  getTimeNow,
  requestFrame,
}: LoopProps): (() => void) => {
  let isActive = true
  let elapsedTime = 0
  const startTime = getTimeNow()

  const handleComplete = () => {
    onUpdate(1)
    onComplete()
  }

  const next = () => {
    if (!isActive) return onComplete()

    onUpdate(elapsedTime / duration)

    elapsedTime = getTimeNow() - startTime

    return elapsedTime < duration ? requestFrame(next) : handleComplete()
  }

  requestFrame(next)

  const cancel = () => {
    isActive = false
  }

  return cancel
}
