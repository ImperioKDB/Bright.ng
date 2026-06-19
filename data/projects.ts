export interface Project {
  slug: string;
  title: string;
  category: string;
  status: "Active" | "Archived";
  description: string;
  image: string;
}

export const projects: Project[] = [
  // Add your projects here
];
