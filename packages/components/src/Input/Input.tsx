import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { Label } from '../Label'
import { input } from './Input.css'
import cx from '../classnames'

export interface InputProps extends BoxProps {
  disabled: boolean
  value: string
  onChange: (value: string) => void
  children: ReactNode
  autoFocus: boolean
  placeholder: string
  inputProps: BoxProps
}

export let Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    disabled,
    value,
    onChange,
    children,
    placeholder,
    inputProps,
    ...props
  }: InputProps,
  ref,
) {
  return (
    <Label {...props}>
      {children}
      <Box
        placeholder={placeholder}
        type="text"
        disabled={disabled}
        value={value}
        {...inputProps}
        className={cx({
          [input]: true,
          [props.className]: !!props.className,
        })}
        is="input"
        ref={ref}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </Label>
  )
})
