import { useRef } from "react";
import { skillsData } from "../utils/skills";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import SkillsCard from "../components/SkillsCard";
import Title from "../components/Title";
import { staggerContainer, cardEntrance } from "../../utils/spaceAnimations";

export default function Skills() {
  const primarySkillsRef = useRef(null);
  const isPrimarySkillsInView = useInView(primarySkillsRef, { once: true });

  return (
    <section
      id="Skills"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 relative"
    >
      {/* Add floating particle ONLY */}
      <motion.div
        className="absolute top-1/4 right-20 w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_2px_#06b6d4]"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Title title="Tools that power every launch." />

      <div
        ref={primarySkillsRef}
        className="flex justify-center w-[80%] relative items-center gap-8 p-4"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isPrimarySkillsInView ? "visible" : "hidden"}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardEntrance}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <SkillsCard
                icon={skill.svg}
                title={skill.text}
                description={skill.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
