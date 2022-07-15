import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/index.scss";

type CustomAppProps = AppProps & {
  Component: NextComponentType & { home?: true };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <Navbar home={!!Component.home} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
