import '../../styles/globals.css'

export default function Layout({ children }) {
  return (
    <html data-theme="emerald" lang="en-US">
      <head>
        <title>Sandbox</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
