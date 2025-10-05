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
    navigate("/projects");
  };

  return (
    <section
      id="Projects"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32"
    >
      <Title title="Here's a glimpse of my projects." />

      {/* Projects Grid - Only 3 projects */}
      <div className="w-[80%] p-10 mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {displayProjects.slice(0, 3).map((project, index) => (
          <ProjectsCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <p className="text-slate-400 mb-4 font-tektur text-center max-w-md">
          I've built {projectsData.length}+ projects exploring different
          technologies and ideas — you can explore all of them below.
        </p>

        <button onClick={handleViewAll} className="futuristic-button">
          <div className="futuristic-button-content">
            <Eye size={20} className="button-icon-left transition-transform" />
            <span>View All Projects</span>
            <ArrowRight
              size={20}
              className="button-icon-right transition-transform"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default ProjectsPreview;
