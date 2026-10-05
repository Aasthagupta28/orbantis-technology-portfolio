import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orbantistechnologies.com"),
  title: {
    default: "Arun Kumar Bhardwaj | Founder, Orbantis Technologies",
    template: "%s | Arun Kumar Bhardwaj",
  },
  description:
    "Arun Kumar Bhardwaj is the founder and technology entrepreneur behind Orbantis Technologies, building digital products, strategy-led systems and transformation experiences for ambitious businesses.",
  keywords: [
    "Arun Kumar Bhardwaj",
    "Orbantis Technologies",
    "technology entrepreneur",
    "founder portfolio",
    "digital product strategist",
    "web development",
  ],
  openGraph: {
    title: "Arun Kumar Bhardwaj | Founder, Orbantis Technologies",
    description:
      "Founder-led portfolio of Arun Kumar Bhardwaj, building digital innovation through Orbantis Technologies.",
    url: "https://orbantistechnologies.com",
    siteName: "Orbantis Technologies",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--paper)] text-[var(--foreground)]">{children}</body>
    </html>
  );
}
