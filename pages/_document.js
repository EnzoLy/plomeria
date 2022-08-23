import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        <script type='text/javascript' src='https://unpkg.com/default-passive-events' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
