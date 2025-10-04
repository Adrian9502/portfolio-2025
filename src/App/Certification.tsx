import React from "react";
import Title from "../components/Title";
import CertificationCard from "../components/CertificationCard";
import { certificationsData } from "../utils/certifications.data";

const Certification: React.FC = () => {
  return (
    <section
      id="Certification"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 "
    >
      <Title title="My professional certifications and achievements." />

      {/* Certifications Grid */}
      <div className="w-[80%] mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {certificationsData.map((certification, index) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Certification;
