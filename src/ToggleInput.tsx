import * as React from 'react'
import { VisuallyHidden } from './VisuallyHidden'

export let ToggleInput = React.forwardRef(function ToggleInput(props, ref) {
  return (
    <VisuallyHidden forwardedAs="input" role="checkbox" {...props} ref={ref} />
  )
})
