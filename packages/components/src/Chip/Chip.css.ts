import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let chip = style({
  display: 'inline-flex',
  paddingLeft: vars.space[2],
  paddingRight: vars.space[2],
  paddingTop: vars.space[1],
  paddingBottom: vars.space[1],
  borderRadius: vars.radii.medium,
})

export let primary = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
})

export let base = style({
  backgroundColor: vars.colors.gray300,
  color: vars.colors.black,
})
