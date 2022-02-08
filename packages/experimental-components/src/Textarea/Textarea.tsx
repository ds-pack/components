import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'
import { Label } from '../Label'

interface TextareaProps extends BoxProps {
  disabled: boolean
  value: string
  onChange: (value: string) => void
  children: ReactNode
  autoFocus: boolean
  placeholder: string
  inputProps: BoxProps
}

let WithoutProps = forwardRef(function WithoutProps(
  { focused, ...props }: TextareaProps,
  ref,
) {
  return <Box {...props} ref={ref} />
})

let StyledTextarea = styled(WithoutProps)(
  ({ focused, disabled }) => css`
    border: solid 2px;
    width: 100%;
    display: inline-flex;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 0.5em;
    border-radius: var(--radii-0);
    color: var(--colors-black);
    box-shadow: ${focused ? `var(--shadows-focusShadow)` : null};
    outline: none;
    font-size: var(--fontSizes-1);
    font-family: var(--fonts-base);

    border-color: ${(() => {
      if (disabled) {
        return `var(--colors-disabledFill)`
      } else if (focused) {
        return `var(--colors-primary)`
      }
      return `var(--colors-black)`
    })()};
    background-color: ${disabled
      ? `var(--colors-disabledBg)`
      : `var(--colors-gray-0)`};
  `,
)

export let Textarea = forwardRef(function Textarea(
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
      <StyledTextarea
        mt="$1"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...inputProps}
        is="textarea"
        ref={ref}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </Label>
  )
})
