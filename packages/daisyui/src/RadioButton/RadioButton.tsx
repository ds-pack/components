'use client'
import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface RadioButtonProps extends BoxProps {
  checked: boolean
  name: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  children: ReactNode
  autoFocus?: boolean
}

export let RadioButton = forwardRef<any, RadioButtonProps>(function RadioButton(
  {
    checked,
    onChange,
    value,
    name,
    disabled,
    children,
    autoFocus,
    ...props
  }: RadioButtonProps,
  ref,
) {
  return (
    <Box is="label" className="label" {...props}>
      <Box
        className={cx({
          radio: true,
        })}
        is="input"
        type="radio"
        onChange={onChange}
        autoFocus={autoFocus}
        value={value}
        name={name}
        disabled={disabled}
        ref={ref}
      />
      <Box is="span" className="label-text">
        {children}
      </Box>
    </Box>
  )
})

export default RadioButton
