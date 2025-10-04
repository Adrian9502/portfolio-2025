import React, { useState } from "react";
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../utils/projects.data";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "fullstack">(
    "all"
  );

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const filterOptions = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Apps" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "fullstack", label: "Full Stack" },
  ];

  return (
    <section id="Projects" className="py-10 sm:p-14">
      <Title title="Check out my latest projects and creative work." />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 w-[80%] mx-auto">
        {filterOptions.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value as any)}
            className={`px-4 py-2 rounded-full font-tektur text-sm transition-all duration-300 ${
              filter === value
                ? "bg-neon-purple text-white shadow-[0_0_15px_rgba(126,45,232,0.5)]"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-[80%] mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
