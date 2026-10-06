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
    default: "Orbantis Technologies | Digital Products & Technology",
    template: "%s | Orbantis Technologies",
  },
  description:
    "Orbantis Technologies designs and builds digital products, strategy-led systems, and transformation experiences for ambitious businesses.",
  keywords: [
    "Orbantis Technologies",
    "digital products",
    "technology solutions",
    "digital product strategist",
    "web development",
  ],
  openGraph: {
    title: "Orbantis Technologies | Digital Products & Technology",
    description:
      "Orbantis Technologies builds digital products and technology solutions that help ambitious businesses move forward.",
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
