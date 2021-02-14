import React from 'react'
import defaultTheme from './theme'
import {
  ThemeProvider as StyledProvider,
  DefaultTheme,
} from 'styled-components'

export let themeContext = React.createContext<DefaultTheme>(defaultTheme)

export interface ThemeProviderProps {
  theme?: DefaultTheme
  children: React.ReactNode
}

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: ThemeProviderProps) {
  return (
    <themeContext.Provider value={theme}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </themeContext.Provider>
  )
}
