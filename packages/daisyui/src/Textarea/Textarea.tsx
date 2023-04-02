import { forwardRef, useId } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { cx } from '../classnames'

export interface TextareaProps extends BoxProps {
  disabled: boolean
  value: string
  onChange: (value: string) => void
  children: ReactNode
  autoFocus: boolean
  placeholder: string
  inputProps: BoxProps
}

export let Textarea = forwardRef<any, TextareaProps>(function Textarea(
  {
    disabled,
    value,
    onChange,
    children,
    autoFocus,
    placeholder,
    inputProps,
    ...props
  }: TextareaProps,
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
        className={cx({
          textarea: true,
          'textarea-bordered': true,
          'w-full': true,
        })}
        is="textarea"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...inputProps}
        id={id}
        ref={ref}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </Box>
  )
})

export default Textarea
