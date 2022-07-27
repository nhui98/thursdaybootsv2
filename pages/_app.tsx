import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import CheckoutCart from "../components/CheckoutCart/CheckoutCart";
import Footer from "../components/Footer/Footer";
import CheckoutLayout from "../components/Layouts/CheckoutLayout";
import Navbar from "../components/Navbar/Navbar";
import { AppProvider } from "../context/appContext";
import "../styles/index.scss";

type CustomAppProps = AppProps & {
  Component: NextComponentType & {
    home?: boolean;
    checkout?: boolean;
    noLayout?: boolean;
  };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  if (Component.checkout)
    return (
      <AppProvider>
        <CheckoutLayout
          left={<Component {...pageProps} />}
          right={<CheckoutCart />}
        />
      </AppProvider>
    );

  if (Component.noLayout)
    return (
      <AppProvider>
        <Component {...pageProps} />;
      </AppProvider>
    );

  return (
    <AppProvider>
      <Navbar home={!!Component.home} />
      <Component {...pageProps} />
      <Footer />
    </AppProvider>
  );
}

export default MyApp;
