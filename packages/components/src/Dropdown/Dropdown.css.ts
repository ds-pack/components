import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let disabled = style({})

export let focused = style({})

export let dropdown = style({
  border: 'solid 2px',
  width: '100%',
  display: 'inline-flex',
  flexGrow: 1,
  flexShrink: 0,
  padding: '0.5em 1em',
  borderRadius: vars.radii.small,
  color: vars.colors.black,
  outline: 'none',
  fontSize: vars.fontSizes[0],
  cursor: 'pointer',
  backgroundColor: vars.colors.gray000,
  borderColor: vars.colors.black,

  selectors: {
    [`${disabled}&`]: {
      cursor: 'not-allowed',
      backgroundColor: vars.colors.disabledBg,
      borderColor: vars.colors.disabledFill,
    },
    [`${focused}&`]: {
      borderColor: vars.colors.primary,
    },
  },
})
