import styled, { css } from 'styled-components'
import { Box } from './Box'
import { useFlags } from './useFlags'

export let Banner = styled(Box)(({ theme, variant }) => {
  let flags = useFlags()

  if (flags.useCSSVars) {
    switch (variant) {
      case 'success': {
        return css`
          color: var(--colors-black, ${theme.colors.black});
          background-color: var(--colors-teal-2, ${theme.colors.teal[2]});
          border: solid 2px var(--colors-teal-6, ${theme.colors.teal[6]});
          border-radius: var(--radii-0, ${theme.radii[0]});
          padding: var(--space-3, ${theme.space[3]});
          display: flex;
          align-items: center;
        `
      }
      case 'error': {
        return css`
          color: var(--colors-black, ${theme.colors.black});
          background-color: var(--colors-red-2, ${theme.colors.red[2]});
          border: solid 2px var(--colors-red-6, ${theme.colors.red[6]});
          border-radius: var(--radii-0, ${theme.radii[0]});
          padding: var(--space-3, ${theme.space[3]});
          display: flex;
          align-items: center;
        `
      }
      case 'warning': {
        return css`
          color: var(--colors-black, ${theme.colors.black});
          background-color: var(--colors-yellow-2, ${theme.colors.yellow[2]});
          border: solid 2px var(--colors-yellow-6, ${theme.colors.yellow[6]});
          border-radius: var(--radii-0, ${theme.radii[0]});
          padding: var(--space-3, ${theme.space[3]});
          display: flex;
          align-items: center;
        `
      }
      default:
      case 'info': {
        return css`
          color: var(--colors-black, ${theme.colors.black});
          background-color: var(--colors-blue-2, ${theme.colors.blue[2]});
          border: solid 2px var(--colors-blue-6, ${theme.colors.blue[6]});
          border-radius: var(--radii-0, ${theme.radii[0]});
          padding: var(--space-3, ${theme.space[3]});
          display: flex;
          align-items: center;
        `
      }
    }
  }

  switch (variant) {
    case 'success': {
      return css`
        color: ${theme.colors.black};
        background-color: ${theme.colors.teal[2]};
        border: solid 2px ${theme.colors.teal[6]};
        border-radius: ${theme.radii[0]};
        padding: ${theme.space[3]};
        display: flex;
        align-items: center;
      `
    }
    case 'error': {
      return css`
        color: ${theme.colors.black};
        background-color: ${theme.colors.red[2]};
        border: solid 2px ${theme.colors.red[6]};
        border-radius: ${theme.radii[0]};
        padding: ${theme.space[3]};
        display: flex;
        align-items: center;
      `
    }
    case 'warning': {
      return css`
        color: ${theme.colors.black};
        background-color: ${theme.colors.yellow[2]};
        border: solid 2px ${theme.colors.yellow[6]};
        border-radius: ${theme.radii[0]};
        padding: ${theme.space[3]};
        display: flex;
        align-items: center;
      `
    }
    default:
    case 'info': {
      return css`
        color: ${theme.colors.black};
        background-color: ${theme.colors.blue[2]};
        border: solid 2px ${theme.colors.blue[6]};
        border-radius: ${theme.radii[0]};
        padding: ${theme.space[3]};
        display: flex;
        align-items: center;
      `
    }
  }
})
