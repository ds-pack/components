import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let label = style({
  display: 'flex',
  flexDirection: 'column',
  color: vars.colors.gray700,
})
