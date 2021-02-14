import { useContext } from 'react'
import { themeContext } from './ThemeProvider'

export function useTheme() {
  return useContext(themeContext)
}
