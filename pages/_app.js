import Header from "../src/Header";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        Keith Carrillo's Portfolio
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Kanit:wght@800&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/e216d7c543.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
