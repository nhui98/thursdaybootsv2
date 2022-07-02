import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
