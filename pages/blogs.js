import React from "react";
// import styles from "../styles/Blogs.module.css";
import Image from "next/image";
import MotionContainer from "../src/components/hoc/MotionContainer";
import Card from "../src/components/blogs/Card";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Sass is Far From Dead",
    date: "Sept 6, 2017",
    image: "/assets/images/blogs/sassfarfromdead.jpg",
    link:
      "https://medium.com/@justkeithcarr/sass-is-far-from-dead-8618b5f40577",
  },
];

export default function Blog(props) {
  return (
    // <MotionContainer pageAnimations={props.pageAnimations}>
    <motion.div>
      {blogs.map((blog) => (
        <Card key={blog.title} blog={blog} />
      ))}
    </motion.div>
    // </MotionContainer>
  );
}
