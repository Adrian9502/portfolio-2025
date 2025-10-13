import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, Award } from "lucide-react";
import { Certification } from "../utils/certifications.data";

interface CertificationModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({
  certification,
  isOpen,
  onClose,
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!certification) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-slate-950 border border-slate-800 rounded-xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 p-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-200"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="p-4 sm:p-6 space-y-4">
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg border border-slate-800">
                <img
                  src={certification.imageUrl}
                  alt={certification.title}
                  className="w-full h-auto object-contain bg-slate-900/30 max-h-[300px]"
                />
              </div>

              {/* Certificate Details */}
              <div className="space-y-4">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-tektur font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent leading-tight">
                  {certification.title}
                </h2>

                {/* Issuer */}
                <div className="flex items-center gap-2 text-slate-300">
                  <Award className="text-neon-purple flex-shrink-0" size={18} />
                  <p className="text-sm sm:text-base font-poppins">
                    Issued by{" "}
                    <span className="font-semibold text-neon-cyan">
                      {certification.issuer}
                    </span>
                  </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-slate-400 font-poppins">
                  <Calendar
                    className="text-neon-cyan flex-shrink-0"
                    size={18}
                  />
                  <span className="text-sm">
                    Completed on {certification.date}
                  </span>
                </div>

                {/* Credential ID */}
                {certification.credentialId && (
                  <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <p className="text-xs sm:text-sm text-slate-400 font-poppins break-all">
                      <span className="text-slate-500">Credential ID: </span>
                      <span className="text-slate-300 font-mono">
                        {certification.credentialId}
                      </span>
                    </p>
                  </div>
                )}

                {/* View Credential Button */}
                {certification.credentialUrl && (
                  <div className="flex justify-center pt-2">
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r  from-neon-blue to-neon-purple rounded-lg font-tektur font-medium text-sm text-white transition-all duration-200  hover:scale-105"
                    >
                      <ExternalLink
                        className="group-hover:translate-x-0.5 transition-transform"
                        size={16}
                      />
                      <span>View Credential</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificationModal;
