import * as motion from "motion/react-client";
import VantaGlobe from "./3d/VantaGlobe";
function Landing() {
  // Memoize the motion components' props to prevent unnecessary recalculations
  const motionProps = {
    hello: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1.5, delay: 0.3, ease: "easeOut" },
    },
    passionate: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
    },
    webDev: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
    },
    specializing: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
    },
    frontEnd: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
    },
    creating: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <main
      id="vantajs"
      className="relative z-10 min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.imgur.com/YvUPGUK.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* VantaGlobe container - positioned absolute to cover the entire main */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/50">
        <VantaGlobe />
      </div>

      {/* Content overlay */}
      <div className="absolute p-3 z-50 flex flex-col items-center justify-center">
        <motion.div
          {...motionProps.hello}
          className="text-base text-sky-400 drop-shadow-[0_0_2px_#7e2de8] font-medium font-tektur tracking-widest md:text-lg lg:text-xl"
        >
          Hello! I&apos;m John Adrian.
        </motion.div>

        <motion.div
          {...motionProps.passionate}
          className="text-lg sm:text-xl md:text-2xl font-tektur tracking-widest lg:text-2xl flex flex-col text-sky-400 drop-shadow-[0_0_2px_#7e2de8] font-medium items-center lg:items-stretch"
        >
          A passionate
        </motion.div>

        <motion.div
          {...motionProps.webDev}
          className="text-center lg:py-3 text-4xl font-tektur tracking-widest drop-shadow-[0_0_5px_#2f46fa] text-neon-cyan sm:text-6xl md:text-7xl lg:text-[90px] font-bold"
        >
          Web Developer
        </motion.div>

        <motion.div
          {...motionProps.specializing}
          className="text-lg font-medium sm:text-xl md:text-2xl font-tektur tracking-widest lg:text-2xl flex flex-col text-sky-400 drop-shadow-[0_0_2px_#7e2de8] items-center lg:items-stretch"
        >
          specializing in
        </motion.div>

        <motion.div
          {...motionProps.frontEnd}
          className="text-neon-cyan py-2 font-tektur tracking-widest lg:py-3 text-4xl sm:text-6xl md:text-7xl drop-shadow-[0_0_5px_#2f46fa] lg:text-[90px] font-bold text-center"
        >
          Front-End Development.
        </motion.div>

        <motion.div
          {...motionProps.creating}
          className="text-sm font-tektur text-sky-400 font-medium tracking-widest sm:text-base md:text-lg drop-shadow-[0_0_2px_#7e2de8] lg:text-xl text-center"
        >
          Creating engaging, responsive, and user-friendly websites with modern
          technologies.
        </motion.div>
      </div>

      {/* Color overlays */}
      <div className="absolute z-20 right-0 left-0 bottom-[25vh] border-[200px] border-black/70 blur-[200px]" />
      <div className="absolute z-20 -right-[10vw] top-[40vh] rounded-full border-[500px] border-b-cyan-400/40 border-l-rose-600/40 border-r-indigo-500/40 border-t-neon-green-400/40 blur-[200px]" />
      <div className="absolute z-20 -left-[10vw] top-[40vh] rounded-full border-[500px] border-b-cyan-400/40 border-l-rose-600/40 border-r-indigo-500/40 border-t-neon-green-400/40 blur-[200px]" />
    </main>
  );
}

export default Landing;
