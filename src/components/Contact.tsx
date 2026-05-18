import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socialLinks = [
  {
    label: "www.instagram.com/adeniyi_drumz/",
    href: "https://www.instagram.com/adeniyi_drumz/",
    icon: Instagram,
  },
  {
    label: "linkedin.com/in/adeniyi-adekoya-5372b3178",
    href: "https://linkedin.com/in/adeniyi-adekoya-5372b3178",
    icon: Linkedin,
  },
  {
    label: "www.facebook.com/adeniyi.adekoya/",
    href: "https://www.facebook.com/adeniyi.adekoya/",
    icon: Facebook,
  },
  {
    label: "www.youtube.com/@adeniyidrumz",
    href: "https://www.youtube.com/@adeniyidrumz",
    icon: Youtube,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
          phone: formData.phone,
          message: formData.message,
        },
        "wIDcvGIjLbGH0vWEO"
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        () => {
          toast.error("Failed to send your message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <>
      <section id="contact" className="bg-white px-4 pb-24 pt-[132px] text-[#242424] sm:px-8 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className="text-[28px] font-medium uppercase leading-none tracking-normal">Contact Us</p>
            <h1 className="mt-5 text-[52px] font-bold leading-none tracking-normal sm:text-[64px]">
              We Can Work Together
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="mt-14">
            <div>
              <label htmlFor="name" className="block text-[18px] font-medium leading-none">
                Name:
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ayomiposi Adekanmbi Opeyemi"
                className="mt-2 h-[52px] w-full rounded border border-[#d9d9d9] bg-white px-4 text-[18px] text-[#242424] outline-none transition-colors placeholder:text-[#242424] focus:border-[#2587cf]"
                required
              />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-[56px]">
              <div>
                <label htmlFor="email" className="block text-[18px] font-medium leading-none">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 h-[52px] w-full rounded border border-[#d9d9d9] bg-white px-4 text-[18px] text-[#242424] outline-none transition-colors focus:border-[#2587cf]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[18px] font-medium leading-none">
                  Phone:
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 h-[52px] w-full rounded border border-[#d9d9d9] bg-white px-4 text-[18px] text-[#242424] outline-none transition-colors focus:border-[#2587cf]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-[18px] font-medium leading-none">
                Message:
              </label>
              <textarea
                id="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                className="mt-2 h-[52px] w-full resize-none rounded border border-[#d9d9d9] bg-white px-4 py-3 text-[18px] text-[#242424] outline-none transition-colors focus:border-[#2587cf]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-[18px] flex h-[50px] w-full items-center justify-center rounded bg-[#2f82cf] px-6 text-[16px] font-bold text-white transition-colors hover:bg-[#2476bf] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-[72px] grid gap-12 md:grid-cols-2 md:gap-[92px]">
            <div>
              <h2 className="text-[30px] font-bold leading-tight">Contact Information</h2>
              <div className="mt-7 flex flex-wrap items-center gap-x-12 gap-y-4 text-[18px] font-normal leading-none">
                <a href="mailto:adeniyiadekoya@gmail.com" className="inline-flex items-center gap-3">
                  <Mail className="h-6 w-6 fill-[#2587cf] text-[#2587cf]" strokeWidth={3} />
                  <span>adeniyiadekoya@gmail.com</span>
                </a>
                <a href="tel:+447443827135" className="inline-flex items-center gap-3">
                  <Phone className="h-6 w-6 fill-[#2587cf] text-[#2587cf]" strokeWidth={3} />
                  <span>+44 07443827135</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[30px] font-bold leading-tight">Social Media</h2>
              <div className="mt-7 grid gap-x-7 gap-y-5 text-[16px] font-normal leading-none sm:grid-cols-2 lg:text-[17px]">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-w-0 items-center gap-3"
                    >
                      <Icon className="h-6 w-6 shrink-0 fill-[#2587cf] text-[#2587cf]" strokeWidth={2.5} />
                      <span className="truncate">{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>

      <footer className="flex h-[82px] items-center justify-center bg-white px-4 text-center text-[18px] font-normal text-[#4a4a4a]">
        © adeniyiadekoya2026
      </footer>
    </>
  );
};

export default Contact;
