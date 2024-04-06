import Head from "next/head";
import { Inter } from "@next/font/google";
import { Container } from "@mantine/core";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
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
  return (
    <>
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
        <link
          rel='icon'
          href='/logo-color-noBG.svg'
        />
      </Head>
      <Container
        w={"100dvw"}
        fluid
        px={0}
        sx={{ transition: "all 0.6s linear" }}>
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
        {/* <Footer /> */}
      </Container>

      {/* <h1>hello world</h1> */}
      {/* <Box
        sx={{
          justifyItems: "center",
          alignItems: "center",
        }}
      >
      </Box> */}
    </>
  );
}
