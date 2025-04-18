import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Facebook, Instagram, Youtube } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_fzfc2yl", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccessMessage("Failed to send your message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 bg-drum-dark">
      <div className="container">
        <div className="text-center animate-fade-in">
          <h3 className="text-sm uppercase text-drum-gold font-medium mb-2">CONTACT ME NOw</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in touch for bookings</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-8 py-3 bg-white text-black font-medium rounded-2xl hover:bg-drum-gold/80 transition-colors">
                Contact Me
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[705px] max-h-[80vh] bg-white border-[#EAEAEA] rounded-[16px] p-8 md:p-10 mx-auto overflow-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h3 className="text-sm text-[#1D1E2C] font-medium mb-2">Contact Me Now</h3>
                <h2 className="text-[14px] text-[#787878] font-bold">
                  You can reach out to me via this form in minutes!
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="glass-card p-8 animate-slide-up opacity-0">
                <div className="flex flex-col gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#1D1E2C] font-[600] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#D9DCE1] focus:border-drum-gold/50 outline-none transition-colors"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-[#1D1E2C] font-[600] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#D9DCE1] focus:border-drum-gold/50 outline-none transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm text-[#1D1E2C] font-[600] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D9DCE1] focus:border-drum-gold/50 outline-none transition-colors"
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-[#1D1E2C] font-[600] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#D9DCE1] focus:border-drum-gold/50 outline-none transition-colors resize-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-drum-gold text-black font-medium rounded-full hover:bg-drum-gold/80 transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                  </button>
                </div>
              </form>
              {successMessage && (
                <p className="mt-4 text-sm text-drum-gray">{successMessage}</p>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Contact;