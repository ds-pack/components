import { createGlobalStyle, css } from 'styled-components'

import themeToCSSVariables from '@ds-pack/theme-to-css-vars'

export let Reset = createGlobalStyle(
  ({ theme }) => css`
    :root {
      ${themeToCSSVariables(theme)
        .map((token) => `${token[0]}: ${token[1]}`)
        .join(';\n')}
    }
    html {
      box-sizing: border-box;
      font-size: ${theme.fontSizes[1]};
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
