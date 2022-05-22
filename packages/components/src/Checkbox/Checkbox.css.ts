import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let checkboxLabel = style({
  flexDirection: 'row',
})

export let checkbox = style({
  marginRight: vars.space[2],
  height: '20px',
  width: '20px',
  position: 'relative',
  flexShrink: 0,
  border: 'solid 2px',
  borderColor: vars.colors.black,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.small,

  selectors: {
    '&::before': {
      position: 'absolute',
      content: "' '",
      top: '50%',
      left: '50%',
      zIndex: vars.zIndices.low,
      display: 'block',
      height: '5px',
      width: '10px',
      borderLeft: 'solid 2px',
      borderLeftColor: vars.colors.white,
      borderBottom: 'solid 2px',
      borderBottomColor: vars.colors.white,
      transform: 'translate(-50%, -75%) rotate(-45deg)',
    },
  },
})

export let checked = style({
  borderColor: vars.colors.primaryDark,
  backgroundColor: vars.colors.primary,
})

export let indeterminate = style({
  borderColor: vars.colors.primaryDark,
  backgroundColor: vars.colors.primary,
  selectors: {
    '&::before': {
      height: 0,
      transform: 'translate(-50%, -75%)',
    },
  },
})

export let disabled = style({
  borderColor: vars.colors.disabledFill,
  backgroundColor: vars.colors.disabledBg,
  selectors: {
    '&::before': {
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    [`${indeterminate}&::before, ${checked}&::before`]: {
      borderLeftColor: vars.colors.disabledFill,
      borderBottomColor: vars.colors.disabledFill,
    },
  },
})

export let focused = style({
  boxShadow: vars.focusShadow,
})
