import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="es">
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
