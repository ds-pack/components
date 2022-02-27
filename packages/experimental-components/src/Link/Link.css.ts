import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let link = style({
  color: vars.colors.primary,
  textDecoration: 'underline',
  display: 'inline-flex',
  cursor: 'pointer',
  selectors: {
    '&:hover, &:focus': {
      color: vars.colors.primaryDark,
      textDecoration: 'none',
    },
    '&:focus': {
      boxShadow: vars.focusShadow,
      outline: 'none',
    },
  },
})
