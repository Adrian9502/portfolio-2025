import React from "react";
import * as motion from "motion/react-client";
import { animationVariants } from "../utils/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverable = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animationVariants.fadeInUp}
      transition={{ duration: 0.8, delay }}
      whileHover={hoverable ? "hover" : undefined}
      className={`border-2 box p-4 md:p-5 rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
