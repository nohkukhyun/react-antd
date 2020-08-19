import Document, { DocumentContext, Html, Head, NextScript, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <title>Qualson</title>
          <meta name="description" content="describe your site here" />
          <meta name="keywords" content="write keywords here" />
          <meta property="og:title" content="write og title here" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="describe your site here." />
          {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    )
  }
}
