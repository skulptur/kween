import { loop, LoopOwnProps, PlatformDependencies } from './loop'
import { noop } from './utils/noop'
import { linear } from './ease/linear'
import { EasingFunction } from 'lib/types'

interface TweenProps extends Partial<PlatformDependencies>, Omit<LoopOwnProps, 'onUpdate'> {
  ease?: EasingFunction
  onUpdate: (val: number, progress: number) => void
}

export const tween = ({
  onComplete = noop,
  getTimeNow = () => performance.now(),
  requestFrame = (fn) => requestAnimationFrame(fn),
  ease = linear,
  onUpdate,
  ...props
}: TweenProps): (() => void) => {
  return loop({
    onUpdate: (progress) => onUpdate(ease(progress), progress),
    onComplete,
    getTimeNow,
    requestFrame,
    ...props,
  })
}
