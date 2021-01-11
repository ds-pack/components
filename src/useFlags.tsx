import { flagContext } from './flagContext'
import { useContext } from 'react'

export function useFlags() {
  return useContext(flagContext)
}
