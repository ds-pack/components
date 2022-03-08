import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let h1 = style({
  fontSize: vars.fontSizes.h1,
  fontWeight: vars.fontWeights.bold,
})

export let lead = style({
  fontSize: vars.fontSizes.h1,
  fontWeight: vars.fontWeights.bold,
  fontFamily: vars.fonts.serif,
})

export let h2 = style({
  fontSize: vars.fontSizes.h2,
  fontWeight: vars.fontWeights.bold,
})

export let h3 = style({
  fontSize: vars.fontSizes.h3,
  fontWeight: vars.fontWeights.bold,
})

export let subhead = style({
  fontSize: vars.fontSizes.h4,
  fontWeight: vars.fontWeights.bold,
})
