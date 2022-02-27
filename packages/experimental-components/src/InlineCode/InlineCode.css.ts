import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let inlineCode = style({
  backgroundColor: vars.colors.gray100,
  fontFamily: vars.fonts.monospace,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '0.25em',
  paddingRight: '0.25em',
  paddingTop: '0.15em',
  paddingBottom: '0.15em',
  borderRadius: vars.radii.small,
  color: vars.colors.blue700,
})
