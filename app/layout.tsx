import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/navbar1";
import { Footer2 } from "@/components/footer2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sleek E-Bikes | Premium Electric Bikes & Repair Services",
    template: "%s | Sleek E-Bikes",
  },
  description:
    "Buy high-performance, eco-friendly electric bikes and motorcycles with up to 100km range, 120km/h top speed, fast charging, and a 6-month warranty. Professional repairs and servicing available.",
  keywords: [
    "Sleek E-Bikes",
    "electric bikes Nigeria",
    "buy electric motorcycle",
    "e-bike repair and service",
    "fast charge e-bikes",
    "waterproof electric bike",
    "cargo electric motorcycle",
    "eco-friendly transportation",
    "electric bike showroom Hospital Road",
  ],
  authors: [{ name: "Sleek E-Bikes" }],
  creator: "Sleek E-Bikes",
  publisher: "Sleek E-Bikes",
  metadataBase: new URL("https://sleekebikes.com"), // Replace with actual production domain when live
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sleek E-Bikes | Eco-Friendly Electric Bikes & Fast Repairs",
    description:
      "Cut fuel costs and beat traffic with high-performance electric motorcycles. 100km range, 2-3 hour fast charge, and official 6-month warranty.",
    url: "https://sleekebikes.com",
    siteName: "Sleek E-Bikes",
    images: [
      {
        url: "/og-image.png", // Replace with high-res banner or og-image if available
        width: 1200,
        height: 630,
        alt: "Sleek E-Bikes Electric Motorcycle Lineup",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleek E-Bikes | Electric Motorcycles & Repair Services",
    description:
      "Effortless daily commuting and deliveries with fast-charging, long-range electric bikes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar1 />
        <main className="flex-grow pt-16 md:pt-20">{children}</main>
        <Footer2 />
      </body>
    </html>
  );
}