import React from "react";
import "../styles/projectsCard.css";
import { Project } from "../utils/projects.data";
import * as motion from "motion/react-client";
import { animationVariants } from "../utils/animations";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animationVariants.fadeInUp}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="package z-10 h-full"
    >
      <div className="package2 flex flex-col h-full">
        {/* Image Section with Overlay */}
        <div className="relative overflow-hidden rounded-t-2xl h-48 flex-shrink-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-2 space-y-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-sm md:text-md lg:text-lg font-tektur font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p
            title={project.description}
            className="text-xs md:text-sm text-slate-400 font-poppins leading-relaxed line-clamp-3 flex-shrink-0 cursor-help"
          >
            {project.description}
          </p>

          {/* Technologies with Icons */}
          <div className="flex flex-wrap gap-2 pt-2 ">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium font-tektur bg-slate-900/50 text-neon-cyan rounded-lg border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all flex items-center gap-1.5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="flex items-center justify-center gap-8 pt-2 border-t border-slate-800 mt-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all duration-300 group/link"
            >
              <Github
                size={17}
                className="group-hover/link:scale-110 transition-transform"
              />
              <span className="text-xs font-medium">View Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all duration-300 group/link"
              >
                <ExternalLink
                  size={17}
                  className="group-hover/link:scale-110 transition-transform"
                />
                <span className="text-xs font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
