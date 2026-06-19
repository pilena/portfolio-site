import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://lenka-zivkovic.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Lenka Živković — Frontend Developer",
    template: "%s | Lenka Živković",
  },
  description:
    "Frontend developer specializing in React and Next.js with five years of experience. Based in Serbia, available for remote work.",
  keywords: [
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "GraphQL",
    "Serbia",
    "remote",
    "web developer",
  ],
  authors: [{ name: "Lenka Živković", url: BASE_URL }],
  creator: "Lenka Živković",
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Lenka Živković — Frontend Developer",
    description:
      "Frontend developer specializing in React and Next.js with five years of experience. Based in Serbia, available for remote work.",
    siteName: "Lenka Živković Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenka Živković — Frontend Developer",
    description:
      "Frontend developer specializing in React and Next.js with five years of experience. Based in Serbia, available for remote work.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
