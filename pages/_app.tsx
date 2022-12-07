import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import StyledGlobal from "../styles/StyledGlobal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>e약은 뭐예요</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://www.whatmedicineisthis.info/favicon.ico"
        />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StyledGlobal />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
