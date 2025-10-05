import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Title from "../components/Title";
import { projectsData } from "../utils/projects.data";
import ProjectsCard from "../components/ProjectsCard";

const AllProjects: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "fullstack">(
    "all"
  );

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(filter)
            : project.category === filter
        );

  const filterOptions: {
    value: "all" | "web" | "mobile" | "fullstack";
    label: string;
  }[] = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Apps" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "fullstack", label: "Full Stack" },
  ];

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="w-[80%] mx-auto mb-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-neon-cyan transition-colors font-tektur"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      <section className="p-2 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14">
        <Title title="All Projects - My Development Journey" />

        {/* Project Stats */}
        <div className="w-[80%] mx-auto text-center mb-8">
          <p className="text-slate-400 font-tektur text-lg">
            These {projectsData.length} projects reflect my passion for learning
            and commitment to web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 w-[80%] mx-auto">
          {filterOptions.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-6 py-3 rounded-2xl font-tektur text-sm transition-all duration-300 ${
                filter === value
                  ? "bg-neon-purple text-white shadow-[0_0_15px_rgba(126,45,232,0.5)]"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid - All Projects */}
        <div className="w-[80%] p-10 mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectsCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="w-[80%] mx-auto text-center mt-12 p-8 border border-slate-800 rounded-2xl bg-slate-900/30">
          <h3 className="text-xl font-tektur font-medium bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent mb-4">
            Want to see more?
          </h3>
          <p className="text-slate-400 font-tektur mb-6">
            Check out my GitHub for more repositories, contributions, and
            experimental projects.
          </p>
          <a
            href="https://github.com/Adrian9502"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors font-tektur"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            Visit My GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
