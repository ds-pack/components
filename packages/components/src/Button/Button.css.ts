import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

let sharedBoxyStyles = {
  height: '50px',
  padding: '0.5em 1em',
}

export let button = style({
  display: 'inline-flex',
  borderRadius: vars.radii.small,
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition:
    'color 250ms ease-in-out, background-color 250ms ease-in-out, border-color 250ms ease-in-out, outline 250ms ease-in-out',
  selectors: {
    '&[disabled]': {
      cursor: 'not-allowed',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: vars.focusShadow,
    },
    '&[disabled]:focus,&[disabled]:hover': {
      boxShadow: 'none',
    },
  },
})

export let primary = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  ...sharedBoxyStyles,
  border: `solid 2px ${vars.colors.primary}`,
  selectors: {
    '&[disabled],&[disabled]:focus,&[disabled]:hover': {
      backgroundColor: vars.colors.disabledBg,
      color: vars.colors.disabledFill,
      border: `solid 2px ${vars.colors.disabledBg}`,
    },
    '&:focus,&:hover': {
      backgroundColor: vars.colors.primaryDark,
    },
  },
})

export let secondary = style({
  backgroundColor: vars.colors.secondary,
  color: vars.colors.white,
  ...sharedBoxyStyles,
  border: `solid 2px ${vars.colors.secondary}`,
  selectors: {
    '&[disabled],&[disabled]:focus,&[disabled]:hover': {
      backgroundColor: vars.colors.disabledBg,
      color: vars.colors.disabledFill,
      border: `solid 2px ${vars.colors.disabledBg}`,
    },
    '&:focus,&:hover': {
      backgroundColor: vars.colors.secondaryDark,
    },
  },
})

export let ghost = style({
  backgroundColor: vars.colors.white,
  color: vars.colors.primary,
  ...sharedBoxyStyles,
  border: `solid 2px ${vars.colors.primary}`,
  selectors: {
    '&[disabled],&[disabled]:focus,&[disabled]:hover': {
      backgroundColor: vars.colors.disabledBg,
      color: vars.colors.disabledFill,
      border: `solid 2px ${vars.colors.disabledBg}`,
    },
    '&:focus,&:hover': {
      backgroundColor: vars.colors.primaryLight,
      color: vars.colors.primaryDark,
    },
  },
})

export let text = style({
  color: vars.colors.primary,
  textDecoration: 'underline',
  selectors: {
    '&[disabled],&[disabled]:focus,&[disabled]:hover': {
      color: vars.colors.disabledFill,
      textDecoration: 'none',
    },
    '&:focus,&:hover': {
      color: vars.colors.primaryDark,
      textDecoration: 'none',
    },
  },
})
