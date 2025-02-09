const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <div className="grid grid-cols-2 w-full h-full bg-slate-950 gap-2 p-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-1 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        >
          <div
            className="w-5 h-5 mb-1" // Reduced from w-16 h-16
            dangerouslySetInnerHTML={{ __html: skill.svg }}
          />
          <span className="text-xs font-medium text-white">{skill.text}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
