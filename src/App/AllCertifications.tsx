import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";
import Title from "../components/Title";
import {
  certificationsData,
  Certification,
} from "../utils/certifications.data";
import CertificationCard from "../components/CertificationCard";
import CertificationModal from "../components/CertificationModal";
import * as motion from "motion/react-client";
import { staggerContainer, cardEntrance } from "../../utils/spaceAnimations";

const AllCertifications: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"all" | "linkedin" | "coursera">("all");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    const scrollPosition = sessionStorage.getItem("certScrollPosition");
    navigate("/");
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem("certScrollPosition");
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCardClick = (certification: Certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertification(null), 300);
  };

  const filteredCertifications =
    filter === "all"
      ? certificationsData
      : certificationsData.filter(
          (cert) => cert.issuer.toLowerCase() === filter
        );

  const getCategoryCount = (
    category: "all" | "linkedin" | "coursera"
  ): number => {
    if (category === "all") return certificationsData.length;
    return certificationsData.filter(
      (cert) => cert.issuer.toLowerCase() === category
    ).length;
  };

  const filterOptions: {
    value: "all" | "linkedin" | "coursera";
    label: string;
  }[] = [
    { value: "all", label: "All Certifications" },
    { value: "linkedin", label: "LinkedIn Learning" },
    { value: "coursera", label: "Coursera" },
  ];

  return (
    <>
      <div className="min-h-screen pt-20">
        {/* Floating particles */}
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-neon-purple rounded-full shadow-[0_0_10px_2px_#7e2de8]"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_15px_2px_#06b6d4]"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
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
          <Title title="All Certifications: Every star that lights my path" />

          {/* Certification Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[80%] mx-auto text-center mb-8 z-10"
          >
            <p className="text-slate-400 font-tektur text-md lg:text-lg">
              These {certificationsData.length} certifications showcase my
              commitment to continuous learning and professional development.
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
                  className={`px-6 py-3 rounded-2xl font-tektur text-xs lg:text-sm transition-all duration-300 flex items-center gap-2 ${
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

          {/* Certifications Grid with Animation */}
          <motion.div
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-[80%] mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
          >
            {filteredCertifications.map((certification, index) => (
              <motion.div key={certification.id} variants={cardEntrance}>
                <CertificationCard
                  certification={certification}
                  index={index}
                  onClick={() => handleCardClick(certification)}
                />
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
            <p className="text-slate-400 font-tektur text-sm">
              Showing {filteredCertifications.length} of{" "}
              {certificationsData.length} certifications
              {filter !== "all" && (
                <span className="text-neon-cyan">
                  {" "}
                  from{" "}
                  {filterOptions.find((opt) => opt.value === filter)?.label}
                </span>
              )}
            </p>
          </motion.div>

          {/* Learning Platforms Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-[80%] mx-auto text-center mt-12 p-8 border border-slate-800 rounded-2xl bg-slate-900/30"
          >
            <h3 className="text-xl font-tektur font-medium bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent mb-4">
              Continuous Learning
            </h3>
            <p className="text-slate-400 font-tektur mb-6">
              I actively pursue certifications to stay updated with the latest
              technologies and best practices in software development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/john-adrian-bonto-a65704283/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors font-tektur"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Modal */}
      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default AllCertifications;
