import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { BasketProvider } from "../context/basket-context";
import "../styles/index.scss";

type CustomAppProps = AppProps & {
  Component: NextComponentType & { home?: true };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <BasketProvider>
      <Navbar home={!!Component.home} />
      <Component {...pageProps} />
      <Footer />
    </BasketProvider>
  );
}

export default MyApp;
