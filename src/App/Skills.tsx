import { useRef } from "react";
import { skillsData } from "../assets/skillsData";
import * as motion from "motion/react-client";
import VantaNet from "./3d/VantaNet";
import Monitor from "./3d/Monitor";
import SkillsGrid from "./skills/SkillsGrid";
function SkillsContainer({ svg, text }) {
  return (
    <div className="flex flex-col items-center gap-2 hover:-translate-y-2 transition-all duration-300 text-slate-300 hover:text-custom-cyan">
      <div
        dangerouslySetInnerHTML={{ __html: svg }}
        className="w-11 h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 shadow-sm shadow-custom-cyan/80 bg-slate-800 rounded-md p-2 transition-all duration-300 hover:scale-105"
      />
      <span className="text-xs lg:text-sm transition-all duration-300">
        {text}
      </span>
    </div>
  );
}

export default function Skills() {
  // Create refs for in-view detection
  const titleRef = useRef(null);
  const primarySkillsRef = useRef(null);

  // Define the animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and transparent
    visible: { opacity: 1, y: 0 }, // Animate to original position
  };

  return (
    <section
      id="Skills"
      className="p-2 h-[70vh] py-10 relative border-4 border-red-500 flex-col overflow-hidden flex  lg:flex-row items-center justify-center sm:p-14 mb-32 text-slate-300"
    >
      {/* <VantaNet /> */}
      {/* Title section */}

      {/*  Title with animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }} // Delay for the title
        className="text-xl font-orbitron text-neon-cyan drop-shadow-[0_0_10px_#2f46fa] z-20 border border-white sm:text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-10 lg:tracking-wide"
      >
        These are the skills I&apos;ve gained in my web development journey.
      </motion.div>
    </section>
  );
}
