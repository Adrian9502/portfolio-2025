import React, { useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle, Clock } from "lucide-react";
import * as motion from "motion/react-client";
import { animationVariants } from "../utils/animations";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "success" | "error" | "cooldown";
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });
  const [cooldownTime, setCooldownTime] = useState(0);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Cooldown duration in seconds
  const COOLDOWN_DURATION = 60; // 1 minute

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if cooldown is active
    if (cooldownTime > 0) {
      setFormStatus({
        type: "cooldown",
        message: `Please wait ${cooldownTime} seconds before sending another message.`,
      });
      return;
    }

    // Verify reCAPTCHA
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setFormStatus({
        type: "error",
        message: "Please complete the reCAPTCHA verification.",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "idle", message: "" });

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      // Template parameters matching your EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        "g-recaptcha-response": recaptchaValue,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success state
      setFormStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });

      // Reset reCAPTCHA
      recaptchaRef.current?.reset();

      // Start cooldown
      startCooldown();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);

      // Clear status message after 5 seconds
      setTimeout(() => {
        if (formStatus.type !== "cooldown") {
          setFormStatus({ type: "idle", message: "" });
        }
      }, 5000);
    }
  };

  // Cooldown timer
  const startCooldown = () => {
    setCooldownTime(COOLDOWN_DURATION);

    const timer = setInterval(() => {
      setCooldownTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setFormStatus({ type: "idle", message: "" });
          return 0;
        }
        return prev - 1;
      });
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
      className="space-y-6 relative z-20"
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
            disabled={isSubmitting || cooldownTime > 0}
            minLength={2}
            maxLength={50}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-neon-cyan focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative z-20"
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
            disabled={isSubmitting || cooldownTime > 0}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-neon-cyan focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative z-20"
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
          disabled={isSubmitting || cooldownTime > 0}
          rows={6}
          minLength={10}
          maxLength={1000}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-neon-cyan focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed relative z-20"
        />
        <p className="text-xs text-slate-400 mt-1 font-tektur">
          {formData.message.length}/1000 characters
        </p>
      </div>

      {/* reCAPTCHA */}
      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          theme="dark"
        />
      </div>

      {/* Status Message */}
      {formStatus.type !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 p-4 rounded-lg relative z-20 ${
            formStatus.type === "success"
              ? "bg-green-500/10 border border-green-500/30 text-green-400"
              : formStatus.type === "cooldown"
              ? "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400"
              : "bg-red-500/10 border border-red-500/30 text-red-400"
          }`}
        >
          {formStatus.type === "success" ? (
            <CheckCircle size={20} />
          ) : formStatus.type === "cooldown" ? (
            <Clock size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span className="font-tektur text-sm">{formStatus.message}</span>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || cooldownTime > 0}
        className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white py-3 px-6 rounded-lg font-tektur font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(126,45,232,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative z-20"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : cooldownTime > 0 ? (
          <>
            <Clock size={18} />
            Wait {cooldownTime}s
          </>
        ) : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;
