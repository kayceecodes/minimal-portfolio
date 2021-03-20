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
            initial: "out",
            animate: "in",
            exit: "out",
          },
          pageAnimations: {
            variants: {
              initial: {
                opacity: 0,
                scale: 1
              },
              in: {
                opacity: 1,
                scale: .98,
              },
              out: {
                opacity: 0,
                scale: .90,
              },
            },
            transition: {
              type: "tween", // Tween: animation that looks like it's evolving/transforming into something else
              ease: "linear",
              duration: 0.2,
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