import { AppProps } from "next/app";
import Head from "next/head";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import HeaderMiddle from "../components/Header";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [colorScheme, setColorScheme] = useState("light");
  // const ref = useRef(null);

  useEffect(() => {
    // Initialize theme state based on URL query parameter when component mounts
    const { colorScheme: colorSchemeFromUrl } = router.query;
    if (colorSchemeFromUrl) {
      setColorScheme(colorSchemeFromUrl);
    }
  }, [router.query.colorScheme]);

  const toggleColorScheme = () => {
    const newColorScheme = colorScheme === "dark" ? "light" : "dark";
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, colorScheme: newColorScheme },
    });
    setColorScheme(newColorScheme);
  };

  // console.log("router queries from _app-->", router.query);
  //TODO: add theme to route
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
            colorScheme: colorScheme,
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
