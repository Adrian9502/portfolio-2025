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
    <section
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
            className="text-md  font-poppins text-slate-400 text-start"
          >
            I'm a{" "}
            <span className="font-bold text-slate-300">Software Engineer</span>{" "}
            with an unconventional path to code. After nearly two years working
            production at{" "}
            <span className="font-bold text-slate-300">
              Red Ribbon Bakeshop
            </span>
            —where I learned the value of teamwork, precision, and performing
            under pressure—I discovered my passion for building software.
            <br /> <br />
            That curiosity turned into commitment, and commitment turned into
            capability.
            <br /> <br />
            Today, I build full-stack web applications using{" "}
            <span className="font-bold text-slate-300">React.js</span>,{" "}
            <span className="font-bold text-slate-300">Tailwind CSS</span>, and
            the <span className="font-bold text-slate-300">MERN stack</span>,
            with a strong focus on front-end development. My{" "}
            <a
              href="https://github.com/Adrian9502?tab=repositories"
              target="_blank"
            >
              <span className="font-bold text-slate-300">GitHub</span>
            </a>{" "}
            tells the story:{" "}
            <span className="font-bold text-slate-300">20+ repositories</span>{" "}
            documenting my journey from practice projects to production-grade
            applications, including a React Native mobile app I engineered for
            my thesis.
            <br /> <br />
            What excites me most? Turning complex problems into elegant
            solutions. Learning technologies that push my boundaries.
            Collaborating with others who share the same drive to build
            something meaningful.
            <br /> <br />
            The production floor taught me reliability. Coding taught me
            creativity. Together, they've shaped how I approach every
            project—with discipline, curiosity, and determination to deliver
            quality work.
            <br /> <br />
            When I'm not coding, I'm{" "}
            <span className="font-bold text-slate-300">cycling</span> with
            friends—because the best ideas often come when you're moving. 🚴‍♂️
            <br /> <br />
          </motion.div>
        </div>

        <Code />
      </div>
    </section>
  );
}

export default About;
