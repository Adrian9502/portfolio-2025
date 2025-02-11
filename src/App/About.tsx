import React from "react";
import * as motion from "motion/react-client";
import Title from "../components/Title";
import "../styles/glitch.css";
import Laptop from "../components/3D/Laptop";
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
      className="flex shadow-lg items-center flex-col border-t border-slate-800 sm:p-14 py-10 "
    >
      {/* gradient glow */}
      <div className="absolute left-2 lg:left-24 top-0 lg:top-20 -translate-x-1/2 transform rounded-full border-[300px] border-b-neon-purple border-l-neon-blue border-r-neon-purple border-t-neon-cyan blur-[240px]" />

      <div className="absolute right-2 lg:top-20 lg:-translate-x-32  transform rounded-full border-[200px] xl:border-[300px] xl:border-b-neon-purple xl:border-l-neon-blue xl:border-r-neon-purple xl:border-t-neon-cyan blur-[240px]" />
      {/* Title Component */}
      <Title title={"Discover more about my passions and interests."} />

      {/* Name and 3d laptop */}
      <div className="flex h-full w-full flex-col z-10 2xl:flex-row pointer-events-none items-center gap-2 justify-around mt-10">
        {/* Left: Text Section */}
        <div className="p-10 z-50 w-full text-center text-base sm:text-base md:text-lg lg:text-xl text-slate-200 flex-1">
          {/* Animate the name */}
          <motion.div
            ref={nameRef}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay for the name
          >
            <span className="drop-shadow-[0_0_3px_#2f46fa] font-tektur">
              Hello! My name is
            </span>{" "}
            <br />
            <span
              data-text="nhoJ nairdA otnoB"
              className="overflow-hidden hero glitch layers bg-gradient-to-r from-neon-blue to-neon-blue via-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_4px_#2f46fa] tracking-widest font-orbitron text-3xl sm:text-4xl lg:text-6xl font-bold"
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
            className="text-sm lg:text-base drop-shadow-[0_0_4px_#2f46fa] font-tektur"
          >
            Passionate about{" "}
            <span className="px-0.5 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-pink bg-clip-text text-transparent drop-shadow-[0_0_1px_#2f46fa]">
              coding
            </span>
            ,{" "}
            <span className="px-0.5 bg-gradient-to-r to-neon-cyan from-neon-pink bg-clip-text text-transparent drop-shadow-[0_0_1px_#2f46fa]">
              web design
            </span>{" "}
            and{" "}
            <span className="px-0.5 bg-gradient-to-r to-neon-cyan from-neon-pink bg-clip-text text-transparent drop-shadow-[0_0_1px_#2f46fa]">
              development
            </span>
            , with a keen interest in{" "}
            <span className="bg-gradient-to-r from-neon-pink to-neon-pink via-neon-cyan bg-clip-text text-transparent drop-shadow-[0_0_1px_#2f46fa]">
              cycling
            </span>
            .
          </motion.div>
        </div>
        {/* Right : 3D Monitor */}
        <div
          className="relative z-0 
        w-[80%] 2xl:w-1/2 h-[50vh] md:h-[65vh] md:bg overflow-visible"
        >
          {/* Monitor wrapper with overlap control */}
          <div className="absolute  w-full lg:w-[95%] inset-[-20%] mx-auto z-20">
            <Laptop />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
