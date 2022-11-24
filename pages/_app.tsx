import {Provider as StyletronProvider} from "styletron-react";
import "../styles/globals.css";
import type {AppProps} from "next/app";
import {styletron} from "../src/styletron";
import {ConfigProvider} from "antd";
import {THEME, ThemeProvider, tokenColors} from "../src/common/theme-provider";
import {fontFamily} from "../src/common/styles/style-font";

export default function App({Component, pageProps}: AppProps) {
  return (
    <ConfigProvider theme={{
      token: tokenColors,
    }}>
      <StyletronProvider value={styletron}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyletronProvider>
    </ConfigProvider>
  );
}
