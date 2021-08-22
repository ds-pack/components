import { forwardRef } from 'react'
import { VisuallyHidden, VisuallyHiddenProps } from './VisuallyHidden'

export interface RadioInputProps extends VisuallyHiddenProps {
  onChange: (value: string) => void
  name: string
  value: string
}

export let RadioInput = forwardRef(function RadioInput(
  { onChange, value, ...props }: RadioInputProps,
  ref,
) {
  return (
    <VisuallyHidden
      is="input"
      type="radio"
      {...props}
      ref={ref}
      onChange={() => onChange(value)}
    />
  )
})
