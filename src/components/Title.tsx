import React from "react";
import { motion } from "framer-motion";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex z-10 w-[80%] flex-col px-2 py-2 justify-start gap-5 font-semibold text-slate-300">
      {/* Title text with space-themed animation */}
      <motion.div
        className="flex gap-2 items-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Logo with Pulse */}
        <motion.img
          src="/logo.png"
          className="w-12 h-12 drop-shadow-none"
          initial={{ rotate: -180, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            rotate: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />

        {/* Animated Title Text with Typewriter Effect */}
        <motion.p
          className="text-xl text-center font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-cyan drop-shadow-[0_0_1px_#7e2de8] tracking-widest sm:text-xl md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.05,
                delay: 0.5 + index * 0.03,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>

      {/* Animated Line with Particle Effect */}
      <div className="flex justify-start items-center w-full">
        <motion.div
          className="relative w-full h-[2px] bg-gradient-to-br from-neon-purple to-neon-purple shadow-[0_0_15px_1px_#7e2de8]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        >
          {/* Animated Circle */}
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-neon-purple to-neon-purple rounded-full shadow-[0_0_15px_1px_#7e2de8]"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 15px 1px #7e2de8",
                "0 0 25px 3px #7e2de8",
                "0 0 15px 1px #7e2de8",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Traveling Light Particle */}
          <motion.div
            className="absolute top-1/2 transform -translate-y-1/2 w-1 h-1 bg-neon-cyan rounded-full shadow-[0_0_10px_2px_#06b6d4]"
            initial={{ left: 0, opacity: 0 }}
            animate={{
              left: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Title;
