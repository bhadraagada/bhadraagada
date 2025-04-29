import { Layout } from "@/components/main-layout";
import { MotionDiv } from "@/components/motion-div";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Bhadra Gada | Portfolio",
  description:
    "Bhadar Gada is a full stack developer with an experience of 3+ years.",
  authors: [
    {
      name: "Bhadra Gada",
    },
  ],
  keywords: [
    "bhadra",
    "gada",
    "portfolio",
    "nextjs",
    "react",
    "tailwind",
    "next",
    "html",
    "css",
    "javascript",
    "js",
    "modern-ui",
    "modern-ux",
    "framer-motion",
    "3d-website",
    "particle-effec",
  ],
  // themeColor: "#f13024",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>
        <Layout>
          <MotionDiv />
        </Layout>
      </body>
    </html>
  );
}
