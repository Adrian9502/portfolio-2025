import * as motion from "motion/react-client";
import "../styles/grid.css";
import SocialIcons from "../components/SocialIcons";
import socialLinks from "../utils/socialLinks";

interface SocialLink {
  Icon: React.ElementType;
  link: string;
  label: string;
}
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
    socialIcons: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1.5, delay: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main
      className="relative z-10 min-h-screen w-full flex items-center justify-center overflow-hidden shadow-lg before:z-50 before:absolute before:inset-x-0 before:bottom-0 before:h-40 before:bg-gradient-to-t 
              before:from-slate-950 before:to-transparent 
              after:z-30 after:absolute after:inset-x-0 after:top-0 after:h-[90%] after:bg-gradient-to-b 
              after:from-slate-950 after:via-stone-950/50 after:to-transparent"
      style={{ backgroundImage: 'url("https://i.imgur.com/YvUPGUK.jpg")' }}
    >
      <div className="grid absolute left-0 right-0 top-0 bottom-0">
        <div className="grid-fade"></div>
        <div className="grid-lines"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute p-3 z-50 flex flex-col items-center justify-center">
        <motion.div
          {...motionProps.hello}
          className="text-base text-sky-400 drop-shadow-[0_0_2px_#7e2de8] font-medium font-tektur tracking-widest mb-2 md:text-lg lg:text-xl"
        >
          Hello! I&apos;m John Adrian
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
          Front-End Development
        </motion.div>

        <motion.div
          {...motionProps.creating}
          className="text-sm font-tektur text-sky-400 font-medium tracking-widest sm:text-base md:text-lg drop-shadow-[0_0_2px_#7e2de8] lg:text-xl text-center"
        >
          Creating engaging, responsive, and user-friendly websites with modern
          technologies
        </motion.div>

        <motion.div
          {...motionProps.socialIcons}
          className="flex mt-5 items-center gap-4 justify-center transition-all duration-300"
        >
          {socialLinks.map(({ Icon, link, label }: SocialLink) => (
            <SocialIcons
              styles="hover:bg-slate-950/50 bg-blue-600/20 border-2 border-neon-purple/50 hover:bg-purple-950/50 rounded-lg drop-shadow-[0_0_5px_#7e2de8] hover:drop-shadow-[0_0_8px_#7e2de8]"
              iconColor="text-neon-cyan"
              key={label}
              Icon={Icon}
              link={link}
              label={label}
            />
          ))}
        </motion.div>
      </div>

      {/* Color overlays */}

      <div className="absolute z-20 -right-[10vw] top-[40vh] rounded-full border-[500px] border-b-neon-cyan/70 border-l-rose-600/70 border-r-neon-blue/70 border-t-neon-green-400/40 blur-[200px]" />
      <div className="absolute z-20 -left-[10vw] top-[40vh] rounded-full border-[500px] border-b-cyan-400/70 border-l-rose-600/70 border-r-neon-blue/70 border-t-neon-green-400/70 blur-[200px]" />
    </main>
  );
}

export default Landing;
