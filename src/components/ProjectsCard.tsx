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
    // <!-- From Uiverse.io by LightAndy1 -->
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animationVariants.fadeInUp}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="package"
    >
      <div className="package2">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-tektur font-medium bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            {project.title}
          </h3>

          <p className="text-sm text-slate-300 font-poppins">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-slate-800 text-neon-cyan rounded-md font-tektur"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-slate-300 hover:text-neon-cyan transition-colors"
            >
              <Github size={16} />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-slate-300 hover:text-neon-cyan transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
