import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { personalInfo } from "@/data/portfolio";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_zzsx16t",
        "template_1cgm90h",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.company,
          message: formData.message,
        },
        "wIDcvGIjLbGH0vWEO"
      )
      .then(
        () => {
          toast.success("Message sent! I'll get back to you soon.");
          setFormData({ name: "", email: "", company: "", message: "" });
        },
        () => {
          toast.error("Failed to send. Please email me directly.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A]">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-[#3B82F6] text-sm font-[600] uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-[700] text-[#F1F5F9] mt-2">
            Let's work together
          </h2>
          <p className="text-[#94A3B8] mt-3 max-w-xl mx-auto text-base font-light">
            Open to full-time roles, contract work, and interesting collaborations — in Nigeria and internationally.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="flex flex-col gap-6 animate-slide-up opacity-0">
            <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#334155]">
              <h3 className="text-[#F1F5F9] font-[600] text-base mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-[#94A3B8] hover:text-[#F1F5F9] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6]/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">{personalInfo.email}</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-[#94A3B8] hover:text-[#F1F5F9] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6]/20 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="text-sm">{personalInfo.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-[#94A3B8]">
                  <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm">Nigeria · Open to Remote</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-[#1E293B] rounded-2xl p-6 border border-[#334155]">
              <h3 className="text-[#F1F5F9] font-[600] text-base mb-4">Find me online</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0F172A] border border-[#334155] text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[#3B82F6] transition-all text-sm font-[500]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={personalInfo.gitlab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0F172A] border border-[#334155] text-[#94A3B8] hover:text-[#FC6D26] hover:border-[#FC6D26]/60 transition-all text-sm font-[500]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                  </svg>
                  GitLab
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0F172A] border border-[#334155] text-[#94A3B8] hover:text-[#F1F5F9] hover:border-[#3B82F6] transition-all text-sm font-[500]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="animate-slide-up opacity-0 animate-delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-[#1E293B] rounded-2xl p-6 border border-[#334155] flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs text-[#94A3B8] font-[500] mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-[#F1F5F9] text-sm placeholder-[#475569] focus:border-[#3B82F6] focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-[#94A3B8] font-[500] mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-[#F1F5F9] text-sm placeholder-[#475569] focus:border-[#3B82F6] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs text-[#94A3B8] font-[500] mb-2 uppercase tracking-wider">
                  Company / Role (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-[#F1F5F9] text-sm placeholder-[#475569] focus:border-[#3B82F6] focus:outline-none transition-colors"
                  placeholder="Acme Inc. · Engineering Manager"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-[#94A3B8] font-[500] mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#0F172A] border border-[#334155] text-[#F1F5F9] text-sm placeholder-[#475569] focus:border-[#3B82F6] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about the role or project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#3B82F6] text-white font-[600] text-sm hover:bg-[#60A5FA] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </section>
  );
};

export default Contact;
