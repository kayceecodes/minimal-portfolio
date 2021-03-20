import React, { useEffect, useState } from "react";
import styles from "../../../styles/Header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const ListItem = (props) => {
  const router = useRouter();
  const [isHighLighted, setIsHighLighted] = useState(false);

  return (
    <>
      <li
        onMouseEnter={() => setIsHighLighted(true)}
        onMouseLeave={() => setIsHighLighted(false)}
        className={
          router.asPath === props.path ? styles.active : styles.underline
        }
      >
        <Link href={props.path}>{props.name}</Link>
      </li>
      {props.index !== props.array.length - 1 ? (
        <li className={styles.border} />
      ) : null}
    </>
  );
};

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/blogs",
    name: "Blogs",
  },
];

export default function Header() {
  useEffect(() => {
    Aos.init({
    });
  });

  return (
    <header className={styles.header}>
      <div className={styles.headerlogo} data-aos="fade-right">
        <span>keith</span>
      </div>
      <ul className={styles.headerlinks}>
        {routes.map((route, index, array) => 
            <ListItem
              key={index}
              path={route.path}
              name={route.name}
              index={index}
              array={array}
            />
          )}
      </ul>
    </header>
  );
}
