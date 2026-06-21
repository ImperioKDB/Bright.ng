import type { Metadata } from "next";
import ProjectsIndexContent from "@/components/ProjectsIndexContent";

export const metadata: Metadata = {
  title: "Projects — Bright",
  description: "All projects built by Bright — SaaS, e-commerce, and EdTech platforms.",
};

export default function ProjectsIndexPage() {
  return <ProjectsIndexContent />;
}
