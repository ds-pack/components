import { createTheme } from '@vanilla-extract/css'
import { vars, defaultTheme } from '@ds-pack/components'

export let customTheme = createTheme(vars, {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    base: '"comic sans ms"',
  },
})
