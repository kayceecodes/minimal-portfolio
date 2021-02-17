import styles from "../styles/Home.module.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaMedium,
  FaCodepen,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const socialLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/keith-carrillo",
    component: <FaLinkedinIn />,
  },
  {
    name: "Github",
    link: "https://github.com/kcee403",
    component: <FaGithub />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/justkeithcarr",
    component: <FaTwitter />,
  },
  {
    name: "Medium",
    link: "https://medium.com/@justkeithcarr",
    component: <FaMedium />,
  },
  {
    name: "Codepen",
    link: "https://codepen.io/kcee403",
    component: <FaCodepen />,
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Container of everything below header, 
      its centered margins textaling left */}
      <div className={styles.container}>
        <p>
          Hey, I'm Keith Carrillo.
          <br />
          I'm passionate about eCommerce applications experiences that could
          potentially have a great affect on many users. In my spare time I
          enjoy talking with other developers on twitter, learning and
          communicating about new trends or new solutions.
          <br />
          I’m hoping to join a team that I can share ideas with, learn from and
          potentially grow with as a team member.
        </p>

        <ul className={styles.sociallinks}>
          {socialLinks.map((value) => (
            <li key={value.name}>
              <a href={value.link}>{value.name}</a>
              {value.component}
            </li>
          ))}
        </ul>
      </div>
      {/* EO Container */}
    </div>
  );
}
