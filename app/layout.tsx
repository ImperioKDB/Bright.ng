import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright — Full-stack Developer",
  description:
    "Bright is a full-stack developer and Software Engineering student at UNIBEN building Scholars and useful products for real users.",
  openGraph: {
    title: "Bright — Full-stack Developer",
    description:
      "Full-stack developer building products that have to work outside the demo.",
    url: "https://brightng.vercel.app",
    siteName: "Bright",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright — Full-stack Developer",
    description:
      "Full-stack developer building products that have to work outside the demo.",
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
