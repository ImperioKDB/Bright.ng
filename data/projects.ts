export interface Project {
  slug: string;
  title: string;
  category: string;
  status: "Active" | "Archived";
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "forge",
    title: "Forge",
    category: "SaaS",
    status: "Active",
    description: "AI coding agent SaaS — Next.js, Fastify, Supabase.",
    problem:
      "Developers lose time context-switching between planning, writing, and debugging code. Most AI coding tools handle one of these well but not the full loop.",
    solution:
      "Forge is an AI coding agent that plans tasks into subtasks, writes code against a real codebase, and surfaces dependency impact before changes are made — built for developers who want to stay in flow instead of switching tools.",
    stack: ["Next.js", "Fastify", "Supabase", "Tailwind", "Framer Motion"],
    liveUrl: "",
    repoUrl: "",
    images: [],
  },
  {
    slug: "tacsfon-merch",
    title: "TACSFON Merch Store",
    category: "E-commerce",
    status: "Active",
    description: "Merchandise e-commerce platform with admin dashboard and order tracking.",
    problem:
      "TACSFON needed a way to sell branded merchandise online with manual payment verification, since card payment infrastructure isn't always reliable for community groups in Nigeria.",
    solution:
      "Built a full storefront with proof-of-payment upload, an admin dashboard to confirm orders, and status tracking from pending payment through dispatch — all backed by Supabase with RLS-secured admin roles.",
    stack: ["Next.js", "Express.js", "Supabase", "Tailwind"],
    liveUrl: "https://tacsfon-merch-two.vercel.app",
    repoUrl: "",
    images: [],
  },
  {
    slug: "pastq",
    title: "PastQ",
    category: "EdTech",
    status: "Active",
    description: "Nigerian university past questions platform with AI-powered extraction and quiz mode.",
    problem:
      "Students at Nigerian universities struggle to find organized, searchable past exam questions — most are scattered as scanned PDFs in WhatsApp groups.",
    solution:
      "PastQ lets students upload past question PDFs, uses AI to extract and structure individual questions, and turns them into a searchable, filterable quiz experience by course.",
    stack: ["Next.js", "Express.js", "Supabase", "OpenRouter AI"],
    liveUrl: "",
    repoUrl: "",
    images: [],
  },
];
