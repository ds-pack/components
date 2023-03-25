import { forwardRef } from 'react'
// import { rainbowSprinkles, Sprinkles } from './system-props.css'
import { cx } from '../classnames'

function createTestIds(testId = null) {
  if (testId) {
    return {
      'data-testid': testId,
    }
  }
  return {}
}

export interface BoxProps /* extends Sprinkles */ {
  is?: React.ComponentType<{ [key: string]: unknown }> | string
  testId?: string
  className?: string
  style?: {}
  children?: any
  [key: string]: any
}

export let Box = forwardRef<any, BoxProps>(function Box(
  { is: Element = 'div', testId, className, style, ...props }: BoxProps,
  ref,
) {
  // let {
  //   className: localClassname,
  //   style: localStyle,
  //   otherProps,
  // } = rainbowSprinkles(props)
  return (
    <Element
      ref={ref}
      {...createTestIds(testId)}
      {...props}
      // {...otherProps}
      className={cx({
        // [localClassname]: !!localClassname,
        [className]: !!className,
      })}
      style={style}
      // style={{ ...style, ...localStyle }}
    />
  )
})

export default Box
