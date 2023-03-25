import { forwardRef, useId } from 'react'
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
  let id = useId()
  return (
    <Box className="form-control" {...props}>
      <Box is="label" htmlFor={id} className="label">
        <Box is="span" className="label-text">
          {children}
        </Box>
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
          id={id}
          disabled={disabled}
          ref={ref}
        />
      </Box>
    </Box>
  )
})

export default RadioButton
