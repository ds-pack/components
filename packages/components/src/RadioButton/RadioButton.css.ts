import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let checked = style({})

export let disabled = style({})

export let focused = style({})

export let radioLabel = style({
  display: 'flex',
  color: vars.colors.gray900,
  flexDirection: 'row',
})

export let radioButton = style({
  marginRight: vars.space[2],
  height: '20px',
  width: '20px',
  position: 'relative',
  flexShrink: 0,
  borderRadius: '50%',
  border: 'solid 2px',
  borderColor: vars.colors.black,
  selectors: {
    '&::before': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      borderRadius: '50%',
      content: "' '",
      display: 'block',
      height: '10px',
      width: '10px',
      backgroundColor: 'transparent',
    },
    [`${disabled}&`]: {
      borderColor: vars.colors.disabledFill,
    },
    [`${checked}&`]: {
      borderColor: vars.colors.primary,
    },
    [`${disabled}&::before`]: {
      backgroundColor: vars.colors.disabledBg,
    },
    [`${checked}&::before`]: {
      backgroundColor: vars.colors.primary,
    },
    [`${focused}&`]: {
      boxShadow: vars.focusShadow,
    },
  },
})
