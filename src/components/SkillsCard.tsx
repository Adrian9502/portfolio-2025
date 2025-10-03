import React from "react";
import "../styles/skillcard.css";
interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
}

const SkillsCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="border-2 box p-4 md:p-5 rounded-lg">
      <div
        className="sm:w-13 sm:h-13 w-10 h-10 mb-2 bg-slate-700 border border-slate-800 rounded-full p-2 "
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      {/* text and description */}
      <div className="flex flex-col gap-1 sm:gap-2">
        <div>
          <h3 className="text-sm sm:text-base bg-gradient-to-r from-neon-pink via-neon-blue to-neon-pink bg-clip-text text-transparent font-tektur  font-medium tracking-widest">
            {title}
          </h3>
        </div>
        <div className="text-xs  text-slate-400 font-tektur tracking-widest">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
