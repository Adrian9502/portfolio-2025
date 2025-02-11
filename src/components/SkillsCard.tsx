import React from "react";
import "../App/style.css";
interface SkillsCardProps {
  svg: string;
  text: string;
  description: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ svg, text, description }) => {
  return (
    <div className="border-2 box p-4 md:p-5  border-slate-900 rounded-lg">
      <div
        className="w-13 mb-2 bg-slate-800 border border-slate-700 rounded-full p-2 h-13"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {/* text and description */}
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-lg bg-gradient-to-r from-neon-pink via-neon-blue to-neon-pink bg-clip-text text-transparent font-tektur  font-medium tracking-widest">
            {text}
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
