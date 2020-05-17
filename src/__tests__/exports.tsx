declare const test: any
declare const expect: any

import * as components from '../index'

test('Box is defined', () => {
  expect(components.Box).toBeDefined()
})

test('useTheme is defined', () => {
  expect(components.useTheme).toBeDefined()
})

test('theme is defined', () => {
  expect(components.theme).toBeDefined()
})

test('ThemeProvider is defined', () => {
  expect(components.ThemeProvider).toBeDefined()
})

test('Banner is defined', () => {
  expect(components.Banner).toBeDefined()
})

test('Stack is defined', () => {
  expect(components.Stack).toBeDefined()
})

test('Text is defined', () => {
  expect(components.Text).toBeDefined()
})

test('Label is defined', () => {
  expect(components.Label).toBeDefined()
})

test('List is defined', () => {
  expect(components.List).toBeDefined()
})

test('ListItem is defined', () => {
  expect(components.ListItem).toBeDefined()
})
