'use client'
import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'

export interface VisuallyHiddenProps extends BoxProps {}

export let VisuallyHidden = forwardRef<any, VisuallyHiddenProps>(
  function VisuallyHidden(props: VisuallyHiddenProps, ref) {
    return (
      <Box
        // @TODO!
        style={{
          border: 0,
          clip: 'rect(0 0 0 0)',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          width: '1px',
        }}
        {...props}
        ref={ref}
      />
    )
  },
)

export default VisuallyHidden
