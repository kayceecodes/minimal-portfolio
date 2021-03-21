import Header from "../src/ui/header/Header";
import Head from "next/head";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import FramerMotionProvider from "../src/components/hoc/FramerMotionProvider";
import { useRouter } from "next/router";
import MotionContainer from "../src/components/hoc/MotionContainer";
import { motion } from 'framer-motion'

import Blog from './blogs'
import Projects from './projects'
import Home from './index'


// Start of Fix - https://github.com/vercel/next.js/issues/17464
import Router from "next/router";

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );
// End Of Fix

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
      <FramerMotionProvider>
        {(props) => (
          <AnimatePresence exitBeforeEnter>            
              <Component 
              key={router.pathname}
              {...pageProps} 
              {...props}  />
          </AnimatePresence>
        )}
      </FramerMotionProvider>
    </>
  );
}

export default MyApp;
