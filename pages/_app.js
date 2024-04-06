import { AppProps } from "next/app";
import Head from "next/head";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import HeaderMiddle from "../components/Header";
import { useState } from "react";
import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("light");
  // const ref = useRef(null);
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Ratna Associates</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            primaryColor: colorScheme === "dark" ? "cyan" : "indigo",
          }}
          withGlobalStyles
          withNormalizeCSS>
          {/* {window.location.pathname !== "/playground"} TODO: remove any layout if route = playground(with next router) */}
          {/* <HeaderMiddle /> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
