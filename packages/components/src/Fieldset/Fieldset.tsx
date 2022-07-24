import { forwardRef } from 'react'
import { Box, BoxProps } from '../Box'
import { fieldset } from './Fieldset.css'
import cx from '../classnames'

export interface FieldsetProps extends BoxProps {}

export let Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  function Fieldset(props: FieldsetProps, ref) {
    return (
      <Box
        ref={ref}
        is="fieldset"
        className={cx({
          [fieldset]: true,
          [props.className]: !!props.className,
        })}
        {...props}
      />
    )
  },
)
