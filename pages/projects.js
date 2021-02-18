import React from "react";
import Card from "../src/projects/Card";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    name: "Benson Bracelets",
    link: "https://kcee403.github.io/bensonbracelets/",
    host: "Github Pages",
    stack: "TS Next.js Redux Material-ui & Shopify",
    src: "/assets/images/projects/bensonbracelets.jpg",
  },
  {
    name: "Chat-App",
    link: "https://kcee403.github.io/Chat-App",
    host: "Github Pages",
    stack: "TS React Redux Firebase Enzyme & Jest",
    src: "/assets/images/projects/chat-app.jpg",
  },
];

export default function Projects() {

  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <React.Fragment key={project.name}> 
          <Card project={project} />

          <div className={styles.cardBottomBorder} />
        </React.Fragment>
      ))}
    </div>
  );
}
