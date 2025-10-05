import React from "react";
import "../styles/skillcard.css";
import Card from "./Card";

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
}

const SkillsCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <Card>
      <div
        className="sm:w-13 sm:h-13 w-10 h-10 mb-2 bg-slate-600 border border-slate-800 rounded-full p-2"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      {/* text and description */}
      <div className="flex flex-col gap-1 sm:gap-2">
        <div>
          <h3 className="text-sm sm:text-base bg-gradient-to-r from-neon-cyan via-neon-purple  to-neon-purple bg-clip-text text-transparent font-tektur font-medium tracking-widest ">
            {title}
          </h3>
        </div>
        <div className="text-xs hover:text-slate-300 duration-300 md:text-sm text-slate-400 font-poppins ">
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default SkillsCard;
