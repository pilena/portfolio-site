import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lenka Živković — Frontend Developer",
  description: "Frontend developer specializing in React and Next.js. Five years of experience delivering complete web solutions from concept to production.",
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
