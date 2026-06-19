import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright — Portfolio",
  description: "Full-stack developer building products from the ground up.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
