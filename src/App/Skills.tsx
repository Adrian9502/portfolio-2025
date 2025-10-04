import { useRef } from "react";
import { skillsData } from "../utils/skills";
import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import SkillsCard from "../components/SkillsCard";
import Title from "../components/Title";
export default function Skills() {
  // Create refs for in-view detection
  const primarySkillsRef = useRef(null);

  const isPrimarySkillsInView = useInView(primarySkillsRef, { once: true });
  // Define the animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="Skills"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 "
    >
      {/* Title section */}
      <Title title="These are the skills I've gained throughout my development journey." />
      {/* Skills section */}
      <div
        ref={primarySkillsRef}
        className="flex justify-center w-[80%] relative items-center gap-8 p-4"
      >
        {/* Primary Skills with animation */}
        <motion.div
          initial="hidden"
          animate={isPrimarySkillsInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
        >
          {skillsData.map((skill, index) => (
            <SkillsCard
              key={index}
              icon={skill.svg}
              title={skill.text}
              description={skill.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
