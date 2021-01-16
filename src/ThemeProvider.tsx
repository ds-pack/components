import React, { useMemo } from 'react'
import defaultTheme from './theme'
import {
  ThemeProvider as StyledProvider,
  DefaultTheme,
} from 'styled-components'
import themeToCSSVars from '@ds-pack/theme-to-css-vars'
import { Box, Props as BoxProps } from './Box'

export let themeContext = React.createContext(defaultTheme)

interface Props extends BoxProps {
  theme?: DefaultTheme
  children: React.ReactNode
}

export function ThemeProvider({ theme = defaultTheme, ...props }: Props) {
  let vars = useMemo(() => {
    let cssVars = themeToCSSVars(theme)
    return cssVars.reduce(
      (style, [varName, val]) => ({ ...style, [varName]: val }),
      {},
    )
  }, [theme])

  return (
    <themeContext.Provider value={theme}>
      <StyledProvider theme={theme}>
        <Box {...props} style={vars} />
      </StyledProvider>
    </themeContext.Provider>
  )
}
