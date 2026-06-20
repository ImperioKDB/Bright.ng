import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright — Full-stack Developer",
  description:
    "100-level Software Engineering student at UNIBEN building full-stack SaaS products, e-commerce platforms, and tools for Nigerian markets — entirely from a phone.",
  openGraph: {
    title: "Bright — Full-stack Developer",
    description:
      "Full-stack developer building products from the ground up, entirely from a phone.",
    url: "https://brightng.vercel.app",
    siteName: "Bright",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright — Full-stack Developer",
    description:
      "Full-stack developer building products from the ground up, entirely from a phone.",
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
