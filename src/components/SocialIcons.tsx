import { FC } from "react";

interface SocialIconsProps {
  Icon: React.ElementType;
  link: string;
  label: string;
  styles: string;
  iconColor: string;
}

const SocialIcons: FC<SocialIconsProps> = ({
  Icon,
  link,
  label,
  styles,
  iconColor,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group"
    >
      <div className={`p-2 ${styles} transition duration-200`}>
        <Icon
          className={`transition-colors duration-300 ${iconColor}`}
          size={20}
        />
      </div>
    </a>
  );
};

export default SocialIcons;
