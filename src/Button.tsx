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
  ({ theme, disabled, variant }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(() => {
      if (variant === 'text') {
        return null
      }
      return theme.radii[0]
    })()};
    background-color: ${(() => {
      if (variant === 'default') {
        if (disabled) {
          return theme.colors.disabledBg
        }
        return theme.colors.primary
      } else if (variant === 'ghost') {
        if (disabled) {
          return theme.colors.disabledBg
        }
        return theme.colors.white
      }
      // variant === 'text'
      return 'transparent'
    })()};
    color: ${(() => {
      if (disabled) {
        return theme.colors.disabledFill
      }
      if (variant === 'default') {
        return theme.colors.white
      }
      // variant === 'ghost' or 'text'
      return theme.colors.primary
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
          return css`solid 2px ${theme.colors.disabledBg}`
        }
        return css`solid 2px ${theme.colors.primary}`
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
            return theme.colors.disabledBg
          }
          return theme.colors.primaryDark
        } else if (variant === 'ghost') {
          if (disabled) {
            return theme.colors.gray[2]
          }
          return theme.colors.primaryLight
        }
        return 'transparent'
      })()};
      border-color: ${(() => {
        if (variant === 'default' || variant === 'ghost') {
          if (disabled) {
            return theme.colors.disabledBg
          }
          return theme.colors.primary
        }
      })()};
      color: ${(() => {
        if (variant === 'text' || variant === 'ghost') {
          if (!disabled) {
            return theme.colors.primaryDark
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
      box-shadow: ${disabled ? null : theme.focusShadow};
      outline: none;
    }
  `,
)
