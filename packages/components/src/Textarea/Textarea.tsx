import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { Label } from '../Label'
import { textarea } from './Textarea.css'

interface TextareaProps extends BoxProps {
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
  return (
    <Label {...props}>
      {children}
      <Box
        className={textarea}
        is="textarea"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...inputProps}
        ref={ref}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </Label>
  )
})
