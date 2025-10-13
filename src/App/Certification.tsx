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
import "../styles/projectsButton.css";

const CertificationPreview: React.FC = () => {
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
        className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32"
      >
        <Title title="Milestones that mark my growth" />

        {/* Certifications Grid - Only 4 certifications */}
        <div className="w-[80%] mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayCertifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
              onClick={() => handleCardClick(certification)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
          <p className="text-slate-400 font-tektur text-center max-w-md text-sm sm:text-base">
            I've earned {certificationsData.length} certifications from top
            platforms, expanding my knowledge across various domains.
          </p>

          <button onClick={handleViewAll} className="futuristic-button">
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
          </button>
        </div>
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
