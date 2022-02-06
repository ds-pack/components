import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let banner = style({
  borderRadius: vars.radii.small,
  display: 'flex',
  alignItems: 'center',
  padding: vars.space[3],
})

export let success = style({
  color: vars.colors.black,
  backgroundColor: vars.colors.teal200,
  border: 'solid 2px',
  borderColor: vars.colors.teal600,
})

export let error = style({
  color: vars.colors.black,
  backgroundColor: vars.colors.red200,
  border: 'solid 2px',
  borderColor: vars.colors.red600,
})

export let warning = style({
  color: vars.colors.black,
  backgroundColor: vars.colors.yellow200,
  border: 'solid 2px',
  borderColor: vars.colors.yellow600,
})

export let info = style({
  color: vars.colors.black,
  backgroundColor: vars.colors.blue200,
  border: 'solid 2px',
  borderColor: vars.colors.blue600,
})
