import { themeClass } from '@ds-pack/components'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className={themeClass}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
