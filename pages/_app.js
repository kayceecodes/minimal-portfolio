import Header from "../src/ui/header/Header";
import Head from "next/head";
import "../styles/globals.css";

import { AnimatePresence } from "framer-motion";
import FramerMotionProvider from "../src/components/hoc/FramerMotionProvider";
import { useRouter } from "next/router";
import MotionContainer from "../src/components/hoc/MotionContainer";
import { motion } from 'framer-motion'
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
          <AnimatePresence>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={props.pageAnimations.variants}
              transition={props.pageAnimations.transition}
              key={router.pathname}
            >
              <Component {...pageProps} {...props}  />
            </motion.div>
          </AnimatePresence>
        )}
      </FramerMotionProvider>
    </>
  );
}

export default MyApp;
