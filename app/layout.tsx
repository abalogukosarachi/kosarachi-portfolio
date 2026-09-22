import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kosarachi-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Kosarachi Portfolio",
    template: "%s | Kosarachi Portfolio",
  },

  description:
    "Abalogu Kosarachi Favour — Web Developer, UI/UX Designer, Virtual Assistant, and Customer Support Specialist.",

  keywords: [
    "Abalogu Kosarachi Favour",
    "Kosarachi Portfolio",
    "Web Developer",
    "UI/UX Designer",
    "Virtual Assistant",
    "Customer Support Specialist",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
  ],

  authors: [
    {
      name: "Abalogu Kosarachi Favour",
    },
  ],

  creator: "Abalogu Kosarachi Favour",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Kosarachi Portfolio",
    description:
      "Abalogu Kosarachi Favour — Web Developer, UI/UX Designer, Virtual Assistant, and Customer Support Specialist.",
    url: siteUrl,
    siteName: "Kosarachi Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kosarachi Portfolio",
    description:
      "Abalogu Kosarachi Favour — Web Developer, UI/UX Designer, Virtual Assistant, and Customer Support Specialist.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}