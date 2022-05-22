import { forwardRef } from 'react'
import { rainbowSprinkles, Sprinkles } from './system-props.css'

function createTestIds(testIds = null) {
  if (testIds) {
    return {
      'data-testid': typeof testIds === 'string' ? testIds : testIds.default,
    }
  }
  return {}
}

export interface BoxProps extends Sprinkles {
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
  let {
    className: localClassname,
    style: localStyle,
    otherProps,
  } = rainbowSprinkles(props)
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
