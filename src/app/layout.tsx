import type { Metadata } from "next";
import { Urbanist, Outfit } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-heading",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Raphael Bautista",
  description: "IT Support Specialist and Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
