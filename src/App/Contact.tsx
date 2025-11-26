import React from "react";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import { Mail, MapPin } from "lucide-react";
import SocialIcons from "../components/SocialIcons";
import socialLinks from "../utils/socialLinks";
import * as motion from "motion/react-client";
import { staggerContainer, slideInLeft } from "../../utils/spaceAnimations";
import { useComponentPerformance } from "../hooks/useComponentPerformance";
interface SocialLink {
  Icon: React.ElementType;
  link: string;
  label: string;
}

const Contact: React.FC = () => {
  useComponentPerformance("Contact");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bontojohnadrian@gmail.com",
      href: "mailto:bontojohnadrian@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Philippines",
      href: null,
    },
  ];

  return (
    <section
      id="Contact"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 relative"
    >
      {/* Add floating particles */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_2px_#06b6d4]"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_15px_2px_#7e2de8]"
        animate={{
          y: [0, 15, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <Title title="Let's collaborate and build something stellar" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[80%] mx-auto grid gap-8 lg:grid-cols-2"
      >
        {/* Contact Information */}
        <motion.div variants={slideInLeft} className="space-y-6">
          <div>
            <h3 className="text-2xl font-tektur font-medium bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent mb-4">
              Get In Touch
            </h3>
            <p className="text-slate-300 font-tektur text-lg leading-relaxed">
              I'm always open to new missions, collaborations, or just chatting
              about building things that go beyond the ordinary. Let's connect
              and launch ideas together.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="flex items-center gap-4"
              >
                <motion.div
                  className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="text-neon-cyan" size={20} />
                </motion.div>
                <div>
                  <p className="text-slate-400 text-sm font-tektur">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-slate-200 font-tektur hover:text-neon-cyan transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-200 font-tektur">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-6"
          >
            <p className="text-slate-300 font-tektur mb-4">Follow me on:</p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, link, label }: SocialLink, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05,
                    type: "spring",
                  }}
                >
                  <SocialIcons
                    styles="hover:bg-slate-700 bg-slate-800 rounded-lg p-3"
                    iconColor="text-neon-cyan hover:text-white"
                    Icon={Icon}
                    link={link}
                    label={label}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form - keep as is */}
        <div>
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
