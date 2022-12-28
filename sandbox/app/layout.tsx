// import { themeClass } from '@ds-pack/components'
import '@ds-pack/components/dist/reset.css'
import { customTheme } from '../styles/theme'

export default function Layout({ children }) {
  return (
    <html className={customTheme} lang="en-US">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Sandbox</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
