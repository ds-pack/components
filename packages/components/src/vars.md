# Theming and Theme Contracts

## Exports:

- `vars`: The raw theme contract
- `themeClass`: The default theme classname

Helpers for building a custom theme:

- `fontSizes`: Map of fontSize names to values used in the default theme
- `colors`: Map of color names to values used in the default theme
- `defaultTheme`: The default theme used to create the `themeClass` export

## Creating your own theme:

```tsx
// some `.css.ts` file
import { createTheme } from '@vanilla-extract/css'
import { vars, defaultTheme } from '@ds-pack/components'

// `customTheme` is a classname
export let customTheme = createTheme(vars, {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    base: '"comic sans ms"',
  },
})
```

and then in your app:

```tsx
import { customTheme } from 'some-file'

;<div className={customTheme}>...</div>
```
