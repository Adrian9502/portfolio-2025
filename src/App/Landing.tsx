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
      className="relative z-10 min-h-screen w-full flex items-center justify-center overflow-hidden shadow-lg before:z-50 "
      // style={{ backgroundImage: 'url("https://i.imgur.com/YvUPGUK.jpg")' }}
    >
      {/* gradient glow */}
      <div className="absolute left-2 lg:left-24 top-0 lg:top-20 -translate-x-1/2 transform rounded-full border-[150px] border-b-neon-purple/40 border-l-neon-blue/40 border-r-neon-purple/40 border-t-neon-cyan/60 blur-[200px]" />

      <div className="absolute right-2 lg:top-20 lg:-translate-x-32  transform rounded-full border-[200px] xl:border-[150px] xl:border-b-neon-purple/40 xl:border-l-neon-blue/40 xl:border-r-neon-purple/40 xl:border-t-neon-cyan/40 blur-[200px]" />

      {/* Content overlay */}
      <div className="absolute p-3 z-50 flex flex-col items-center justify-center">
        <motion.div
          {...motionProps.passionate}
          className="text-lg sm:text-xl md:text-2xl font-tektur tracking-widest lg:text-2xl flex flex-col text-slate-100 font-medium items-center lg:items-stretch drop-shadow-[0_0_1px_#242424]"
        >
          {/* A passionate */}Aspiring
        </motion.div>

        <motion.div
          {...motionProps.webDev}
          className="text-center lg:py-3 text-4xl font-tektur tracking-widest text-neon-cyan sm:text-6xl drop-shadow-[0_0_5px_#7e2de8] md:text-5xl lg:text-[90px] font-bold"
        >
          Software Engineer
          {/* Web Developer */}
        </motion.div>

        <motion.div
          {...motionProps.specializing}
          className="text-lg font-medium sm:text-xl md:text-2xl font-tektur tracking-widest lg:text-2xl flex flex-col text-slate-100 items-center lg:items-stretch drop-shadow-[0_0_1px_#242424]"
        >
          specializing in
        </motion.div>

        <motion.div
          {...motionProps.frontEnd}
          className="text-neon-cyan py-2 font-tektur tracking-widest lg:py-3 text-4xl sm:text-6xl md:text-5xl lg:text-[90px] font-bold text-center drop-shadow-[0_0_5px_#7e2de8]"
        >
          Front-End Development
          {/* Front-End Development */}
        </motion.div>

        <motion.div
          {...motionProps.creating}
          className="text-sm font-tektur text-slate-100 font-medium tracking-widest sm:text-base md:text-lg lg:text-xl text-center drop-shadow-[0_0_1px_#242424]"
        >
          {/* Creating engaging, responsive, and user-friendly websites with modern
          technologies */}
          Building robust, high-quality applications with a disciplined approach
          to code and teamwork.
        </motion.div>

        <motion.div
          {...motionProps.socialIcons}
          className="flex mt-5 items-center gap-4 justify-center transition-all duration-300"
        >
          {socialLinks.map(({ Icon, link, label }: SocialLink) => (
            <SocialIcons
              styles="hover:bg-slate-800 border border-neon-purple/50  rounded-lg"
              iconColor="text-neon-cyan"
              key={label}
              Icon={Icon}
              link={link}
              label={label}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default Landing;
