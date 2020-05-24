import * as React from 'react'
import { VisuallyHidden } from './VisuallyHidden'

interface Props {
  checked: boolean
  onChange: (checked: boolean) => void
  [key: string]: any
}

export let ToggleInput = React.forwardRef(function ToggleInput(
  { onChange, checked, ...props }: Props,
  ref,
) {
  return (
    <VisuallyHidden
      forwardedAs="input"
      type="checkbox"
      onChange={() => onChange(!checked)}
      {...props}
      ref={ref}
    />
  )
})
