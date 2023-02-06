'use client'
import { forwardRef } from 'react'
import { VisuallyHidden } from '../VisuallyHidden'
import { BoxProps } from '../Box'

export interface ToggleInputProps extends BoxProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export let ToggleInput = forwardRef<any, ToggleInputProps>(function ToggleInput(
  { onChange, checked, ...props }: ToggleInputProps,
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
