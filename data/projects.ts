export interface Project {
  slug: string;
  title: string;
  category: string;
  status: "Active" | "Archived";
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "forge",
    title: "Forge",
    category: "SaaS",
    status: "Active",
    description: "AI coding agent SaaS — Next.js, Fastify, Supabase.",
    image: "",
  },
  {
    slug: "tacsfon-merch",
    title: "TACSFON Merch Store",
    category: "E-commerce",
    status: "Active",
    description: "Merchandise e-commerce platform with admin dashboard and order tracking.",
    image: "",
  },
  {
    slug: "pastq",
    title: "PastQ",
    category: "EdTech",
    status: "Active",
    description: "Nigerian university past questions platform with AI-powered extraction and quiz mode.",
    image: "",
  },
];
