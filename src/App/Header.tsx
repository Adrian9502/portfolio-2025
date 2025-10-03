import React, { useState, useEffect, useRef } from "react";
import { animate } from "motion";
import "../styles/header.css";
import SocialIcons from "../components/SocialIcons";
import socialLinks from "../utils/socialLinks";
import navLinks from "../utils/navLinks";

interface SocialLink {
  Icon: React.ElementType;
  link: string;
  label: string;
}

function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      animate(
        mobileMenuRef.current,
        {
          opacity: [0, 1],
          height: ["0px", "auto"],
        },
        { duration: 0.3 }
      );

      menuItemsRef.current.forEach((item, index) => {
        if (item) {
          animate(
            item,
            {
              opacity: [0, 1],
              y: [20, 0],
            },
            {
              delay: index * 0.1,
              duration: 0.3,
            }
          );
        }
      });
    }
  }, [isOpen]);
  // function for blurring the not selected nav link
  const getBlurClass = (index: number): string => {
    if (hoveredIndex === null) return "";
    return hoveredIndex !== index
      ? "blur-[2px]"
      : "border-b text-neon-cyan drop-shadow-[0_0_9px_#7e2de8] ";
  };

  return (
    <header className="fixed z-50 top-0 right-2 left-2">
      <div
        className={`px-3 py-2 z-50  flex items-center justify-start lg:justify-center uppercase rounded-xl ${
          isOpen ? "border-slate-700 " : "border-slate-700"
        } transition-colors duration-200 font-semibold`}
      >
        {/* Hamburger Button */}
        <button
          className={`lg:hidden rounded-lg  border transition duration-200 z-50 p-3 ${
            isOpen
              ? "bg-transparent border-transparent"
              : "bg-slate-950 border-slate-700"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-gray-100 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-100 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-100 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden z-50 p-2 uppercase rounded-2xl bg-slate-950/80 backdrop-blur-xs border-trail lg:flex md:justify-center items-center justify-center space-x-6">
          {/* Logo */}
          <a
            href="/"
            className="px-3 transition-all duration-300 border-r-2 border-slate-900"
          >
            <img src="/logo.png" alt="coding logo" className="w-12 h-12" />
          </a>

          {/* Navigation Links */}
          <div className="px-3 flex space-x-2">
            {navLinks.map(({ href, label }, index) => (
              <a
                key={href}
                href={href}
                className={`px-2 py-1 text-gray-100 text-sm cursor-pointer font-orbitron transition-all duration-200 ${getBlurClass(
                  index
                )}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="px-2 border-l-2 border-slate-900 flex items-center gap-2 justify-center transition-all duration-200">
            {socialLinks.map(({ Icon, link, label }: SocialLink) => (
              <SocialIcons
                key={label}
                iconColor="hover:drop-shadow-[0_0_10px_#2f46fa] text-neon-cyan/90"
                styles="hover:bg-blue-800/70 bg-blue-700/30 rounded-lg"
                Icon={Icon}
                link={link}
                label={label}
              />
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-0 left-0 w-full bg-slate-950/30 backdrop-blur-sm rounded-2xl lg:hidden"
          >
            {/* Social icons */}
            <div className="px-1 mt-3 flex items-center gap-3 justify-center transition-all duration-300">
              <a href="/" className="px-3 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="coding logo"
                  className="w-7 h-7 drop-shadow-[0_0_3px_#2f46fa]"
                />
              </a>
              {socialLinks.map(({ Icon, link, label }: SocialLink) => (
                <SocialIcons
                  styles="hover:bg-blue-800/70 bg-blue-700/20 rounded-sm"
                  iconColor="text-neon-cyan"
                  key={label}
                  Icon={Icon}
                  link={link}
                  label={label}
                />
              ))}
            </div>
            <div className="flex flex-col items-center p-4">
              {navLinks.map(({ href, label }, index) => (
                <a
                  href={href}
                  key={href}
                  ref={(el) => {
                    menuItemsRef.current[index] = el;
                  }}
                  className="p-2 w-full text-center text-white border-b border-white/30 text-sm font-orbitron hover:bg-white/10 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
