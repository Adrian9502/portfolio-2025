import React from "react";
import "../styles/projectsCard.css";
import { Project } from "../utils/projects.data";
import * as motion from "motion/react-client";
import { animationVariants } from "../utils/animations";
import { Github, ExternalLink } from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiAmazon,
  SiDocker,
  SiGit,
  SiGraphql,
  SiRedux,
  SiFramer,
} from "react-icons/si";
import { TbBrain, TbEye } from "react-icons/tb";
import { FaGem, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { GiBearHead } from "react-icons/gi";
import { FaHtml5 } from "react-icons/fa";
import { SiVite, SiChakraui } from "react-icons/si";
import { FaChartSimple } from "react-icons/fa6";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const getTechIcon = (tech: string): JSX.Element => {
  const techLower = tech.toLowerCase();
  // Chakra UI
  if (techLower.includes("apex chart")) {
    return <FaChartSimple className="text-purple-500" />;
  }
  // Chakra UI
  if (techLower.includes("chakra ui")) {
    return <SiChakraui className="text-teal-500" />;
  }
  // bootstrap
  if (techLower.includes("bootstrap")) {
    return <FaBootstrap className="text-violet-500" />;
  }
  // html
  if (techLower.includes("html")) {
    return <FaHtml5 className="text-orange-500" />;
  }
  // css
  if (techLower.includes("css")) {
    return <FaCss3Alt className="text-blue-500" />;
  }

  // MongoDB
  if (techLower.includes("mongodb")) {
    return <SiMongodb className="text-green-500" />;
  }
  // Express
  if (techLower.includes("express")) {
    return <SiExpress className="text-slate-300" />;
  }
  // React
  if (techLower.includes("react") && !techLower.includes("native")) {
    return <SiReact className="text-cyan-400" />;
  }
  // React Native
  if (techLower.includes("react native")) {
    return <SiReact className="text-cyan-400" />;
  }
  // Node.js
  if (techLower.includes("node")) {
    return <SiNodedotjs className="text-green-600" />;
  }
  // Tailwind
  if (techLower.includes("tailwind")) {
    return <SiTailwindcss className="text-cyan-400" />;
  }
  // TypeScript
  if (techLower.includes("typescript")) {
    return <SiTypescript className="text-blue-500" />;
  }
  // JavaScript
  if (techLower.includes("javascript")) {
    return <SiJavascript className="text-yellow-400" />;
  }
  // Python
  if (techLower.includes("python")) {
    return <SiPython className="text-blue-400" />;
  }
  // Next.js
  if (techLower.includes("next")) {
    return <SiNextdotjs className="text-slate-100" />;
  }
  // Vue
  if (techLower.includes("vue")) {
    return <SiVuedotjs className="text-green-500" />;
  }
  // Vite
  if (techLower.includes("vite")) {
    return <SiVite className="text-yellow-500" />;
  }
  // Angular
  if (techLower.includes("angular")) {
    return <SiAngular className="text-red-500" />;
  }
  // Django
  if (techLower.includes("django")) {
    return <SiDjango className="text-green-700" />;
  }
  // Flask
  if (techLower.includes("flask")) {
    return <SiFlask className="text-slate-300" />;
  }
  // PostgreSQL
  if (techLower.includes("postgresql") || techLower.includes("postgres")) {
    return <SiPostgresql className="text-blue-400" />;
  }
  // MySQL
  if (techLower.includes("mysql")) {
    return <SiMysql className="text-blue-500" />;
  }
  // Firebase
  if (techLower.includes("firebase")) {
    return <SiFirebase className="text-orange-400" />;
  }
  // AWS
  if (techLower.includes("aws")) {
    return <SiAmazon className="text-orange-400" />;
  }
  // Docker
  if (techLower.includes("docker")) {
    return <SiDocker className="text-blue-500" />;
  }
  // Git
  if (techLower.includes("git")) {
    return <SiGit className="text-orange-500" />;
  }
  // GraphQL
  if (techLower.includes("graphql")) {
    return <SiGraphql className="text-pink-500" />;
  }
  // Redux
  if (techLower.includes("redux")) {
    return <SiRedux className="text-purple-500" />;
  }
  // Zustand
  if (techLower.includes("zustand")) {
    return <GiBearHead className="text-amber-700" />;
  }
  // OCR
  if (techLower.includes("ocr")) {
    return <TbEye className="text-blue-400" />;
  }
  // NLP
  if (techLower.includes("nlp")) {
    return <TbBrain className="text-purple-400" />;
  }
  // Framer Motion
  if (techLower.includes("framer")) {
    return <SiFramer className="text-pink-500" />;
  }

  // Default icon
  return <FaGem className="text-purple-400" />;
};

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
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-tektur font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p
            title={project.description}
            className="text-sm text-slate-400 font-poppins leading-relaxed line-clamp-2 flex-shrink-0 cursor-help"
          >
            {project.description}
          </p>

          {/* Technologies with Icons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-medium font-tektur bg-slate-900/50 text-cyan-400 rounded-lg border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all flex items-center gap-1.5"
              >
                <span className="text-base">{getTechIcon(tech)}</span>
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="flex items-center justify-center gap-8 pt-4 border-t border-slate-800 mt-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all duration-300 group/link"
            >
              <Github
                size={20}
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
                  size={20}
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
