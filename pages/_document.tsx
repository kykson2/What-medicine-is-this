import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap"
        rel="stylesheet"
      />
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    </Head>
    <title>e약은 뭐예요</title>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
