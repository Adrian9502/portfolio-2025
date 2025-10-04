import { Variants, Transition } from "motion/react";

export const animationVariants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideFromLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  cardHover: {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  },
};

export const defaultTransitions: Record<string, Transition> = {
  smooth: { duration: 0.8, ease: "easeOut" },
  quick: { duration: 0.3, ease: "easeOut" },
  delayed: { duration: 0.8, delay: 0.4, ease: "easeOut" },
};
