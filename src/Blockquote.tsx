import * as React from 'react'
import { Box } from './Box'
import { types } from '@ds-pack/property-controls'

export let Blockquote = React.forwardRef(function Blockquote(props, ref) {
  return (
    <Box
      ref={ref}
      pl={2}
      borderLeftStyle="solid"
      borderLeftWidth="2px"
      borderLeftColor="black"
      fontStyle="italic"
      color="gray.8"
      {...props}
    />
  )
})

let propertyControls = {
  children: {
    type: types.node,
    label: `The content within the Blockquote`,
    default: 'Blockquote content here - Mark Twain',
  },
}
