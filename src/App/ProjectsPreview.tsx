import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { projectsData } from "../utils/projects.data";
import ProjectsCard from "../components/ProjectsCard";
import { ArrowRight, Eye } from "lucide-react";
import "../styles/projectsButton.css";

const ProjectsPreview: React.FC = () => {
  const navigate = useNavigate();

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
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32"
    >
      <Title title="Here's a glimpse of my projects." />

      {/* Projects Grid - Only 3 projects */}
      <div className="w-full max-w-7xl md:px-4 py-6 px-10  md:border-red-500 lg:px-10 mx-auto grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayProjects.slice(0, 3).map((project, index) => (
          <ProjectsCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
        <p className="text-slate-400 font-tektur text-center max-w-md text-sm sm:text-base">
          I've built {projectsData.length}+ projects exploring different
          technologies and ideas — you can explore all of them below.
        </p>

        <button onClick={handleViewAll} className="futuristic-button">
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
        </button>
      </div>
    </section>
  );
};

export default ProjectsPreview;
