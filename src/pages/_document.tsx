import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="author" content="Wendell Kenneddy" />
          <meta name="creator" content="Wendell Kenneddy" />
          <meta
            property="og:image"
            content="https://spacetourismwk.vercel.app/logo192.png"
          />
          <meta
            property="twitter:image"
            content="https://spacetourismwk.vercel.app/logo192.png"
          />
          <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#0b0d17" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
