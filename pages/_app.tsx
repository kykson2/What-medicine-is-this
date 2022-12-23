import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import StyledGlobal from "../styles/StyledGlobal";
import { DefaultSeo } from "next-seo";
import icon from "../icon/medicine_icon.svg";

function MyApp({ Component, pageProps }: AppProps) {
  const DEFAULT_SEO = {
    title: "e약은 뭐예요?",
    description: "약을 안전하게 복용할 수 있도록 도와드려요",
    canonical: "https://www.whatmedicineisthis.info/",
    openGraph: {
      locale: "ko_KR",
      type: "website",
      url: "https://www.whatmedicineisthis.info/",
      title: "e약은 뭐예요?",
      description: "약을 안전하게 복용할 수 있도록 도와드려요",
      images: [{ url: icon, width: 800, height: 600, alt: "e약은 뭐예요" }],
      site_name: "whatmedicineisthis",
    },
  };
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="http://www.whatmedicineisthis.info/favicon.ico"
        />
      </Head>
      <DefaultSeo {...DEFAULT_SEO} />
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
