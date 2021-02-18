import React, { useEffect } from "react";
import styles from "../../styles/Projects.module.css";
import Aos from 'aos';
import "aos/dist/aos.css";


function Card(props) {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });
  return (
    <section className={styles.card}>
      <div className={styles.cardDescription} data-aos="fade-right">
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
