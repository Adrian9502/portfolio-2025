import React from "react";
import Title from "../components/Title";
import { projectsData } from "../utils/projects.data";
import ProjectsCard from "../components/ProjectsCard";

const Projects: React.FC = () => {
  return (
    <section
      id="Projects"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 "
    >
      <Title title="Here’s a glimpse of my projects." />

      {/* Projects Grid */}
      <div className="w-[80%] p-10 mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectsCard key={project.id} project={project} index={index} />
        ))}

        {/* 
        “I’ve built 24+ projects exploring different technologies and ideas — you can explore all of them on my GitHub.”
         */}
      </div>
    </section>
  );
};

export default Projects;
