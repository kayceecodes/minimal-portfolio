import React, { useEffect } from "react";
import styles from "../../../styles/Projects.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Card(props) {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });
  return (
    <>
      <a className={styles.cardContainer} href={props.project.link}>
        <section className={styles.card}>
          <div className={styles.cardDescription} data-aos="fade-right">
            <p>
              <span>{props.project.name}</span>
            </p>

            {/* <p>{props.project.host}</p> */}
            <p>{props.project.stack}</p>
          </div>

          <div className={styles.cardImg}>
              <img src={props.project.src} />
          </div>
        </section>
      </a>
    </>
  );
}

export default Card;
