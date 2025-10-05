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
    <div className="starry-container h-full">
      <div className="stars-wrapper">
        <div className="stars" style={{ boxShadow: stars.small }}></div>
        <div className="stars2" style={{ boxShadow: stars.medium }}></div>
        <div className="stars3" style={{ boxShadow: stars.big }}></div>
      </div>
      {children}
      <style>{`
        .starry-container {
          background: radial-gradient(
            ellipse at bottom,
            black 0%,
            #020618 100%
          );
          overflow-x: hidden;
          position: relative;
        }

        .stars-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          width: 100%;
          height: 200%;
          top: 0;
          left: 0;
        }

        .stars {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${stars.small};
          animation: animStar 50s linear infinite;
        }

        .stars:after {
          content: " ";
          position: absolute;
          top: 100vh;
          left: 0;
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: ${stars.small};
        }

        .stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${stars.medium};
          animation: animStar 100s linear infinite;
        }

        .stars2:after {
          content: " ";
          position: absolute;
          top: 100vh;
          left: 0;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${stars.medium};
        }

        .stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${stars.big};
          animation: animStar 150s linear infinite;
        }

        .stars3:after {
          content: " ";
          position: absolute;
          top: 100vh;
          left: 0;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${stars.big};
        }

        @keyframes animStar {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default StarryBackground;
