import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let fieldset = style({
  border: 'solid 2px',
  borderColor: vars.colors.gray900,
  paddingTop: vars.space[2],
  paddingBottom: vars.space[2],
  paddingLeft: vars.space[4],
  paddingRight: vars.space[4],
  borderRadius: vars.radii.small,
})
