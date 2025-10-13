import React from "react";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import SocialIcons from "../components/SocialIcons";
import socialLinks from "../utils/socialLinks";
import * as motion from "motion/react-client";
import { animationVariants } from "../utils/animations";

interface SocialLink {
  Icon: React.ElementType;
  link: string;
  label: string;
}

const Contact: React.FC = () => {
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
    {
      icon: Phone,
      label: "Phone",
      value: "+63 XXX XXX XXXX",
      href: "tel:+63XXXXXXXXX",
    },
  ];

  return (
    <section
      id="Contact"
      className="p-2 mt-10 py-10 flex-col gap-8 overflow-hidden flex items-center justify-center sm:p-14 mb-32 "
    >
      <Title title="Let’s collaborate and build something stellar" />

      <div className="w-[80%] mx-auto grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariants.fadeInUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-tektur font-medium bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent mb-4">
              Get In Touch
            </h3>
            <p className="text-slate-300 font-tektur text-lg leading-relaxed">
              {/* I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about web development. Feel free
              to reach out! */}
              I'm always open to new missions, collaborations, or just chatting
              about building things that go beyond the ordinary. Let’s connect
              and launch ideas together.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
              <motion.div
                key={label}
                initial="hidden"
                whileInView="visible"
                variants={animationVariants.fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Icon className="text-neon-cyan" size={20} />
                </div>
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
            initial="hidden"
            whileInView="visible"
            variants={animationVariants.fadeInUp}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6"
          >
            <p className="text-slate-300 font-tektur mb-4">Follow me on:</p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, link, label }: SocialLink) => (
                <SocialIcons
                  key={label}
                  styles="hover:bg-slate-700 bg-slate-800 rounded-lg p-3"
                  iconColor="text-neon-cyan hover:text-white"
                  Icon={Icon}
                  link={link}
                  label={label}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
