// FRAMER MOTION ANIMATION VARIANTS

// fade in and scale
export const fadeInAndScale = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// fade in, Y down delayed
export const fadeInYDownDelayed = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

// fade in
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// fade right
export const fadeRight = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

// fade in down
export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export const button = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};
