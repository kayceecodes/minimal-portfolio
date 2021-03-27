import React from "react";
import styles from "../../../styles/Footer.module.css";
import Link from "next/link";
import { socialLinks } from "../../../pages/index";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaMedium,
  FaCodepen,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className={styles.backgroundImgWrapper}>
        <Image
          width={950}
          height={330}
          src="/assets/images/backgrounds/devices.png"
        />
      </div>
      <div className={styles.container}>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className={styles.topBorder}
        />
        <ul data-aos="fade-up" className={styles.socialLinks}>
          {socialLinks.map((value) => (
            <li key={value.name}>{value.component}</li>
          ))}
        </ul>
        <p>
          <small>Keith Carrillo 2021</small>
        </p>
        <p>
          <a href="mailto:justkeithcarr@gmail.com">Contact me</a>
          <Link href="/projects">Projects</Link>
        </p>
        <div className={styles.bottomBorder} />
      </div>
    </>
  );
}
