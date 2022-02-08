import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Sandbox App</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
