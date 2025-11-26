import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { projectsData } from "../utils/projects.data";
import ProjectsCard from "../components/ProjectsCard";
import { ArrowRight, Eye } from "lucide-react";
import * as motion from "motion/react-client";
import { staggerContainer, cardEntrance } from "../../utils/spaceAnimations";
import "../styles/projectsButton.css";
import { useComponentPerformance } from "../hooks/useComponentPerformance";

const ProjectsPreview: React.FC = () => {
  const navigate = useNavigate();
  useComponentPerformance("ProjectsPreview");

  // Get only the first 3 featured projects
  const featuredProjects = projectsData
    .filter((project) => project.featured)
    .slice(0, 3);

  // If less than 3 featured projects, fill with regular projects
  const displayProjects =
    featuredProjects.length >= 3
      ? featuredProjects
      : [
          ...featuredProjects,
          ...projectsData
            .filter((p) => !p.featured)
            .slice(0, 3 - featuredProjects.length),
        ];

  const handleViewAll = () => {
    // Save current scroll position before navigating
    sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
    navigate("/projects");
  };

  return (
    <section
      id="Projects"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 relative"
    >
      {/* Add floating particles */}
      <motion.div
        className="absolute top-10 right-1/4 w-2 h-2 bg-neon-cyan/80 rounded-full will-change-transform"
        animate={{
          y: [0, -25, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <Title title="Turning ideas into working systems." />

      {/* Projects Grid with animation */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-7xl md:px-4 py-6 px-10 lg:px-10 mx-auto grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {displayProjects.slice(0, 3).map((project, index) => (
          <motion.div key={project.id} variants={cardEntrance}>
            <ProjectsCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4"
      >
        <p className="text-slate-400 font-orbitron text-center max-w-md text-sm sm:text-base">
          I've built {projectsData.length}+ projects exploring different
          technologies and ideas — you can explore all of them below.
        </p>

        <motion.button
          onClick={handleViewAll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="futuristic-button"
        >
          <div className="futuristic-button-content">
            <Eye
              size={20}
              className="button-icon-left transition-transform flex-shrink-0"
            />
            <span>View All Projects</span>
            <ArrowRight
              size={20}
              className="button-icon-right transition-transform flex-shrink-0"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ProjectsPreview;
