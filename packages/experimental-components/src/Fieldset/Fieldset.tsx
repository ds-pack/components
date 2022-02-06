import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'

export interface FieldsetProps extends BoxProps {}

export let Fieldset = forwardRef(function Fieldset(props: FieldsetProps, ref) {
  return (
    <Box
      ref={ref}
      is="fieldset"
      border="solid 2px"
      borderColor="$gray-9"
      py="$2"
      px="$4"
      borderRadius="$0"
      {...props}
    />
  )
})
