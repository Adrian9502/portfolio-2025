import React, { useState } from "react";
import { Send } from "lucide-react";
import * as motion from "motion/react-client";
import { animationVariants } from "../utils/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      variants={animationVariants.fadeInUp}
      transition={{ duration: 0.8, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-tektur text-slate-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-neon-cyan focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-tektur text-slate-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-neon-cyan focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-tektur text-slate-300 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-neon-cyan focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white py-3 px-6 rounded-lg font-tektur font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(126,45,232,0.5)] disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send size={18} />
      </button>
    </motion.form>
  );
};

export default ContactForm;
