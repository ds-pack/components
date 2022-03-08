import { globalStyle } from '@vanilla-extract/css'
import { vars } from './vars.css'

globalStyle('html, body', {
  boxSizing: 'border-box',
  fontSize: vars.fontSizes[1],
  fontFamily: vars.fonts.base,
  color: vars.colors.black,
  backgroundColor: vars.colors.white,
  minHeight: '100%',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'inherit',
})

globalStyle('*', {
  margin: 0,
  padding: 0,
})
