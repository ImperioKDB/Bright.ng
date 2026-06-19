import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright — Portfolio",
  description: "Full-stack developer building products from the ground up — entirely from a phone.",
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
