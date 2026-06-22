import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright — Full-stack Developer",
  description:
    "Software Engineering student at UNIBEN building full-stack SaaS, e-commerce, and EdTech products for real users across Nigerian markets.",
  openGraph: {
    title: "Bright — Full-stack Developer",
    description:
      "Full-stack developer building SaaS, e-commerce, and EdTech products from concept to production.",
    url: "https://brightng.vercel.app",
    siteName: "Bright",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright — Full-stack Developer",
    description:
      "Full-stack developer building SaaS, e-commerce, and EdTech products from concept to production.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-text font-body antialiased">{children}</body>
    </html>
  );
}
