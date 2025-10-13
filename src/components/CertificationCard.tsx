import React from "react";
import { Calendar } from "lucide-react";
import Card from "./Card";
import { Certification } from "../utils/certifications.data";

interface CertificationCardProps {
  certification: Certification;
  index: number;
  onClick: () => void;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  index,
  onClick,
}) => {
  return (
    <Card delay={index * 0.1} hoverable>
      <div
        onClick={onClick}
        className="flex flex-col w-full items-start gap-4 cursor-pointer group/card"
      >
        <div className="relative overflow-hidden rounded-md w-full">
          <img
            src={certification.imageUrl}
            alt={certification.issuer}
            className="w-full pointer-events-none rounded-md h-40 object-contain lg:object-cover transition-transform duration-500 group-hover/card:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-neon-cyan/50 rounded-lg text-neon-cyan text-sm font-tektur">
              Click to view details
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <h3 className="font-tektur font-medium text-sm md:text-md lg:text-base bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent line-clamp-2 group-hover/card:line-clamp-2 transition-all">
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
      </div>
    </Card>
  );
};

export default CertificationCard;
