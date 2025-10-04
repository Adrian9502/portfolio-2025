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
      <div className="flex items-start gap-4">
        <img
          src={certification.imageUrl}
          alt={certification.issuer}
          className="w-16 h-16 rounded-lg object-cover"
        />

        <div className="flex-1 space-y-2">
          <h3 className="font-tektur font-medium text-lg bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            {certification.title}
          </h3>

          <p className="text-slate-300 font-tektur text-sm">
            {certification.issuer}
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Calendar size={14} />
            {certification.date}
          </div>

          <div className="flex flex-wrap gap-1">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-slate-800 text-neon-cyan rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-neon-cyan transition-colors mt-2"
            >
              <ExternalLink size={14} />
              View Credential
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CertificationCard;
