// framer motion animations variants

// fade in to right
export const fadeRight = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.5,
    },
  },
};

// fade in
export const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// hero animation
export const laptop = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};