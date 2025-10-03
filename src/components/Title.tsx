import React from "react";
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
  return (
    <div className="flex z-10 w-[80%] flex-col  px-2 py-2 justify-start gap-5 font-semibold text-slate-300">
      {/* Title text with animation */}
      <motion.div
        className="flex gap-2"
        initial="hidden"
        animate="visible"
        variants={slideFromLeft}
        transition={{ duration: 1.5 }}
      >
        <img src="/logo.png" className="w-12 h-12 drop-shadow-none" />
        <p className="text-xl text-center font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-cyan drop-shadow-[0_0_1px_#7e2de8] tracking-widest sm:text-xl md:text-2xl lg:text-3xl">
          {title}
        </p>
      </motion.div>
      {/* line */}
      <div className="flex justify-start items-center w-full">
        <div className="relative w-full h-[2px] bg-gradient-to-br from-neon-purple to-neon-purple shadow-[0_0_15px_1px_#7e2de8]">
          {/* circle */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-neon-purple to-neon-purple rounded-full shadow-[0_0_15px_1px_#7e2de8]"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
