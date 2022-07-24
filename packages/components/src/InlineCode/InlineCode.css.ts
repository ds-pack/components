import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let inlineCode = style({
  lineHeight: 1,
  backgroundColor: vars.colors.gray100,
  fontFamily: vars.fonts.monospace,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '0.25em',
  paddingRight: '0.25em',
  paddingTop: '2px',
  paddingBottom: '2px',
  borderRadius: vars.radii.small,
  color: vars.colors.blue700,
})
