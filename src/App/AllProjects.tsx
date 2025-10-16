import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";
import Title from "../components/Title";
import { projectsData } from "../utils/projects.data";
import ProjectsCard from "../components/ProjectsCard";
import * as motion from "motion/react-client";
import { staggerContainer, cardEntrance } from "../../utils/spaceAnimations";

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

  const handleBack = () => {
    const scrollPosition = sessionStorage.getItem("homeScrollPosition");
    navigate("/");
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem("homeScrollPosition");
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return (
    <div className="min-h-screen pt-20">
      {/* Floating particles */}
      <motion.div
        className="absolute top-40 left-20 w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_2px_#06b6d4]"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_15px_2px_#7e2de8]"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Fixed Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-4 z-50"
      >
        <motion.button
          onClick={handleBack}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-slate-950/80 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300 font-tektur"
        >
          <ArrowLeft size={20} />
          Back to Home
        </motion.button>
      </motion.div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 p-3 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(126,45,232,0.5)] transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}

      <section className="p-2 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14">
        <Title title="All Projects: Every mission in my orbit." />

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[80%] mx-auto text-center mb-8 z-10"
        >
          <p className="text-slate-400 font-orbitron text-md lg:text-lg">
            These {projectsData.length} projects reflect my passion for learning
            and building meaningful solutions.
          </p>
        </motion.div>

        {/* Filter Buttons with Counts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap z-10 justify-center gap-4 mb-8 w-[80%] mx-auto"
        >
          {filterOptions.map(({ value, label }, index) => {
            const count = getCategoryCount(value);
            return (
              <motion.button
                key={value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(value)}
                className={`px-6 py-3 rounded-2xl font-orbitron text-xs lg:text-sm transition-all duration-300 flex items-center gap-2 ${
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
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid with Animation */}
        <motion.div
          key={filter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl md:px-4 py-6 px-10 lg:px-10 mx-auto grid gap-6 sm:gap-8 md:gap-10 z-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} variants={cardEntrance}>
              <ProjectsCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-[80%] mx-auto text-center mt-8"
        >
          <p className="text-slate-400 font-orbitron text-sm">
            Showing {filteredProjects.length} of {projectsData.length} projects
            {filter !== "all" && (
              <span className="text-neon-cyan">
                {" "}
                in {filterOptions.find((opt) => opt.value === filter)?.label}
              </span>
            )}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AllProjects;
