export const personalInfo = {
  name: "Olayinka Abiodun",
  title: "Senior Frontend Engineer",
  tagline: "Fintech & Enterprise Applications",
  summary:
    "Frontend Engineer with 4+ years building production-grade fintech, SaaS, and enterprise web applications. Delivered enterprise banking infrastructure at Union Bank of Nigeria using React, Next.js, and TypeScript on Azure. My background in accounting (ICAN) gives me a genuine edge in financial product development — I understand the domain, not just the code.",
  email: "abiodunolayinka75@gmail.com",
  phone: "+234 903 674 4573",
  github: "https://github.com/abiodunolayinka",
  gitlab: "https://gitlab.com/OlayinkaAbiodun",
  linkedin: "https://linkedin.com/in/olayinkaabiodun",
  cvUrl: "#", // Replace with hosted PDF URL (Google Drive, Dropbox, etc.)
};

export const skills = [
  {
    category: "Frontend",
    icon: "Monitor",
    techs: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "React Native", "Expo"],
  },
  {
    category: "UI Engineering",
    icon: "Palette",
    techs: ["Tailwind CSS", "Shadcn UI", "Radix UI", "Responsive Design", "Component Systems"],
  },
  {
    category: "State & Data",
    icon: "Database",
    techs: ["TanStack Query v5", "Zustand", "Context API", "Axios"],
  },
  {
    category: "Auth & Security",
    icon: "Shield",
    techs: ["Better Auth", "JWT", "Session Handling", "XSS Awareness", "KYC Flows"],
  },
  {
    category: "Payments & Real-time",
    icon: "CreditCard",
    techs: ["Paystack", "Fincra", "SignalR WebSockets"],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    techs: ["Microsoft Azure", "Turborepo", "pnpm Workspaces", "CI/CD Basics"],
  },
  {
    category: "Practices",
    icon: "GitBranch",
    techs: ["Git", "Agile/Scrum", "Monorepo Architecture", "Code Reviews", "Performance Optimisation"],
  },
];

export const experience = [
  {
    role: "Frontend Developer (Contract)",
    company: "Union Bank of Nigeria",
    period: "Jan 2026 – May 2026",
    type: "Contract",
    bullets: [
      "Architected and delivered SMEHub, a multi-tenant enterprise platform built as a Turborepo monorepo with three distinct apps (Admin, Vendor, Merchant) sharing a unified codebase",
      "Designed and maintained @smehub/ui, a reusable internal component library using Shadcn UI and Tailwind CSS v4, accelerating UI development across teams",
      "Implemented real-time support chat using SignalR WebSockets for live merchant-admin communication",
      "Built loan management and maker-checker authorisation flows aligned with banking compliance requirements",
      "Integrated TanStack Query v5 and Zustand for efficient server-state caching and global state management",
    ],
  },
  {
    role: "Frontend Engineer (Contract)",
    company: "FTF Logistics Solutions",
    period: "2024 – 2026",
    type: "Contract",
    bullets: [
      "Built a full-featured logistics and shipment management platform using Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS",
      "Developed a multi-step order creation flow with dynamic vendor selection, real-time pricing comparison, and integrated payment checkout",
      "Integrated Google Maps API for delivery address selection and live shipment tracking",
      "Implemented a multi-gateway payment system supporting Wallet, card payments, and Bank Transfer via Paystack",
      "Built wallet management UI including transaction history, balance display, and payment confirmation overlay",
    ],
  },
  {
    role: "Founding Frontend Developer",
    company: "Prooval (SaaS)",
    period: "2022 – 2025",
    type: "Full-time",
    bullets: [
      "Led frontend development as the founding engineer on Prooval, a SaaS mentorship platform enabling professionals to monetise expertise through bookings, digital products, and courses",
      "Built dynamic public mentor profile pages with server-side rendering, booking engine, audio/video testimonials, and digital product storefronts",
      "Implemented subdomain routing middleware mapping dashboard, app, and main domain routes — production-grade multi-subdomain architecture",
      "Developed a full authenticated mentor dashboard covering bookings, wallet/earnings, payout setup, and digital product creation",
      "Integrated dual payment gateways (Paystack + Fincra) for session bookings and digital product purchases",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Grazac Technology",
    period: "2021 – 2023",
    type: "Full-time",
    bullets: [
      "Built and maintained EdTech web platforms for student learning, course delivery, and institutional management using React and REST APIs",
      "Mentored junior developers through code reviews, pair programming, and frontend best practices",
      "Developed responsive, accessible UI components across multiple Grazac products",
      "Contributed to internal component systems and platform performance improvements",
    ],
  },
];

export const projects = [
  {
    name: "SMEHub Enterprise Platform",
    description:
      "Multi-tenant enterprise platform for SMEs built as a Turborepo monorepo with three distinct apps (Admin, Vendor, Merchant). Features real-time support chat, loan management, and maker-checker authorisation flows.",
    stack: ["React", "TypeScript", "Turborepo", "Shadcn UI", "Tailwind CSS", "SignalR", "TanStack Query", "Zustand"],
    github: "#",
    live: "https://www.unionbankng.com/services/business/sme-banking/",
    featured: true,
  },
  {
    name: "FTF Logistics Platform",
    description:
      "Full-featured logistics and shipment management platform with multi-step order creation, Google Maps integration, real-time pricing comparison, and Paystack multi-gateway payment system.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Google Maps API", "Paystack"],
    github: "#",
    live: "https://app.ftfdigitalsolutions.com/",
    featured: true,
  },
  {
    name: "Prooval SaaS Platform",
    description:
      "SaaS mentorship platform enabling professionals to monetise expertise through bookings, digital products, and courses. Includes SSR public profiles, subdomain routing middleware, and dual payment gateways.",
    stack: ["Next.js", "TypeScript", "Paystack", "Fincra", "SSR"],
    github: "#",
    live: "https://prooval.com/",
    featured: true,
  },
  {
    name: "MyCheerly Dashboard",
    description:
      "Donor tracking and church management SaaS platform supporting multi-campus onboarding, campaign management, financial giving flows, and member directories with KYC onboarding.",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "ApexCharts", "Zustand"],
    github: "#",
    live: "https://mycheerly.netlify.app/",
    featured: true,
  },
  {
    name: "React Native Auth Template",
    description:
      "Full-stack cross-platform authentication template with Expo Router v6. Implements credentials-based auth via Better Auth with MongoDB persistence and encrypted token storage.",
    stack: ["React Native 0.81", "Expo", "TypeScript", "MongoDB", "Better Auth", "Expo SecureStore"],
    github: "https://github.com/abiodunolayinka",
    live: "#",
    featured: false,
  },
  {
    name: "Ogun Digital Summit Website",
    description:
      "Public-facing event platform for a state-level digital summit, handling event information, registration, and scheduling for thousands of attendees.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "https://ogundigitalsummit.com/",
    featured: true,
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Olayinka delivered the entire SMEHub monorepo architecture ahead of schedule. His ability to balance three app contexts, shared libraries, and real-time features simultaneously is genuinely rare. He writes clean, reviewable code that the team could own immediately.",
    author: "David Okonkwo",
    position: "Engineering Manager, Union Bank of Nigeria",
  },
  {
    id: 2,
    quote:
      "Working with Olayinka on our fintech platform was exceptional. He understood the business domain deeply — not just the UI layer. His payment integration work was bulletproof, and his eye for UX in transactional flows saved us months of iteration.",
    author: "Chisom Eze",
    position: "CTO, FTF Logistics Solutions",
  },
  {
    id: 3,
    quote:
      "Olayinka mentored me through my first production React codebase. He explained architecture decisions clearly, gave thoughtful code reviews, and always pushed for correctness over speed. I became a significantly better developer under his guidance.",
    author: "Tunde Adeyemi",
    position: "Junior Frontend Developer, Grazac Technology",
  },
];

export const mediaFeatures = [
  {
    id: 1,
    image: "/lovable-uploads/image1.webp",
    title: "Olayinka Abiodun: Introducing Bold Innovations to Nigeria's Tech Ecosystem",
    description:
      "Vanguard Nigeria covers how Olayinka is pushing the boundaries of frontend engineering and driving impactful product innovation across Nigeria's growing tech landscape.",
    link: "https://www.vanguardngr.com/2025/11/olayinka-abiodun-introducing-bold-innovations-to-nigerias-tech-ecosystem/",
    source: "Vanguard",
  },
  {
    id: 2,
    image: "/lovable-uploads/image3.webp",
    title: "Olayinka Abiodun: A Rising Force in Nigeria's Tech Ecosystem",
    description:
      "ThisDay Live profiles Olayinka Abiodun as one of Nigeria's standout frontend engineers — recognised for enterprise-grade delivery and fintech specialisation.",
    link: "https://www.thisdaylive.com/2025/11/25/olayinka-abiodun-a-rising-force-in-nigerias-tech-ecosystem/",
    source: "ThisDay Live",
  },
  {
    id: 3,
    image: "/lovable-uploads/image5.webp",
    title: "Drawing From Experience: Creating Frontend Systems That Scale",
    description:
      "Sharing lessons from years of production work — the patterns, pitfalls, and principles that make frontend architecture resilient at enterprise scale.",
    link: "https://www.linkedin.com/posts/olayinkaabiodun_drawing-from-my-experience-creating-frontend-share-7453003957368467456-OBcJ",
    source: "LinkedIn",
  },
  {
    id: 4,
    image: "/lovable-uploads/image2.webp",
    title: "AI, Innovation & Business Growth: The Frontend Engineer's Perspective",
    description:
      "Exploring the intersection of artificial intelligence, product innovation, and business growth — and what it means for engineers building the next generation of digital products.",
    link: "https://www.linkedin.com/posts/olayinkaabiodun_ai-innovation-businessgrowth-activity-7380401380747907072-XBXU",
    source: "LinkedIn",
  },
];
