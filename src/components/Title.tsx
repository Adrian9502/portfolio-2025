import React, { useRef } from "react";
import { motion } from "framer-motion";

// Define props interface
interface TitleProps {
  title: string;
}

// Define the animation variant for sliding from the left
const slideFromLeft = {
  hidden: { opacity: 0, x: -100 }, // Start from the left
  visible: { opacity: 1, x: 0 }, // Animate to the original position
};

const Title: React.FC<TitleProps> = ({ title }) => {
  // Create a ref (though not needed for visibility tracking here)
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="flex z-10 flex-col items-center px-2 py-2 justify-center gap-5 font-semibold text-slate-300"
    >
      {/* Title text with animation */}
      <motion.div
        className="text-xl text-center font-orbitron text-neon-cyan drop-shadow-[0_0_10px_#2f46fa] sm:text-2xl md:text-3xl lg:text-4xl"
        initial="hidden"
        animate="visible"
        variants={slideFromLeft}
        transition={{ duration: 1.5 }}
      >
        {title}
      </motion.div>

      {/* Cyan divider with responsive width */}
      <motion.div
        className="h-1.5 md:h-2 rounded-lg bg-custom-cyan w-full"
        initial="hidden"
        animate="visible"
        variants={slideFromLeft}
        transition={{ duration: 2.5, delay: 0.5 }}
      />
    </div>
  );
};

export default Title;
