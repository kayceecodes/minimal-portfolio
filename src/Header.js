import React from "react";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import Link from 'next/link'

export default function Header() {
  const router = useRouter();
  console.log(router.asPath)
  return (
    <header className={styles.header}>
      <div className={styles.headerlogo}>keith</div>

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
