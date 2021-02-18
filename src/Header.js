import React, { useEffect } from "react";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import Link from 'next/link'
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  });

  return (
    <header className={styles.header}>
      <div className={styles.headerlogo} data-aos="fade-right">keith</div>

      <ul className={styles.headerlinks}>
        <li className={router.asPath === '/' ? styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.asPath === '/projects' ? styles.active : ''}>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </header>
  );
}
