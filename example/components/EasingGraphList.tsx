import * as React from 'react'
import { EasingGraph } from './EasingGraph'

type EasingFunctionItem = React.ComponentProps<typeof EasingGraph>

interface EasingGraphListProps {
  easeList: ReadonlyArray<EasingFunctionItem>
}

export const EasingGraphList: React.FC<EasingGraphListProps> = ({ easeList }) => {
  return (
    <div>
      {easeList.map((easingGraphProps, id) => {
        return <EasingGraph key={id} {...easingGraphProps} />
      })}
    </div>
  )
}
