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
  return (
    <div className="flex z-10 w-[80%] flex-col  px-2 py-2 justify-start gap-5 font-semibold text-slate-300">
      {/* Title text with animation */}
      <motion.div
        className="text-xl text-center font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#fb41da] via-[#2f46fa] to-[#fb41da] drop-shadow-[0_0_1px_#2f46fa] flex gap-2 sm:text-xl md:text-2xl lg:text-3xl"
        initial="hidden"
        animate="visible"
        variants={slideFromLeft}
        transition={{ duration: 1.5 }}
      >
        <img
          src="/logo.png"
          className="w-10 h-10 drop-shadow-[0_0_1px_#7e2de8]"
        />
        {title}
      </motion.div>
      {/* line */}
      <div className="flex justify-start items-center w-full">
        <div className="relative w-full h-[2px] bg-gradient-to-br from-[#7e2de8] to-[#fb41da] shadow-[0_0_15px_3px_#7e2de8]">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-[#fb41da] to-[#7e2de8] rounded-full shadow-[0_0_15px_3px_#7e2de8]"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
