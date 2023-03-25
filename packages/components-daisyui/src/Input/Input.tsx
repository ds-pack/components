import { forwardRef, useId } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

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
  let id = useId()
  return (
    <Box {...props}>
      <Box is="label" htmlFor={id} className="label">
        <Box is="span" className="label-text">
          {children}
        </Box>
      </Box>
      <Box
        placeholder={placeholder}
        type="text"
        disabled={disabled}
        value={value}
        {...inputProps}
        id={id}
        className={cx({
          input: true,
          'input-bordered': true,
          'w-full': true,
          [props.className]: !!props.className,
        })}
        is="input"
        ref={ref}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </Box>
  )
})

export default Input
