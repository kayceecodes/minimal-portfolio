import React, {useEffect} from "react";
import styles from "../../../styles/Blogs.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card(props) {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });

  return (
    <div className={styles.container}>
      <a href={props.blog.link}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img src={"/assets/images/blogs/sassfarfromdead.jpg"} />
          </div>
          <div>
            <p className={styles.header}>
              <div
                className={styles.title}
                style={{
                  transition: "transform 0.55s, color 0.8s"
                }}
                data-aos="fade-up"
              >
                {props.blog.title}
              </div>
              <div
                className={styles.date}
                data-aos="fade-up"
                style={{
                  transition: "transform 0.55s",
                }}
              >
                {props.blog.date}
              </div>
            </p>
            <p className={styles.content}>
              I’ve seen many advanced React users make a claim against the
              preprocessor that state that styled components are the next big
              thing for styling your sheets.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
