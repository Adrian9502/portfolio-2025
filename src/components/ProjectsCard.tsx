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
      className="package h-full"
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

          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-900/90 backdrop-blur-sm rounded-lg hover:bg-purple-600 transition-all duration-300 border border-slate-700 hover:border-purple-500"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} className="text-white" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900/90 backdrop-blur-sm rounded-lg hover:bg-cyan-500 transition-all duration-300 border border-slate-700 hover:border-cyan-400"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} className="text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-tektur font-bold bg-gradient-to-r from-neon-cyan  to-neon-purple bg-clip-text text-transparent leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p
            title={project.description}
            className="text-sm text-slate-400 font-poppins leading-relaxed line-clamp-2 flex-shrink-0 cursor-help"
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-medium font-tektur bg-slate-900 text-cyan-400 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom Action Bar - Desktop View */}
          <div className="hidden sm:flex items-center justify-between pt-4 border-t border-slate-800 mt-auto">
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium group/link"
              >
                <Github
                  size={16}
                  className="group-hover/link:rotate-12 transition-transform"
                />
                <span>View Code</span>
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition-colors font-medium group/link"
                >
                  <ExternalLink
                    size={16}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            {/* View Details Hint */}
            <div className="text-xs text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Click to explore →
            </div>
          </div>

          {/* Bottom Action Bar - Mobile View */}
          <div className="flex sm:hidden gap-3 pt-4 mt-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-cyan-400 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-all text-sm font-medium"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-purple-400 rounded-lg border border-slate-800 hover:border-purple-500/50 transition-all text-sm font-medium"
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
