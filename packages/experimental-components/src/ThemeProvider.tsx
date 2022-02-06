import { createContext } from 'react'
import type { ReactNode } from 'react'
import defaultTheme from './theme'
import {
  ThemeProvider as StyledProvider,
  DefaultTheme,
} from 'styled-components'

export let themeContext = createContext<DefaultTheme>(defaultTheme)

export interface ThemeProviderProps {
  theme?: DefaultTheme
  children: ReactNode
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
