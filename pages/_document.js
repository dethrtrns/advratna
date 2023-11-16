import { createGetInitialProps } from "@mantine/next";
import Document, { Html, Head, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='manifest'
            href='/manifest.json'
          />
          <link
            rel='apple-touch-icon'
            href='/icon.png'
          />
          <meta
            name='theme-color'
            content='#000000'
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
