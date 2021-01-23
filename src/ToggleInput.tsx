import React from 'react'
import { VisuallyHidden } from './VisuallyHidden'
import { Props as BoxProps } from './Box'

interface Props extends BoxProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export let ToggleInput = React.forwardRef(function ToggleInput(
  { onChange, checked, ...props }: Props,
  ref,
) {
  return (
    <VisuallyHidden
      is="input"
      type="checkbox"
      onChange={() => onChange(!checked)}
      {...props}
      ref={ref}
    />
  )
})
