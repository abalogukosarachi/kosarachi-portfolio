import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kosarachi-portfolio.vercel.app"),

  title: "Kosarachi Portfolio",

  description:
    "Abalogu Kosarachi Favour — Web Developer, UI/UX Designer, Virtual Assistant, and Customer Support Specialist.",

  verification: {
    google: "TyBsYraI2ACk0eYu1V8BK5kfEVtea444qX_SbgkL5Lk",
  },

  openGraph: {
    title: "Kosarachi Portfolio",
    description:
      "Abalogu Kosarachi Favour — Web Developer, UI/UX Designer, Virtual Assistant, and Customer Support Specialist.",
    url: "https://kosarachi-portfolio.vercel.app/",
    siteName: "Kosarachi Portfolio",
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