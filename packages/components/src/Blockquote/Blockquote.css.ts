import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let blockquote = style({
  paddingLeft: vars.space[2],
  borderLeft: 'solid 2px',
  borderLeftColor: vars.colors.black,
  fontStyle: 'italic',
  color: vars.colors.gray800,
})
