import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import CertificationCard from "../components/CertificationCard";
import CertificationModal from "../components/CertificationModal";
import {
  certificationsData,
  Certification,
} from "../utils/certifications.data";
import { ArrowRight, Award } from "lucide-react";
import * as motion from "motion/react-client";
import { staggerContainer, cardEntrance } from "../../utils/spaceAnimations";
import "../styles/projectsButton.css";
import { useComponentPerformance } from "../hooks/useComponentPerformance";
const CertificationPreview: React.FC = () => {
  useComponentPerformance("CertificationPreview");
  const navigate = useNavigate();
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get only the first 4 certifications
  const displayCertifications = certificationsData.slice(0, 4);

  const handleViewAll = () => {
    // Save current scroll position before navigating
    sessionStorage.setItem("certScrollPosition", window.scrollY.toString());
    navigate("/certifications");
  };

  const handleCardClick = (certification: Certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCertification(null), 300);
  };

  return (
    <>
      <section
        id="Certification"
        className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 relative"
      >
        {/* Add floating particles */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-neon-purple rounded-full shadow-[0_0_10px_2px_#7e2de8]"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_15px_2px_#06b6d4]"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <Title title="Milestones that mark my growth" />

        {/* Certifications Grid with animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-[80%] mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {displayCertifications.map((certification, index) => (
            <motion.div key={certification.id} variants={cardEntrance}>
              <CertificationCard
                certification={certification}
                index={index}
                onClick={() => handleCardClick(certification)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4"
        >
          <p className="text-slate-400 font-tektur text-center max-w-md text-sm sm:text-base">
            I've earned {certificationsData.length} certifications from top
            platforms, expanding my knowledge across various domains.
          </p>

          <motion.button
            onClick={handleViewAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="futuristic-button"
          >
            <div className="futuristic-button-content">
              <Award
                size={20}
                className="button-icon-left transition-transform flex-shrink-0"
              />
              <span>View All Certifications</span>
              <ArrowRight
                size={20}
                className="button-icon-right transition-transform flex-shrink-0"
              />
            </div>
          </motion.button>
        </motion.div>
      </section>

      {/* Modal */}
      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default CertificationPreview;
