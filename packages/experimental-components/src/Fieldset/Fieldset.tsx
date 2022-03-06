import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { fieldset } from './Fieldset.css'

export interface FieldsetProps extends BoxProps {}

export let Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  function Fieldset(props: FieldsetProps, ref) {
    return <Box ref={ref} is="fieldset" className={fieldset} {...props} />
  },
)
