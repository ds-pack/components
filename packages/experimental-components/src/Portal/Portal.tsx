import { useEffect, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// let useIsomorphicEffect =
//   typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function usePortal({ children, isOpen }) {
  let [element, setElement] = useState(null)

  // useIsomorphicEffect(() => {
  //   let element = document.body.appendChild(document.createElement('div'))
  //   setElement(element)
  //   return () => {
  //     setElement(null)
  //     document.body.removeChild(element)
  //   }
  // }, [isOpen])

  if (isOpen && element) {
    return createPortal(children, element)
  }
  return null
}

export function Portal({ children, isOpen = false }) {
  return usePortal({ children, isOpen })
}
