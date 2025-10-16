import { useRef } from "react";
import { skillsData } from "../utils/skills.data";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import SkillsCard from "../components/SkillsCard";
import Title from "../components/Title";
import { staggerContainer, cardEntrance } from "../../utils/spaceAnimations";

export default function Skills() {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const toolsRef = useRef(null);

  const isFrontendInView = useInView(frontendRef, { once: true });
  const isBackendInView = useInView(backendRef, { once: true });
  const isToolsInView = useInView(toolsRef, { once: true });

  // Separate skills by category
  const frontendSkills = skillsData.filter((s) => s.category === "frontend");
  const backendSkills = skillsData.filter((s) => s.category === "backend");
  const toolsSkills = skillsData.filter((s) => s.category === "tools");
  const mobileSkills = skillsData.filter((s) => s.category === "mobile");

  return (
    <section
      id="Skills"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 relative"
    >
      {/* Floating particles */}
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
      <motion.div
        className="absolute bottom-1/4 left-20 w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_15px_2px_#7e2de8]"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <Title title="Tools that power every launch." />

      {/* Frontend Section */}
      <div className="w-[80%] mx-auto mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <h3 className="text-lg md:text-xl font-tektur font-semibold bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple  bg-clip-text text-transparent">
            Frontend Development
          </h3>
        </motion.div>

        <motion.div
          ref={frontendRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isFrontendInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {[...frontendSkills, ...mobileSkills].map((skill, index) => (
            <motion.div
              key={`${skill.text}-${index}`}
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

      {/* Backend Section */}
      <div className="w-[80%] mx-auto mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <h3 className="text-lg md:text-xl font-tektur font-semibold bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple  bg-clip-text text-transparent">
            Backend Development
          </h3>
        </motion.div>

        <motion.div
          ref={backendRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isBackendInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {backendSkills.map((skill, index) => (
            <motion.div
              key={`${skill.text}-${index}`}
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

      {/* Tools & Technologies Section */}
      <div className="w-[80%] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <h3 className="text-lg md:text-xl font-tektur font-semibold bg-gradient-to-r  from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Tools & Technologies
          </h3>
        </motion.div>

        <motion.div
          ref={toolsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isToolsInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {toolsSkills.map((skill, index) => (
            <motion.div
              key={`${skill.text}-${index}`}
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
