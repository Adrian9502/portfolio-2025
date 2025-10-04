import React from "react";
import * as motion from "motion/react-client";
import Title from "../components/Title";
import "../styles/glitch.css";
// import Laptop from "../components/3D/Laptop";
import Code from "../components/Code";
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
      className="flex shadow-lg items-center flex-col sm:p-14 py-10 "
    >
      {/* Title Component */}
      <Title title={"Discover more about my passions and interests."} />

      <div className="flex w-full sm:w-[80%] flex-col z-10 2xl:flex-row pointer-events-auto items-center gap-2 justify-around mt-10">
        {/* Left: Text Section */}
        <div className="p-10 z-50 text-center flex-1">
          {/* Animate the name */}
          <motion.div
            ref={nameRef}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay for the name
            className="flex items-end mb-4"
          >
            <span className="font-poppins text-slate-200 text-lg md:text-xl">
              Hello! 👋 I'm
            </span>{" "}
            <span
              data-text="nhoJ nairdA otnoB"
              className="ml-2 overflow-hidden hero glitch layers text-transparent bg-clip-text bg-gradient-to-r to-neon-purple from-neon-cyan  font-poppins text-2xl lg:text-3xl font-semibold"
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-md md:text-lg font-poppins text-slate-400 text-start"
          >
            An{" "}
            <span className="font-bold text-slate-300">
              Aspiring Software Engineer
            </span>{" "}
            specializing in{" "}
            <span className="font-bold text-slate-300">React.js</span>,{" "}
            <span className="font-bold text-slate-300">Tailwind CSS</span>, and
            the <span className="font-bold text-slate-300">MERN stack</span>.
            <br /> <br />
            I’ve built a wide range of projects — from practice apps and UI
            clones to full-stack applications and academic thesis projects. My{" "}
            <a
              href="https://github.com/Adrian9502?tab=repositories"
              target="_blank"
            >
              <span className="font-bold text-slate-300">GitHub</span>
            </a>{" "}
            and portfolio feature over{" "}
            <span className="font-bold text-slate-300">20+</span> public
            repositories, reflecting consistent coding practice and a passion
            for continuous learning.
            <br /> <br />
            In addition, my two years as a{" "}
            <span className="font-bold text-slate-300">
              Production Crew member at Red Ribbon Bakeshop
            </span>{" "}
            strengthened my professionalism, teamwork, and time management —
            qualities I now bring into collaborative development and
            deadline-driven coding projects.
            <br /> <br />I enjoy learning new tools, working with others, and
            turning ideas into practical, impactful solutions. Outside of
            coding, you’ll often find me{" "}
            <span className="font-bold text-slate-300">cycling</span> with
            friends. 🚴‍♂️
            <br /> <br />
          </motion.div>
        </div>

        <Code />
      </div>
    </main>
  );
}

export default About;
