export interface Feature {
  name: string;
  description: string;
}

export interface TechCategory {
  category: string;
  description: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: "Active" | "Archived";
  description: string;
  problem: string;
  solution: string;
  myRole: string;
  features: Feature[];
  technologies: TechCategory[];
  monetization: string;
  summary: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  images: string[];
  nextSlug: string;
}

export const projects: Project[] = [
  {
    slug: "forge",
    title: "Forge",
    category: "SaaS",
    status: "Active",
    description: "AI coding agent SaaS — Next.js, Fastify, Supabase.",
    problem:
      "Developers lose time context-switching between planning, writing, and debugging code. Most AI coding tools handle one of these well but not the full loop — you plan in one tab, prompt in another, and lose track of what actually changed and why.",
    solution:
      "Forge is an AI coding agent that plans tasks into subtasks, writes code against a real codebase, and surfaces dependency impact before changes are made. Instead of treating AI assistance as autocomplete, Forge treats it as a teammate that understands the shape of your project before it touches any file.",
    myRole:
      "I'm co-founder, working alongside a backend engineer as the product owner driving frontend direction. I own the Next.js App Router frontend end to end — auth flows, settings, the ImpactPreview feature, and the Dependency Graph Explorer — while coordinating with my co-founder on how the Fastify backend exposes data the frontend needs. Every decision about what the product should feel like to use runs through me first.",
    features: [
      {
        name: "Task Planning",
        description:
          "Breaks a high-level request into ordered subtasks before writing any code, so you can see the plan and adjust it before execution starts.",
      },
      {
        name: "Impact Preview",
        description:
          "Shows which files and dependencies a proposed change will touch, wired to a real backend endpoint with debounced fetching so it stays responsive as you type.",
      },
      {
        name: "Dependency Graph Explorer",
        description:
          "A visual map of how files in your codebase relate to each other, letting you understand blast radius before approving a change rather than after.",
      },
    ],
    technologies: [
      {
        category: "Frontend & Framework",
        description:
          "Built on Next.js App Router for routing and server components, styled with Tailwind, animated with Framer Motion for transitions that feel deliberate rather than decorative.",
        items: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
      },
      {
        category: "Backend & Data",
        description:
          "A Fastify backend deployed on Vercel handles task orchestration and codebase analysis, backed by Supabase for auth, storage, and row-level-secured data access.",
        items: ["Fastify", "Supabase", "PostgreSQL"],
      },
    ],
    monetization:
      "Forge is structured as a subscription SaaS, with tiered access based on usage volume — the kind of model that scales with how much a team actually relies on the tool, rather than charging per seat regardless of use.",
    summary:
      "Forge is still early, but the core loop — plan, preview impact, then execute — is working end to end. The next phase is closing out remaining frontend issues (a 0-subtasks edge case, clearer error messaging) and rebuilding the Dependency Graph Explorer into a more focused, file-centric view.",
    stack: ["Next.js", "Fastify", "Supabase", "Tailwind", "Framer Motion"],
    liveUrl: "",
    repoUrl: "",
    images: [],
    nextSlug: "tacsfon-merch",
  },
  {
    slug: "tacsfon-merch",
    title: "TACSFON Merch Store",
    category: "E-commerce",
    status: "Active",
    description: "Merchandise e-commerce platform with admin dashboard and order tracking.",
    problem:
      "TACSFON, my campus fellowship at the University of Benin, needed a way to sell branded merchandise online. Card payment infrastructure isn't always reliable for community groups in Nigeria, so the store had to support manual bank transfer with a real verification step — not just a checkout that assumes Stripe is an option.",
    solution:
      "I built a full storefront with proof-of-payment upload, an admin dashboard to confirm orders, and status tracking that moves an order from pending payment through to dispatched and received. The whole flow respects how people actually pay for things in this context: transfer first, upload your receipt, wait for confirmation.",
    myRole:
      "I built this solo, end to end — frontend, backend, and database design — as a fellowship project for TACSFON. That meant making every call: how order statuses should flow, what the admin dashboard needed to surface, and how to keep the storefront fast on the kind of mobile connections most students actually use.",
    features: [
      {
        name: "Proof of Payment Upload",
        description:
          "Customers upload a screenshot of their bank transfer receipt directly to the order, removing the need for a separate WhatsApp confirmation step.",
      },
      {
        name: "Admin Order Dashboard",
        description:
          "A secured admin view for confirming payments, updating order status, and tracking everything from pending payment through to received, backed by Supabase RLS so only verified admins can act on orders.",
      },
      {
        name: "Status-Driven Order Tracking",
        description:
          "Every order moves through a defined lifecycle — pending payment, payment submitted, confirmed, dispatched, received, or cancelled — so customers always know where their order stands.",
      },
    ],
    technologies: [
      {
        category: "Frontend & Framework",
        description:
          "A Next.js 14 frontend deployed on Vercel, using a proxy-route pattern to avoid CORS issues when calling the backend directly.",
        items: ["Next.js", "Tailwind", "TypeScript"],
      },
      {
        category: "Backend & Storage",
        description:
          "Express.js API routes handle order logic, with Supabase managing auth, the Postgres database, and dedicated storage buckets for product assets, proof uploads, and receipts.",
        items: ["Express.js", "Supabase", "PostgreSQL"],
      },
    ],
    monetization:
      "TACSFON Merch isn't a SaaS product — it's infrastructure for a single organization's merchandise sales, with all proceeds going directly to the fellowship rather than being extracted as platform revenue.",
    summary:
      "The store has reached a largely complete, stable state — build is passing, the order lifecycle works end to end, and the admin dashboard gives the fellowship's team real visibility into sales without needing to read raw database tables.",
    stack: ["Next.js", "Express.js", "Supabase", "Tailwind"],
    liveUrl: "https://tacsfon-merch-two.vercel.app",
    repoUrl: "",
    images: [],
    nextSlug: "pastq",
  },
  {
    slug: "pastq",
    title: "PastQ",
    category: "EdTech",
    status: "Active",
    description: "Nigerian university past questions platform with AI-powered extraction and quiz mode.",
    problem:
      "Students at Nigerian universities struggle to find organized, searchable past exam questions. What exists is scattered across scanned PDFs shared in WhatsApp groups — unsearchable, unorganized, and easy to lose track of right when you need it most, during exam prep.",
    solution:
      "PastQ lets students upload past question PDFs, uses AI to extract and structure individual questions automatically, and turns scanned documents into a searchable, filterable quiz experience organized by course. What used to be a forwarded PDF becomes something you can actually study from.",
    myRole:
      "I founded and built PastQ solo — product direction, the AI extraction pipeline, and the full-stack implementation. The hardest part wasn't the UI, it was getting AI extraction reliable enough across messy, inconsistently formatted scanned PDFs that real students actually upload.",
    features: [
      {
        name: "AI-Powered Question Extraction",
        description:
          "Upload a PDF and the system extracts individual questions automatically, using a primary model with a fallback list so extraction stays reliable even when one model underperforms on a given document.",
      },
      {
        name: "Quiz Mode",
        description:
          "Extracted questions become an interactive quiz experience, letting students test themselves against real past questions instead of just reading through a static document.",
      },
      {
        name: "Browse & Filter by Course",
        description:
          "Questions are organized and filterable by course, so finding relevant past questions doesn't mean scrolling through a years-old WhatsApp group history.",
      },
    ],
    technologies: [
      {
        category: "Frontend & Framework",
        description:
          "A Next.js frontend deployed on Vercel handles upload, browse, and quiz interfaces.",
        items: ["Next.js", "Tailwind", "TypeScript"],
      },
      {
        category: "AI Integration Pipeline",
        description:
          "Question extraction runs through OpenRouter, using a free-tier vision-language model as the primary extractor with a configured fallback model list to keep extraction working if the primary model is unavailable.",
        items: ["OpenRouter AI", "nvidia/nemotron-nano-12b-v2-vl"],
      },
      {
        category: "Backend & Storage",
        description:
          "An Express.js backend on Render handles PDF processing and extraction orchestration, with Supabase managing the database and storing structured question data.",
        items: ["Express.js", "Supabase", "PostgreSQL"],
      },
    ],
    monetization:
      "PastQ is moving toward a Paystack-powered model for premium features — likely unlimited quiz attempts or expanded course access — while keeping core browsing free, since the goal is wide student adoption first.",
    summary:
      "Core upload, extraction, and quiz functionality is live and working. Phase 4 — authentication, Paystack integration, a leaderboard, and notifications — is in progress, moving PastQ from a useful tool toward a platform students actually return to.",
    stack: ["Next.js", "Express.js", "Supabase", "OpenRouter AI"],
    liveUrl: "",
    repoUrl: "",
    images: [],
    nextSlug: "forge",
  },
];
