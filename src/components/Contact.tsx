import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Facebook, Phone } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ── Custom SVG icons ──────────────────────────────────────────────────────────

const MailIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12C2 15.771 2 17.657 3.172 18.828C4.344 19.999 6.229 20 10 20H14C17.771 20 19.657 20 20.828 18.828C21.999 17.656 22 15.771 22 12C22 8.229 22 6.343 20.828 5.172C19.656 4.001 17.771 4 14 4H10C6.229 4 4.343 4 3.172 5.172ZM18.576 7.52C18.7032 7.67279 18.7646 7.86985 18.7466 8.06787C18.7286 8.26589 18.6327 8.44866 18.48 8.576L16.284 10.406C15.397 11.146 14.679 11.744 14.044 12.152C13.384 12.577 12.741 12.845 12 12.845C11.259 12.845 10.616 12.576 9.955 12.152C9.321 11.744 8.603 11.145 7.716 10.407L5.52 8.577C5.3671 8.4497 5.27104 8.26687 5.25294 8.06874C5.23484 7.8706 5.2962 7.6734 5.4235 7.5205C5.5508 7.3676 5.73363 7.27154 5.93176 7.25344C6.1299 7.23534 6.3271 7.2967 6.48 7.424L8.64 9.223C9.573 10 10.22 10.538 10.768 10.89C11.297 11.23 11.656 11.345 12.001 11.345C12.346 11.345 12.705 11.231 13.234 10.89C13.781 10.538 14.429 10 15.362 9.223L17.521 7.423C17.6739 7.29587 17.8711 7.23467 18.0691 7.25286C18.2671 7.27105 18.4488 7.36714 18.576 7.52Z" fill="currentColor" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M11.0286 0C12.1536 0.003 12.7246 0.009 13.2176 0.023L13.4116 0.03C13.6356 0.038 13.8566 0.0479999 14.1236 0.0599999C15.1876 0.11 15.9136 0.278 16.5506 0.525C17.2106 0.779 17.7666 1.123 18.3226 1.678C18.8313 2.17773 19.2248 2.78247 19.4756 3.45C19.7226 4.087 19.8906 4.813 19.9406 5.878C19.9526 6.144 19.9626 6.365 19.9706 6.59L19.9766 6.784C19.9916 7.276 19.9976 7.847 19.9996 8.972L20.0006 9.718V11.028C20.003 11.7574 19.9953 12.4868 19.9776 13.216L19.9716 13.41C19.9636 13.635 19.9536 13.856 19.9416 14.122C19.8916 15.187 19.7216 15.912 19.4756 16.55C19.2248 17.2175 18.8313 17.8223 18.3226 18.322C17.8228 18.8307 17.2181 19.2242 16.5506 19.475C15.9136 19.722 15.1876 19.89 14.1236 19.94L13.4116 19.97L13.2176 19.976C12.7246 19.99 12.1536 19.997 11.0286 19.999L10.2826 20H8.97357C8.24383 20.0026 7.51409 19.9949 6.78457 19.977L6.59057 19.971C6.35318 19.962 6.11584 19.9517 5.87857 19.94C4.81457 19.89 4.08857 19.722 3.45057 19.475C2.7834 19.2241 2.17901 18.8306 1.67957 18.322C1.17051 17.8224 0.776678 17.2176 0.525569 16.55C0.278569 15.913 0.110569 15.187 0.0605687 14.122L0.0305688 13.41L0.0255689 13.216C0.00713493 12.4868 -0.00119929 11.7574 0.000568797 11.028V8.972C-0.0021991 8.2426 0.00513501 7.5132 0.0225689 6.784L0.0295688 6.59C0.0375688 6.365 0.0475688 6.144 0.0595688 5.878C0.109569 4.813 0.277569 4.088 0.524569 3.45C0.776263 2.7822 1.17079 2.17744 1.68057 1.678C2.17972 1.16955 2.78376 0.776074 3.45057 0.525C4.08857 0.278 4.81357 0.11 5.87857 0.0599999C6.14457 0.0479999 6.36657 0.038 6.59057 0.03L6.78457 0.0239999C7.51376 0.00623271 8.24316 -0.0014347 8.97257 0.000999928L11.0286 0ZM10.0006 5C8.67449 5 7.40272 5.52678 6.46503 6.46447C5.52735 7.40215 5.00057 8.67392 5.00057 10C5.00057 11.3261 5.52735 12.5979 6.46503 13.5355C7.40272 14.4732 8.67449 15 10.0006 15C11.3267 15 12.5984 14.4732 13.5361 13.5355C14.4738 12.5979 15.0006 11.3261 15.0006 10C15.0006 8.67392 14.4738 7.40215 13.5361 6.46447C12.5984 5.52678 11.3267 5 10.0006 5ZM10.0006 7C10.3945 6.99993 10.7847 7.07747 11.1487 7.22817C11.5127 7.37887 11.8434 7.5998 12.122 7.87833C12.4007 8.15686 12.6217 8.48754 12.7725 8.85149C12.9233 9.21544 13.001 9.60553 13.0011 9.9995C13.0011 10.3935 12.9236 10.7836 12.7729 11.1476C12.6222 11.5116 12.4013 11.8423 12.1227 12.121C11.8442 12.3996 11.5135 12.6206 11.1496 12.7714C10.7856 12.9223 10.3955 12.9999 10.0016 13C9.20592 13 8.44286 12.6839 7.88025 12.1213C7.31764 11.5587 7.00157 10.7956 7.00157 10C7.00157 9.20435 7.31764 8.44129 7.88025 7.87868C8.44286 7.31607 9.20592 7 10.0016 7M15.2516 3.5C14.92 3.5 14.6021 3.6317 14.3677 3.86612C14.1333 4.10054 14.0016 4.41848 14.0016 4.75C14.0016 5.08152 14.1333 5.39946 14.3677 5.63388C14.6021 5.8683 14.92 6 15.2516 6C15.5831 6 15.901 5.8683 16.1355 5.63388C16.3699 5.39946 16.5016 5.08152 16.5016 4.75C16.5016 4.41848 16.3699 4.10054 16.1355 3.86612C15.901 3.6317 15.5831 3.5 15.2516 3.5Z" fill="currentColor" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M-1.49902 -4H22.501V20H-1.49902V-4Z" fill="currentColor" />
  </svg>
);

// ── Social links data ─────────────────────────────────────────────────────────

type SocialLinkData = {
  label: string;
  href: string;
  iconType: "instagram" | "linkedin" | "facebook" | "youtube";
};

const socialLinksData: SocialLinkData[] = [
  { label: "www.instagram.com/adeniyi_drumz/",          href: "https://www.instagram.com/adeniyi_drumz/",          iconType: "instagram" },
  { label: "linkedin.com/in/adeniyi-adekoya-5372b3178", href: "https://linkedin.com/in/adeniyi-adekoya-5372b3178", iconType: "linkedin"  },
  { label: "www.facebook.com/adeniyi.adekoya/",         href: "https://www.facebook.com/adeniyi.adekoya/",         iconType: "facebook"  },
  { label: "www.youtube.com/@adeniyidrumz",             href: "https://www.youtube.com/@adeniyidrumz",             iconType: "youtube"   },
];

// ── Component ─────────────────────────────────────────────────────────────────

interface ContactProps {
  /** "landing" = blue bg + white text; "page" (default) = white bg + dark text */
  variant?: "landing" | "page";
}

const Contact = ({ variant = "page" }: ContactProps) => {
  const isLanding = variant === "landing";

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
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
        { name: formData.name, email: formData.email, phone: formData.phone, message: formData.message },
        "wIDcvGIjLbGH0vWEO"
      )
      .then(
        () => { toast.success("Your message has been sent successfully!"); setFormData({ name: "", email: "", phone: "", message: "" }); },
        () => { toast.error("Failed to send your message. Please try again."); }
      )
      .finally(() => setIsSubmitting(false));
  };

  // ── Derived styles ──────────────────────────────────────────────────────────
  const iconColor   = isLanding ? "text-white" : "text-[#2587cf]";
  const labelColor  = isLanding ? "text-white" : "text-[#242424]";
  const inputClass  = isLanding
    ? "mt-2 h-[52px] w-full rounded border border-white/40 bg-white/10 px-4 text-[18px] text-white outline-none transition-colors placeholder:text-white/60 focus:border-white"
    : "mt-2 h-[52px] w-full rounded border border-[#d9d9d9] bg-white px-4 text-[18px] text-[#242424] outline-none transition-colors placeholder:text-[#242424] focus:border-[#2587cf]";
  const submitClass = isLanding
    ? "mt-[18px] flex h-[50px] w-full items-center justify-center rounded bg-white px-6 text-[16px] font-bold text-[#2587cf] transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
    : "mt-[18px] flex h-[50px] w-full items-center justify-center rounded bg-[#2f82cf] px-6 text-[16px] font-bold text-white transition-colors hover:bg-[#2476bf] disabled:cursor-not-allowed disabled:opacity-70";

  const renderIcon = (type: SocialLinkData["iconType"]) => {
    switch (type) {
      case "instagram": return <InstagramIcon className={`h-6 w-6 shrink-0 ${iconColor}`} />;
      case "linkedin":  return <LinkedInIcon  className={`h-6 w-6 shrink-0 ${iconColor}`} />;
      case "facebook":  return <Facebook      className={`h-6 w-6 shrink-0 fill-current ${iconColor}`} strokeWidth={2.5} />;
      case "youtube":   return <YoutubeIcon   className={`h-4 w-5 shrink-0 ${iconColor}`} />;
    }
  };

  return (
    <>
      <section
        id="contact"
        className={`px-4 pb-24 sm:px-8 lg:px-16 ${
          isLanding
            ? "bg-[#2587cf] text-white pt-24"
            : "bg-white text-[#242424] pt-[132px]"
        }`}
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className={`text-[28px] font-medium uppercase leading-none tracking-normal ${isLanding ? "text-white/80" : ""}`}>
              Contact Us
            </p>
            <h1 className="mt-5 text-[52px] font-bold leading-none tracking-normal sm:text-[64px]">
              We Can Work Together
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="mt-14">
            <div>
              <label htmlFor="name" className={`block text-[18px] font-medium leading-none ${labelColor}`}>Name:</label>
              <input
                id="name" type="text" value={formData.name} onChange={handleChange}
                placeholder="Ayomiposi Adekanmbi Opeyemi"
                className={inputClass} required
              />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-[56px]">
              <div>
                <label htmlFor="email" className={`block text-[18px] font-medium leading-none ${labelColor}`}>Email</label>
                <input id="email" type="email" value={formData.email} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label htmlFor="phone" className={`block text-[18px] font-medium leading-none ${labelColor}`}>Phone:</label>
                <input id="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className={`block text-[18px] font-medium leading-none ${labelColor}`}>Message:</label>
              <textarea
                id="message" rows={2} value={formData.message} onChange={handleChange}
                className={`${inputClass} h-[52px] resize-none py-3`} required
              />
            </div>

            <button type="submit" disabled={isSubmitting} className={submitClass}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-[72px] grid gap-12 md:grid-cols-2 md:gap-[92px]">
            <div>
              <h2 className="text-[30px] font-bold leading-tight">Contact Information</h2>
              <div className="mt-7 flex flex-wrap items-center gap-x-12 gap-y-4 text-[18px] font-normal leading-none">
                <a href="mailto:adeniyiadekoya@gmail.com" className="inline-flex items-center gap-3">
                  <MailIcon className={`h-6 w-6 ${iconColor}`} />
                  <span>adeniyiadekoya@gmail.com</span>
                </a>
                <a href="tel:+447443827135" className="inline-flex items-center gap-3">
                  <Phone className={`h-6 w-6 fill-current ${iconColor}`} strokeWidth={3} />
                  <span>+44 07443827135</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[30px] font-bold leading-tight">Social Media</h2>
              <div className="mt-7 grid gap-x-7 gap-y-5 text-[16px] font-normal leading-none sm:grid-cols-2 lg:text-[17px]">
                {socialLinksData.map((item) => (
                  <a
                    key={item.label} href={item.href}
                    target="_blank" rel="noreferrer"
                    className="inline-flex min-w-0 items-center gap-3"
                  >
                    {renderIcon(item.iconType)}
                    <span className="truncate">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>

      {/* Footer only shown on the dedicated contact page */}
      {!isLanding && (
        <footer className="flex h-[82px] items-center justify-center bg-white px-4 text-center text-[18px] font-normal text-[#4a4a4a]">
          © adeniyiadekoya2026
        </footer>
      )}
    </>
  );
};

export default Contact;
