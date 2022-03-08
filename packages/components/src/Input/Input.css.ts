import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let input = style({
  marginTop: vars.space[1],
  border: 'solid 2px',
  width: '100%',
  display: 'inline-flex',
  flexGrow: 1,
  flexShrink: 0,
  padding: '0.5em 1em',
  borderRadius: vars.radii.small,
  color: vars.colors.black,
  outline: 'none',
  fontSize: vars.fontSizes[1],

  borderColor: vars.colors.black,
  backgroundColor: vars.colors.gray000,
  selectors: {
    '&:focus': {
      boxShadow: vars.focusShadow,
    },
    '&:focus, &:hover': {
      borderColor: vars.colors.primary,
    },
    '&[disabled]': {
      borderColor: vars.colors.disabledFill,
      backgroundColor: vars.colors.disabledBg,
    },
  },
})
