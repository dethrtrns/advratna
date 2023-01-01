import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import {
  Box,
  ColorSchemeProvider,
  ColorScheme,
  Container,
  MantineProvider,
  TextInput,
} from "@mantine/core";
import Header from "../components/Header";
import HeaderMiddle from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContactUs from "../components/ContactUs";
import { Footer } from "../components/Footer";
import { useRef, useState } from "react";
import { FAQ } from "../components/FAQ";
import QuoteBlock from "../components/QuoteBlock";
import Subgrid from "../components/Subgrid";
import ScrollTop from "../components/ScrollTop";
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });
const dummy_comment = [
  {
    userName: "Raj Shekhar Singh",
    comment:
      "this is the best legal advisor i ever got in touch with! i did not even needed to see a judge, we went through a smooth mediation process and very efficient councelling by Ratna ma'am herself.",
  },
];

export default function Home() {
  const [colorScheme, setColorScheme] = useState("light");
  // const ref = useRef(null);
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            primaryColor: colorScheme === "dark" ? "cyan" : "indigo",
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Head>
            <title>Advocate Ratna Singh</title>
            <meta
              name='description'
              content='Advocate/Lawyer Ratna Singh in Lucknow uttar pradesh india'
            />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <meta
              name='google-site-verification'
              content='szGiVp6Z2JcQxFGlQHmmcYAWwIiL2bbwj21kZ42uZR8'
            />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          {/* <HeaderMiddle /> */}
          <Container
            fluid
            p={0}
            // sx={{ transition: "all 2s linear" }}
          >
            <Hero />
            <Features />
            {/* <Subgrid> */}
            {/* <QuoteBlock
              quote={dummy_comment[0].comment}
              author={dummy_comment[0].userName}
            /> */}
            {/* </Subgrid> */}
            <FAQ />
            <ContactUs />
            <ScrollTop />
            <Footer />
          </Container>

          {/* <h1>hello world</h1> */}
          {/* <Box
        sx={{
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </Box>
      </Box> */}
          {/* <TextInput placeholder='Your name' label='Full name' withAsterisk /> */}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
