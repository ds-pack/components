import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let caption = style({
  color: vars.colors.gray800,
  fontStyle: 'italic',
  paddingLeft: vars.space[2],
  paddingRight: vars.space[2],
  borderLeft: `solid 2px ${vars.colors.gray300}`,
})
