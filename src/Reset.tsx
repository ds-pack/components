import { createGlobalStyle, css } from 'styled-components'

export let Reset = createGlobalStyle(
  ({ theme }) => css`
    html {
      box-sizing: border-box;
      font-size: ${theme.fontSizes[1]}px;
      font-family: ${theme.fonts.base};
      color: ${theme.colors.black};
      background-color: ${theme.colors.white};
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
    * {
      margin: 0;
      padding: 0;
    }
  `,
)
