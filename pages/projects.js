import React from "react";
import Card from "../src/components/projects/Card";
import styles from "../styles/Projects.module.css";
import MotionContainer from "../src/components/hoc/MotionContainer";
import { motion } from 'framer-motion'
const projects = [
  {
    name: "Benson Bracelets",
    link: "https://kcee403.github.io/bensonbracelets/",
    host: "Github Pages",
    stack: "Typescript Next.js Redux Material-ui & Shopify",
    src: "/assets/images/projects/bensonbracelets.jpg",
  },
  {
    name: "Chat-App",
    link: "https://kcee403.github.io/Chat-App",
    host: "Github Pages",
    stack: "Typescript React Redux Firebase Enzyme & Jest",
    src: "/assets/images/projects/chat-app.jpg",
  },
];

export default function Projects(props) {

  return (
   // <MotionContainer pageAnimations={props.pageAnimations}>
   <motion.div
   initial='initial'
   animate='in'
   exit='out'
   variants={{
     initial: {
       opacity: 0,
     },
     in: {
       opacity: 1,
     },
     out: {
       opacity: 0,
     },
   }}
   transition={{transition: {duration: .2},}}
 >
      <div className={styles.container}>
        {projects.map((project, i) => (
          <React.Fragment key={project.name+i}>
            <Card
              project={project}
              key={project.name}
            />

            <div className={styles.cardBottomBorder} />
          </React.Fragment>
        ))}
      </div>
      </motion.div>
    //</MotionContainer>
  );
}
