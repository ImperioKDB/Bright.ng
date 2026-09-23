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
  previewImage?: string;
  repoUrl?: string;
  images: string[];
  nextSlug: string;
  featured: boolean;
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
          "Built on Next.js App Router for routing and server components, styled with Tailwind, animated with Framer Motion.",
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
      "Forge is still early, but the core loop — plan, preview impact, then execute — is working end to end. The next phase is closing out remaining frontend issues and rebuilding the Dependency Graph Explorer into a more focused, file-centric view.",
    stack: ["Next.js", "Fastify", "Supabase", "Tailwind", "Framer Motion"],
    liveUrl: "https://forge-frontend-iota.vercel.app",
    repoUrl: "",
    images: [],
    nextSlug: "levyledger",
    featured: false,
  },
  {
    slug: "levyledger",
    title: "LevyLedger",
    category: "Web3 / Civic Tech",
    status: "Active",
    description: "On-chain treasury transparency for University of Benin faculty student unions — built on Solana.",
    problem:
      "Every semester, faculty student unions at Nigerian universities collect levies from students — union dues, faculty fees, departmental charges. Millions of naira move through student executives with zero public accountability: no receipts, no audit trail, no records that survive a handover. When the exco changes, the financial history usually disappears with them. Students have no way to verify anything without simply trusting whoever is currently in charge.",
    solution:
      "LevyLedger deploys one on-chain treasury per faculty on Solana, controlled by a 3-of-5 executive multisig. Deposits are hybrid — execs can deposit collected off-chain levies, or any student with a wallet can deposit directly. Spending requires 3 of 5 executive signatures, at which point the smart contract — not any person — automatically transfers the funds. Every deposit, proposal, signature, and payment is permanently on-chain and publicly readable by anyone, no wallet or login required.",
    myRole:
      "I designed and built LevyLedger solo — the Solana program in Rust/Anchor, the full Next.js frontend, and the Supabase identity layer. The architecture was entirely my own call: choosing Solana for low transaction costs and programmable custody, drawing the trust boundary so Supabase could never become a second ledger, and designing the multisig flow so no single executive can unilaterally release funds. This is the most technically complex project I've shipped.",
    features: [
      {
        name: "3-of-5 Multisig Treasury",
        description:
          "Any exec can propose a payment. The moment the third signature lands, the smart contract auto-executes the USDC transfer — no human releases the money. Single-exec theft is architecturally impossible.",
      },
      {
        name: "Permissionless Public Audit",
        description:
          "Any student, journalist, or incoming exec can open a faculty's page with no wallet and no login and see the live balance, every proposal, every signature, and every executed payment — permanently, on-chain.",
      },
      {
        name: "Hybrid Deposits",
        description:
          "Execs can deposit collected off-chain levies, or students can deposit their dues directly via wallet — closing the gap where money could disappear between 'collected' and 'recorded.'",
      },
      {
        name: "Built-in Devnet Faucet",
        description:
          "A one-tap devnet USDC button lets anyone test the deposit flow without needing an external faucet — lowering the barrier to actually try the product.",
      },
    ],
    technologies: [
      {
        category: "Blockchain / Smart Contract",
        description:
          "The treasury logic lives in a Rust program built with Anchor, deployed to Solana Devnet. The program controls five instructions: init_treasury, deposit, create_proposal, sign_proposal (auto-executes at 3-of-5), and expire_proposal. The vault's authority is the program itself — no individual wallet holds custody.",
        items: ["Rust", "Anchor", "Solana", "SPL Token (USDC)"],
      },
      {
        category: "Frontend & Wallet Integration",
        description:
          "A Next.js 14 App Router frontend handles both public read-only views (no wallet needed) and wallet-gated exec/admin actions, using Solana's wallet adapter for browser wallet connections.",
        items: ["Next.js", "Tailwind", "TypeScript", "@coral-xyz/anchor", "@solana/wallet-adapter-react"],
      },
      {
        category: "Identity & Infrastructure",
        description:
          "Supabase stores only identity data (wallet address ↔ name ↔ matric number) and the faculty-registration request queue. It deliberately never holds balance or transaction data — those are always read live from the chain, so Supabase becoming unavailable would never affect financial history.",
        items: ["Supabase", "Vercel"],
      },
    ],
    monetization:
      "LevyLedger is civic infrastructure, not a SaaS product. The v1 release is free for UNIBEN faculties. A future model could involve a small protocol fee on executed proposals — a fraction of a cent per transaction on Solana — but the primary goal is adoption and accountability, not revenue extraction from student unions.",
    summary:
      "LevyLedger is live on Solana Devnet with a deployed program at address 4Av48RVmUb2U5V3jqkEC15C5cbjNRY2TqD64ebc1jn1M, verifiable on Solana Explorer. The architecture is mainnet-ready in structure but needs a security audit and a solved fiat-to-USDC on-ramp before a real-money deployment. Planned v2 features include on-chain signer rotation for exco handovers, a cross-faculty transparency leaderboard, and downloadable verifiable handover certificates.",
    stack: ["Rust", "Anchor", "Solana", "Next.js", "Tailwind", "Supabase"],
    liveUrl: "https://levyledger.vercel.app",
    previewImage: "/assets/levyledger-homepage-preview.webp",
    repoUrl: "",
    images: [],
    nextSlug: "tacsfon-merch",
    featured: true,
  },
  {
    slug: "tacsfon-merch",
    title: "TACSFON Merch Store",
    category: "E-commerce",
    status: "Active",
    description: "Merchandise e-commerce platform with admin dashboard and order tracking.",
    problem:
      "TACSFON, my campus fellowship at the University of Benin, needed a way to sell branded merchandise online. Card payment infrastructure isn't always reliable for community groups in Nigeria, so the store had to support manual bank transfer with a real verification step.",
    solution:
      "I built a full storefront with proof-of-payment upload, an admin dashboard to confirm orders, and status tracking that moves an order from pending payment through to dispatched and received.",
    myRole:
      "I built this solo, end to end — frontend, backend, and database design. That meant making every call: how order statuses should flow, what the admin dashboard needed to surface, and how to keep the storefront fast on mobile connections.",
    features: [
      {
        name: "Proof of Payment Upload",
        description:
          "Customers upload a screenshot of their bank transfer receipt directly to the order, removing the need for a separate WhatsApp confirmation step.",
      },
      {
        name: "Admin Order Dashboard",
        description:
          "A secured admin view for confirming payments and updating order status, backed by Supabase RLS so only verified admins can act on orders.",
      },
      {
        name: "Status-Driven Order Tracking",
        description:
          "Every order moves through a defined lifecycle — pending payment, payment submitted, confirmed, dispatched, received, or cancelled.",
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
          "Express.js API routes handle order logic, with Supabase managing auth, the Postgres database, and dedicated storage buckets for product assets and proof uploads.",
        items: ["Express.js", "Supabase", "PostgreSQL"],
      },
    ],
    monetization:
      "TACSFON Merch isn't a SaaS product — it's infrastructure for a single organization's merchandise sales, with all proceeds going directly to the fellowship.",
    summary:
      "The store has reached a largely complete, stable state — build is passing, the order lifecycle works end to end, and the admin dashboard gives the fellowship's team real visibility into sales.",
    stack: ["Next.js", "Express.js", "Supabase", "Tailwind"],
    liveUrl: "https://tacsfon-merch-two.vercel.app",
    repoUrl: "",
    images: [],
    nextSlug: "tacsfon-bookshop",
    featured: false,
  },
  {
    slug: "tacsfon-bookshop",
    title: "TACSFON Bookshop",
    category: "E-commerce",
    status: "Active",
    description: "Online bookshop for TACSFON, built from a 10-table schema with full auth and order flow.",
    problem:
      "TACSFON needed a dedicated platform for selling Christian literature and study materials to fellowship members — distinct from the merch store, with its own catalog, cart, and checkout logic, plus reliable auth so members could track their own order history.",
    solution:
      "I built the Bookshop from scratch: a 10-table Supabase schema with RLS policies and triggers, a complete Next.js storefront across 9 build phases, Google OAuth via Supabase Auth, and an Express.js backend on Render.",
    myRole:
      "Solo build — schema design, every phase of the frontend, the Express backend, and the auth integration. This project involved real debugging work: auth race conditions, cart sync issues, and admin role bugs that only showed up once real fellowship members started using it.",
    features: [
      {
        name: "Google OAuth Authentication",
        description:
          "Members sign in with their Google account via Supabase Auth, removing the friction of yet another password.",
      },
      {
        name: "Cart & Checkout Flow",
        description:
          "A full shopping cart experience with persistent state, leading into a checkout flow that supports manual bank transfer payment confirmation.",
      },
      {
        name: "Order History & Admin Management",
        description:
          "Members can track their own past orders, while admins get a dedicated dashboard to confirm payments and manage fulfillment.",
      },
    ],
    technologies: [
      {
        category: "Frontend & Framework",
        description:
          "Next.js frontend built in 9 sequential phases, deployed on Vercel, covering everything from auth to receipts.",
        items: ["Next.js", "Tailwind", "TypeScript"],
      },
      {
        category: "Backend & Auth",
        description:
          "An Express.js backend on Render handles order and notification logic, with Supabase Auth (including Google OAuth) managing sign-in and a 10-table Postgres schema with RLS.",
        items: ["Express.js", "Supabase", "PostgreSQL", "Google OAuth"],
      },
    ],
    monetization:
      "Like the Merch Store, the Bookshop isn't a SaaS product — it's dedicated infrastructure for TACSFON's literature sales.",
    summary:
      "The Bookshop is live and handling real orders from fellowship members, with the full auth-to-receipt flow working end to end.",
    stack: ["Next.js", "Express.js", "Supabase", "Google OAuth", "Tailwind"],
    liveUrl: "https://tacsfon-bookshop.vercel.app",
    repoUrl: "",
    images: [],
    nextSlug: "scholars",
    featured: false,
  },
  {
    slug: "scholars",
    title: "Scholars",
    category: "EdTech",
    status: "Active",
    description: "Scholarship discovery and application platform — Next.js, Supabase, PostgreSQL.",
    problem:
      "Students hunting for scholarships face the same problem again and again: opportunities are scattered across university websites, forums, and social media, every application has different requirements, and there's no single place to track deadlines, documents, or progress across multiple applications at once.",
    solution:
      "Scholars brings scholarship discovery into one focused workflow. Students create a profile, discover opportunities they are eligible for, save the right ones, and track applications and deadlines from a single dashboard.",
    myRole:
      "I'm the founder and full-stack builder, responsible for the product direction, data model, authentication, discovery experience, application tracking, admin workflows, and production delivery.",
    features: [
      {
        name: "Personalized Discovery",
        description:
          "A structured student profile powers eligibility-aware discovery, helping students spend less time searching through opportunities that do not fit their background.",
      },
      {
        name: "Application Tracking",
        description:
          "Students can save opportunities and keep application statuses and deadlines visible from one dashboard instead of relying on scattered notes and browser tabs.",
      },
      {
        name: "Verified Scholarship Catalogue",
        description:
          "Admin review and evidence-aware listing workflows keep the catalogue useful and give students clearer paths to the source and application details.",
      },
    ],
    technologies: [
      {
        category: "Frontend & Framework",
        description:
          "A Next.js App Router frontend powers the public landing pages, onboarding, discovery, dashboard, applications, and admin surfaces.",
        items: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend & Data",
        description:
          "Supabase provides authentication and PostgreSQL data access, with background workflows and rate limiting supporting reliable production operations.",
        items: ["Supabase", "PostgreSQL", "Supabase Auth", "Inngest", "Upstash Redis"],
      },
    ],
    monetization:
      "Still early-stage — the current focus is MVP adoption across the first cohort of users before a monetization model is finalized.",
    summary:
      "Scholars is live at scholars.com.ng, with a public discovery experience and authenticated product flows for onboarding, profiles, saved opportunities, applications, and administration. The project is being developed toward a broader scholarship intelligence platform for students across Africa.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Inngest", "Upstash Redis"],
    liveUrl: "https://www.scholars.com.ng",
    previewImage: "/assets/scholars-homepage-preview.webp",
    repoUrl: "https://github.com/ImperioKDB/Scholars",
    images: [],
    nextSlug: "levyledger",
    featured: true,
  },
];
