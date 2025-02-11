import React, { useRef } from "react";
import { skillsData } from "../utils/skills";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import SkillsCard from "../components/SkillsCard";
export default function Skills() {
  // Create refs for in-view detection
  const primarySkillsRef = useRef(null);

  const isPrimarySkillsInView = useInView(primarySkillsRef, { once: true });
  // Define the animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and transparent
    visible: { opacity: 1, y: 0 }, // Animate to original position
  };
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 }, // Start from the left
    visible: { opacity: 1, x: 0 }, // Animate to the original position
  };
  return (
    <div
      id="Skills"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 "
    >
      {/* Title section */}

      <div className="flex items-start w-[80%]">
        <div className="flex z-10 mt-3 flex-col px-2 py-2 justify-center gap-5 font-semibold">
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
            These are the skills I've gained throughout my development journey.
          </motion.div>
          {/* line */}
          <div className="flex justify-start items-center w-full">
            <div className="w-full relative h-[2px] bg-gradient-to-br from-[#7e2de8] to-[#fb41da] shadow-[0_0_15px_3px_#7e2de8]">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-[#fb41da] to-[#7e2de8] rounded-full shadow-[0_0_15px_3px_#7e2de8]"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills section */}
      <div
        ref={primarySkillsRef}
        className="flex justify-center w-[80%] border relative border-white items-center gap-8 p-4"
      >
        {/* bg glow */}
        <div className="absolute left-2 lg:left-24 top-0 lg:top-36 transform rounded-full border-[100px] border-b-neon-pink border-l-neon-blue border-r-neon-purple border-t-neon-cyan blur-[240px]" />
        <div className="absolute right-2 lg:right-24 bottom-0 lg:bottom-1/2  transform rounded-full border-[100px] border-b-neon-pink border-l-neon-blue border-r-neon-purple border-t-neon-cyan blur-[240px]" />
        {/* Primary Skills with animation */}
        <motion.div
          initial="hidden"
          animate={isPrimarySkillsInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
        >
          {skillsData.map((skill, index) => (
            <SkillsCard
              key={index}
              svg={skill.svg}
              text={skill.text}
              description={skill.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
