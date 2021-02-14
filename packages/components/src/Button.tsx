import React, { forwardRef, MouseEvent } from 'react'
import styled, { css } from 'styled-components'
import { Box } from './Box'
import { Tapable } from './Tapable'

interface ButtonProps {
  disabled?: boolean
  variant?: 'default' | 'ghost' | 'text'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}
let ButtonImpl = forwardRef(function ButtonImpl(props: ButtonProps, ref) {
  return <Box is={Tapable} {...props} ref={ref} />
})

export let Button = styled(ButtonImpl)(
  ({ theme, disabled = false, variant = 'default' }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(() => {
      if (variant === 'text') {
        return null
      }
      return `var(--radii-0)`
    })()};
    background-color: ${(() => {
      if (variant === 'default') {
        if (disabled) {
          return `var(--colors-disabledBg)`
        }
        return `var(--colors-primary)`
      } else if (variant === 'ghost') {
        if (disabled) {
          return `var(--colors-disabledBg)`
        }
        return `var(--colors-white)`
      }
      // variant === 'text'
      return 'transparent'
    })()};
    color: ${(() => {
      if (disabled) {
        return `var(--colors-disabledFill)`
      }
      if (variant === 'default') {
        return `var(--colors-white)`
      }
      // variant === 'ghost' or 'text'
      return `var(--colors-primary)`
    })()};
    padding: ${(() => {
      if (variant !== 'text') {
        return `0.5em 1em`
      }
      return null
    })()};
    text-decoration: ${(() => {
      if (variant === 'text') {
        return 'underline'
      }
      return null
    })()};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    // match border for Input elements
    border: ${(() => {
      if (variant === 'default' || variant === 'ghost') {
        if (disabled) {
          return css`solid 2px var(--colors-disabledBg)`
        }
        return css`solid 2px var(--colors-primary)`
      }
      // variant === 'text'
      return null
    })()};
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
      border-color 250ms ease-in-out, outline 250ms ease-in-out;
    &:hover,
    &:focus {
      background-color: ${(() => {
        if (variant === 'default') {
          if (disabled) {
            return `var(--colors-disabledBg)`
          }
          return `var(--colors-primaryDark)`
        } else if (variant === 'ghost') {
          if (disabled) {
            return `var(--colors-gray-2)`
          }
          return `var(--colors-primaryLight)`
        }
        return 'transparent'
      })()};
      border-color: ${(() => {
        if (variant === 'default' || variant === 'ghost') {
          if (disabled) {
            return `var(--colors-disabledBg)`
          }
          return `var(--colors-primary)`
        }
      })()};
      color: ${(() => {
        if (variant === 'text' || variant === 'ghost') {
          if (!disabled) {
            return `var(--colors-primaryDark)`
          }
        }
        return null
      })()};
      text-decoration: ${(() => {
        if (variant === 'text' && !disabled) {
          return 'none'
        }
        return null
      })()};
    }
    &:focus {
      box-shadow: ${disabled ? null : `var(--shadows-focusShadow)`};
      outline: none;
    }
  `,
)
