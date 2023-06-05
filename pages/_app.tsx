import type { AppProps } from "next/app";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="default-margin">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
