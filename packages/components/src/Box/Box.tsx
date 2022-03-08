import { forwardRef } from 'react'
import styles from './Box.css'
import { getBoxProps, properties, SystemProps } from './system-props'
import { extractAtomsFromProps } from 'rainbow-sprinkles'

function createTestIds(testIds = null) {
  if (testIds) {
    return {
      'data-testid': typeof testIds === 'string' ? testIds : testIds.default,
    }
  }
  return {}
}

export interface BoxProps extends SystemProps {
  is?: React.ComponentType<{ [key: string]: unknown }> | string
  testIds?: string | { default: string }
  className?: string
  style?: {}
  children?: any
  [key: string]: any
}

export let Box = forwardRef<any, BoxProps>(function Box(
  { is: Element = 'div', testIds, className, style, ...props }: BoxProps,
  ref,
) {
  let { systemProps, otherProps } = extractAtomsFromProps(props, properties)
  let { className: localClassname, style: localStyle } = getBoxProps(
    styles,
    systemProps,
  )
  return (
    <Element
      ref={ref}
      {...createTestIds(testIds)}
      {...otherProps}
      className={className ? localClassname + ' ' + className : localClassname}
      style={{ ...style, ...localStyle }}
    />
  )
})
