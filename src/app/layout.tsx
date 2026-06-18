import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  createMetadata,
  organizationJsonLd,
  localBusinessJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { CookieBanner } from "@/components/CookieBanner";
import { UrgencyBanner } from "@/components/UrgencyBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  ...createMetadata(),
  icons: {
    icon: "/assets/images/Hacksure.png",
    apple: "/assets/images/Hacksure.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className="font-sans">
        <UrgencyBanner />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
