import * as React from 'react'
import defaultTheme from './theme'

export let themeContext = React.createContext(defaultTheme)

export function ThemeProvider({
  theme = defaultTheme,
  children,
}: {
  theme: typeof defaultTheme
  children: any
}) {
  return <themeContext.Provider value={theme}>{children}</themeContext.Provider>
}
