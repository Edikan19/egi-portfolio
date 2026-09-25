import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://egi-portfolio-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

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
    url: siteUrl,
    siteName: "Edikan Gabriel Inyang",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 1200,
        alt: "Edikan Gabriel Inyang — Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Edikan Gabriel Inyang — Software Developer",
    description:
      "Computer Engineer and Software Developer building thoughtful digital products that solve real-world problems.",
    images: ["/profile.jpeg"],
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

