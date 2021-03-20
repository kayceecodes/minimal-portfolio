import React from 'react'

const FramerMotionProvider = ({ children }) => {
    const styleProps = {
        pageStyle: {
            position: "absolute",
            width: "100%",
            textAlign: "center",
            overflow: "hidden",
          },
          motions: {
            initial: "initial",
            animate: "out",
            exit: "in",
          },
          pageAnimations: {
            variants: {
              initial: {
                opacity: 0,
              },
              in: {
                opacity: 1,
              },
              out: {
                opacity: 0,
              },
            },
            transition: {
              type: "tween", // Tween: animation that looks like it's evolving/transforming into something else
              ease: "linear",
              duration: 0.35,
            },
          }
    }
    return children(styleProps)
}

export default FramerMotionProvider

/*Slide 15vw to the right and fadeout */

const fadeToRightPageAnimation = {
  variants: {
    initial: {
      opacity: 0,
      x: "-10vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "15vw",
      scale: 1.1,
    },
  },
  transition: {
    type: "tween", // Tween: animation that looks like it's evolving/transforming into something else
    ease: "linear",
    duration: 0.2,
  },
}