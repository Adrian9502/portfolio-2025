import React from "react";
import { useEffect, useState } from "react";

// Helper function to generate random star positions
const generateBoxShadows = (n: number): string => {
  const shadows = Array.from({ length: n }, () => {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    return `${x}px ${y}px #FFF`;
  });
  return shadows.join(", ");
};

interface StarryBackgroundProps {
  children: React.ReactNode;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({ children }) => {
  const [stars, setStars] = useState({
    small: "",
    medium: "",
    big: "",
  });

  useEffect(() => {
    setStars({
      small: generateBoxShadows(700),
      medium: generateBoxShadows(200),
      big: generateBoxShadows(100),
    });
  }, []);

  return (
    <div className="starry-container h-auto">
      <div className="stars" style={{ boxShadow: stars.small }}></div>
      <div className="stars2" style={{ boxShadow: stars.medium }}></div>
      <div className="stars3" style={{ boxShadow: stars.big }}></div>
      {children}
      <style>{`
        .starry-container {
          background: radial-gradient(
            ellipse at bottom,
            black 0%,
            #020618 100%
          );
          overflow: hidden;
          position: relative;
        }

        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .stars {
          width: 1px;
          height: 1px;
          background: transparent;
          animation: animStar 50s linear infinite;
        }

        .stars:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${stars.small};
        }

        .stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          animation: animStar 100s linear infinite;
        }

        .stars2:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${stars.medium};
        }

        .stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          animation: animStar 150s linear infinite;
        }

        .stars3:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${stars.big};
        }

        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </div>
  );
};

export default StarryBackground;
