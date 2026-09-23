export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "Scholars",
    role: "Founder & Full-stack Builder",
    location: "Benin City, Nigeria",
    startDate: "Aug 2026",
    endDate: "Present",
    description:
      "Building a scholarship discovery and application platform that matches students to opportunities they are actually eligible for.",
  },
  {
    company: "LevyLedger",
    role: "Founder & Builder",
    location: "University of Benin",
    startDate: "Jul 2026",
    endDate: "Present",
    description:
      "Designed and shipped an on-chain treasury system that makes faculty student-union finances publicly auditable.",
  },
  {
    company: "TACSFON Bookshop",
    role: "Full-stack Builder",
    location: "University of Benin",
    startDate: "May 2026",
    endDate: "Present",
    description:
      "Built a mobile-first storefront with Google sign-in, cart and checkout flows, order history, and admin fulfillment tools.",
  },
];
