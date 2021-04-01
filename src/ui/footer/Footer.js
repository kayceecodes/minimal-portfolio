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
            <Link key={value.name} href={value.link}>
              <li>{value.component}</li>
            </Link>
          ))}
        </ul>
        <div>
          <a href="mailto:justkeithcarr@gmail.com">Contact me</a>
          <Link href="/projects">Projects</Link>
        </div>

        <small>Keith Carrillo 2021</small>

        {/* <div className={styles.bottomBorder} /> */}
      </div>
    </>
  );
}
