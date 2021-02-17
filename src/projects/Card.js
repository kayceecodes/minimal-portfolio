import React from "react";
import styles from "../../styles/Projects.module.css";

function Card(props) {
  return (
    <section className={styles.card}>
      <div className={styles.cardDescription}>
        <p>
          <span>
            <a href={props.project.link}>{props.project.name}</a>
          </span>
        </p>

        {/* <p>{props.project.host}</p> */}
        <p>
          <a href={props.project.link}>{props.project.stack}</a>
        </p>
      </div>

      <div className={styles.cardImg}>
        <a href={props.project.link}>
          <img src={props.project.src} />
        </a>
      </div>
    </section>
  );
}

export default Card;
