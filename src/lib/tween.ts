import { loop, LoopOwnProps, PlatformDependencies } from './loop'
import { noop } from './utils/noop'
import { linear } from './ease/linear'

interface TweenProps extends Partial<PlatformDependencies>, LoopOwnProps {
  ease?: (t: number) => number
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
    onUpdate: (t) => onUpdate(ease(t)),
    onComplete,
    getTimeNow,
    requestFrame,
    ...props,
  })
}
