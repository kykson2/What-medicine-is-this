import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import StyledGlobal from "../styles/StyledGlobal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StyledGlobal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
