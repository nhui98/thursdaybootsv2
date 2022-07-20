import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { BasketProvider } from "../context/basket-context";
import "../styles/index.scss";

type CustomAppProps = AppProps & {
  Component: NextComponentType & { home?: boolean; checkout?: boolean };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <BasketProvider>
      {!Component.checkout ? (
        <>
          <Navbar home={!!Component.home} />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </BasketProvider>
  );
}

export default MyApp;
