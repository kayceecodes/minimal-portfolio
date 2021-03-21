import { useEffect } from 'react'
import styles from "../styles/Home.module.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaMedium,
  FaCodepen,
} from "react-icons/fa";
import MotionContainer from "../src/components/hoc/MotionContainer";
import Aos from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/keith-carrillo",
    component: <FaLinkedinIn />,
    timer: 600
  },
  {
    name: "Github",
    link: "https://github.com/kcee403",
    component: <FaGithub />,
    timer: 800
  },
  {
    name: "Twitter",
    link: "https://twitter.com/justkeithcarr",
    component: <FaTwitter />,
    timer: 1000
  },
  {
    name: "Medium",
    link: "https://medium.com/@justkeithcarr",
    component: <FaMedium />,
    timer: 1200
  },
  {
    name: "Codepen",
    link: "https://codepen.io/kcee403",
    component: <FaCodepen />,
    timer: 1400
  },
];

export default function Home(props) {
  useEffect(() => {
    Aos.init({
      // duration: 800,
    });
  });

  return (
    <MotionContainer pageAnimations={props.pageAnimations}>
    
      <div>
        {/* Container of everything below header, 
      its centered margins textaling left */}
        <div className={styles.container}>
          <p>
            <span className={styles.greet}>Hey, I'm Keith Carrillo.</span>
            <br /><br />
            I'm passionate about team managment and eCommerce application
            experiences that could potentially have a great affect on many
            users.
            <br /><br />
            In my spare time I enjoy talking with other developers on twitter,
            learning and communicating about new trends or new solutions.
            <br /><br />
            I’m hoping to join a team that I can share ideas with, learn from,
            and potentially grow with as a team member.
          </p>
          <ul className={styles.sociallinks}>
              {socialLinks.map((value) => (
                <li key={value.name}
                    style={{
                      transition: `transform ${value.timer}ms, color 0.3s`
                    }}
                    data-aos='fade-right'
                  >
                  <a href={value.link}>{value.name}</a>
                  {value.component}
                </li>
              ))}
            </ul>
        </div>
        {/* EO Container */}
      </div>
    </MotionContainer>
  );
}
