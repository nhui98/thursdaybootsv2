import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { AppProvider } from "../context/appContext";
import "../styles/index.scss";

type CustomAppProps = AppProps & {
  Component: NextComponentType & { home?: boolean; checkout?: boolean };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <AppProvider>
      {!Component.checkout ? (
        <>
          <Navbar home={!!Component.home} />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </AppProvider>
  );
}

export default MyApp;
