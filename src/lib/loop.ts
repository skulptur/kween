import { noop } from './utils/noop'

interface LoopProps {
  duration: number
  onUpdate: (value: number) => void
  onComplete?: () => void
  getTimeNow?: () => number
  requestFrame?: (callback: () => void) => void
}

export const loop = ({
  duration,
  onUpdate,
  onComplete = noop,
  getTimeNow = performance.now,
  requestFrame = requestAnimationFrame,
}: LoopProps) => {
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
