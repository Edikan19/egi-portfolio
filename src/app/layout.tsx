import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Edikan Gabriel Inyang — Software Developer",
    template: "%s — Edikan Gabriel Inyang",
  },

  description:
    "Portfolio of Edikan Gabriel Inyang, a Computer Engineer and Software Developer building thoughtful digital products that solve real-world problems.",

  keywords: [
    "Edikan Gabriel Inyang",
    "Edikan Inyang",
    "EGI",
    "Software Developer",
    "Computer Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "TypeScript Developer",
  ],

  authors: [
    {
      name: "Edikan Gabriel Inyang",
    },
  ],

  creator: "Edikan Gabriel Inyang",
  publisher: "Edikan Gabriel Inyang",

  metadataBase: new URL("https://example.com"),

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Edikan Gabriel Inyang — Software Developer",
    description:
      "Computer Engineer and Software Developer building thoughtful digital products that solve real-world problems.",
    type: "website",
    locale: "en_US",
    siteName: "Edikan Gabriel Inyang",
  },

  twitter: {
    card: "summary_large_image",
    title: "Edikan Gabriel Inyang — Software Developer",
    description:
      "Computer Engineer and Software Developer building thoughtful digital products that solve real-world problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}