import React, { useState, useEffect, useRef } from "react";
import { animate } from "motion";
import "../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  return (
    <header className="z-50 fixed flex top-2 right-2 left-2 ">
      <div
        className={`px-3.5 bg-black/50 py-2 flex uppercase border ${
          isOpen ? "border-transparent" : "border-slate-500"
        } rounded-br-2xl rounded-tl-2xl justify-end transition-colors duration-200 font-semibold overflow-hidden items-center`}
      >
        {/* Hamburger Button */}
        <button
          className="md:hidden z-50 p-2"
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
        <div className="hidden md:flex md:justify-center items-center justify-end space-x-6">
          <a
            href="#About"
            className="p-2 text-gray-100 text-sm cursor-pointer rounded-tl-2xl rounded-br-2xl section0 font-orbitron"
          >
            About
          </a>
          <a
            href="#Skills"
            className="p-2 text-gray-100 text-sm cursor-pointer rounded-tl-2xl rounded-br-2xl section1 font-orbitron"
          >
            Skills
          </a>
          <a
            href="#Projects"
            className="p-2 text-gray-100 text-sm cursor-pointer rounded-tl-2xl rounded-br-2xl section2 font-orbitron"
          >
            Projects
          </a>
          <a
            href="#Certification"
            className="p-2  text-gray-100 text-sm cursor-pointer rounded-tl-2xl rounded-br-2xl section3 font-orbitron"
          >
            Certification
          </a>
          <a
            href="#Contact"
            className="p-2 text-gray-100 text-sm cursor-pointer rounded-tl-2xl rounded-br-2xl section4 font-orbitron"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-0 left-0 w-full bg-black/70 rounded-2xl md:hidden"
          >
            <div className="flex flex-col items-center p-4">
              {["About", "Skills", "Projects", "Certification", "Contact"].map(
                (item, index) => (
                  <a
                    href={`#${item}`}
                    key={item}
                    ref={(el) => {
                      menuItemsRef.current[index] = el;
                    }}
                    className={`p-2 w-full text-center text-white  border-b last:border-b-0 border-white/30 text-sm font-orbitron hover:bg-white/10 transition-colors section${index}`}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
