import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DityArt Studio",
    template: "%s | DityArt Studio",
  },
  description:
    "Creative studio for personalized gifts, kids stationery, and thoughtful corporate branding.",
  keywords: [
    "Customized Gifts",
    "Kids Stationery",
    "Personalized Products",
    "Branding",
    "Corporate Branding",
    "DityArt Studio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
