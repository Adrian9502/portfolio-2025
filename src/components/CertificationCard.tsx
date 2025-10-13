import React from "react";
import { ExternalLink, Calendar } from "lucide-react";
import Card from "./Card";
import { Certification } from "../utils/certifications.data";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  index,
}) => {
  return (
    <Card delay={index * 0.1} hoverable>
      <div className="flex flex-col w-full items-start gap-4">
        <img
          src={certification.imageUrl}
          alt={certification.issuer}
          className="w-full pointer-events-none rounded-md h-40 object-contain lg:object-cover"
        />

        <div className="flex-1 space-y-3">
          <h3 className="font-tektur font-medium text-sm md:text-md lg:text-base bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent line-clamp-2">
            {certification.title}
          </h3>

          <p className="text-slate-300 italic font-poppins text-xs">
            issued by {certification.issuer}
          </p>

          <div className="flex items-center font-poppins gap-2 text-xs text-slate-400">
            <Calendar size={14} />
            {certification.date}
          </div>
        </div>
        <div className="flex items-center w-full justify-center  border-t border-slate-800 ">
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-slate-300  hover:text-cyan-400 transition-all duration-300 group/link rounded-lg mt-2 p-1"
            >
              <ExternalLink
                className="group-hover/link:scale-110 transition-transform"
                size={14}
              />
              View Credential
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CertificationCard;
