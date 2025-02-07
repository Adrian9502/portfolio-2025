import React from "react";
import * as motion from "motion/react-client";
import Title from "./Title";
import Code from "./Code";

import "../styles/glitch.css";
// Define the animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 }, // Start slightly below and transparent
  visible: { opacity: 1, y: 0 }, // Animate to original position
};

function About() {
  const nameRef = React.useRef(null);
  const descriptionRef = React.useRef(null);

  return (
    <main
      id="About"
      className="flex items-center flex-col justify-around relative text-white bg-slate-950 bg-texture sm:p-14 py-10"
    >
      <div className="z-2 absolute lg:left-24 top-0 lg:top-20 -translate-x-1/2 transform rounded-full border-[200px] border-b-neon-blue border-l-violet-600 border-neon-pink border-t-neon-pink blur-[240px]"></div>
      <div className="z-2 absolute lg:right-24 bottom-0 lg:top-20 rounded-full border-[200px] border-b-neon-blue border-neon-pink border-r-neon-purple border-t-blue-400 blur-[200px]"></div>
      {/* Title Component */}
      <Title title={"Discover more about my passions and interests."} />

      {/* code */}
      <div className="flex flex-col z-10 2xl:flex-row pointer-events-none items-center justify-around mt-10">
        <div className="p-10 relative text-center text-base sm:text-base md:text-lg lg:text-xl text-slate-300">
          {/* Animate the name */}
          <motion.div
            ref={nameRef}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay for the name
          >
            <span className="drop-shadow-[0_0_2px_#2f46fa] font-orbitron">
              My name is
            </span>{" "}
            <br />
            <span
              data-text="nhoJ nairdA otnoB"
              // added hero glitch layers for text glitch
              className="overflow-hidden hero glitch layers text-neon-cyan  drop-shadow-[0_0_3px_#2f46fa] tracking-widest font-orbitron text-3xl sm:text-4xl lg:text-6xl font-bold"
            >
              John Adrian Bonto
            </span>
          </motion.div>

          {/* Animate the description */}
          <motion.div
            ref={descriptionRef}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }} // Delay for the description
            className="text-sm lg:text-base drop-shadow-[0_0_2px_#2f46fa] font-orbitron tracking-widest"
          >
            Passionate about coding, web design and development, with a keen
            interest in cycling.
          </motion.div>
        </div>

        {/* Code Component */}
        <Code />
      </div>
    </main>
  );
}

export default About;
