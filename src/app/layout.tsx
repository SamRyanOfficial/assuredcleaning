import type { Metadata } from "next";
import { Caveat, Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/content/site";
import {
  getLocalBusinessSchema,
  getReviewSchemas,
  getWebSiteSchema,
} from "@/lib/schema";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Commercial Cleaning Tauranga, Mt Maunganui & Papamoa | Assured Cleaning Services",
    template: "%s | Assured Cleaning Services — Commercial Cleaning Tauranga",
  },
  description:
    "Professional commercial cleaning in Tauranga, Mt Maunganui, Papamoa and Te Puke. Consistently high standards, genuine care and Over & Above Reports. Book a free site visit.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    getLocalBusinessSchema(),
    getWebSiteSchema(),
    ...getReviewSchemas(),
  ];

  return (
    <html
      lang="en-NZ"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${caveat.variable} h-full antialiased`}
      style={{ ["--font-pacaembu" as string]: "var(--font-poppins)" }}
    >
      <body className="flex min-h-full flex-col bg-white text-slate-700">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
