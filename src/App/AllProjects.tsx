import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";
import Title from "../components/Title";
import { projectsData } from "../utils/projects.data";
import ProjectsCard from "../components/ProjectsCard";

const AllProjects: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<
    "all" | "web" | "mobile" | "fullstack" | "desktop"
  >("all");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(filter)
            : project.category === filter
        );

  // Function to get count for each category
  const getCategoryCount = (
    category: "all" | "web" | "mobile" | "fullstack" | "desktop"
  ): number => {
    if (category === "all") return projectsData.length;

    return projectsData.filter((project) =>
      Array.isArray(project.category)
        ? project.category.includes(category)
        : project.category === category
    ).length;
  };

  const filterOptions: {
    value: "all" | "web" | "mobile" | "fullstack" | "desktop";
    label: string;
  }[] = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Apps" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "fullstack", label: "Full Stack" },
    { value: "desktop", label: "Desktop Apps" },
  ];

  const handleBack = () => {
    navigate("/");

    // Restore scroll position after navigation
    setTimeout(() => {
      const savedScrollPosition = sessionStorage.getItem("homeScrollPosition");
      if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
        sessionStorage.removeItem("homeScrollPosition");
      }
    }, 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Fixed Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-950/80 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300 font-tektur"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(126,45,232,0.5)] transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <section className="p-2 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14">
        <Title title="All Projects: Every mission in my orbit" />

        {/* Project Stats */}
        <div className="w-[80%] mx-auto text-center mb-8">
          <p className="text-slate-400 font-orbitron text-lg">
            These {projectsData.length} projects reflect my passion for learning
            and commitment to web development.
          </p>
        </div>

        {/* Filter Buttons with Counts */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 w-[80%] mx-auto">
          {filterOptions.map(({ value, label }) => {
            const count = getCategoryCount(value);
            return (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`px-6 py-3 rounded-2xl font-orbitron text-sm transition-all duration-300 flex items-center gap-2 ${
                  filter === value
                    ? "bg-neon-purple text-white shadow-[0_0_15px_rgba(126,45,232,0.5)]"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                <span>{label}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    filter === value
                      ? "bg-white/20 text-white"
                      : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 

      <div className="w-full max-w-7xl md:px-4 py-6 px-10  lg:px-10 mx-auto grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayProjects.slice(0, 3).map((project, index) => (
          <ProjectsCard key={project.id} project={project} index={index} />
        ))}
      </div>
*/}
        {/* Projects Grid - All Projects */}
        <div className="w-full max-w-7xl md:px-4 py-6 px-10  lg:px-10 mx-auto grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectsCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Results Summary */}
        <div className="w-[80%] mx-auto text-center mt-8">
          <p className="text-slate-400 font-orbitron text-sm">
            Showing {filteredProjects.length} of {projectsData.length} projects
            {filter !== "all" && (
              <span className="text-neon-cyan">
                {" "}
                in {filterOptions.find((opt) => opt.value === filter)?.label}
              </span>
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
