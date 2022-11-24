import { Provider as StyletronProvider } from "styletron-react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { styletron } from "../src/styletron";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}
