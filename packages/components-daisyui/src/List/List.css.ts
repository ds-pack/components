import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let base = style({
  listStyleType: 'none',
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingTop: 0,
})

export let ordered = style({
  listStyleType: 'decimal',
  marginLeft: vars.space[4],
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingTop: 0,
})

export let unordered = style({
  listStyleType: 'disc',
  marginLeft: vars.space[4],
  marginRight: 0,
  marginTop: 0,
  marginBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingTop: 0,
})
