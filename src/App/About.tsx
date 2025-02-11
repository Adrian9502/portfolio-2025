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
      <div className="flex w-full sm:w-[80%] flex-col z-10 2xl:flex-row pointer-events-none items-center gap-2 justify-around mt-10">
        {/* Left: Text Section */}
        <div className="p-10 z-50 text-center text-base sm:text-base md:text-lg lg:text-xl  flex-1">
          {/* Animate the name */}
          <motion.div
            ref={nameRef}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay for the name
            className="flex items-end mb-4"
          >
            <span className="font-poppins text-slate-200 text-sm md:text-lg">
              Hello! 👋 I'm
            </span>{" "}
            <span
              data-text="nhoJ nairdA otnoB"
              className="ml-2 overflow-hidden hero glitch layers text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink font-poppins text-2xl lg:text-4xl font-medium"
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
            className="text-xs md:text-sm font-poppins text-gray-400 text-start"
          >
            I started coding in{" "}
            <span className="font-bold text-gray-300">2023</span> and have been
            building personal projects to enhance my skills. Now, I focus on{" "}
            <span className="font-bold text-gray-300">React.js</span>,{" "}
            <span className="font-bold text-gray-300 ">Tailwind CSS</span>, and
            the <span className="font-bold text-gray-300">MERN stack</span>,
            creating both small and full-stack applications.
            <br /> <br />
            With <span className="font-bold text-gray-300">20+</span> projects
            on GitHub, I’m always learning and working towards my goal of
            becoming a{" "}
            <span className="font-bold text-gray-300">Software Engineer</span>.
            <br /> <br />
            Outside of coding, I enjoy{" "}
            <span className="font-bold text-gray-300">cycling</span> with
            friends and playing{" "}
            <span className="font-bold text-gray-300">Mir4</span>, an MMORPG
            automation game, balancing both hobbies as I grind in coding!
            <br /> <br />
            <span className="text-gray-200">My favorite motto is</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-pink">
              "Whether you do it or not, time will pass anyway."
            </span>
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
