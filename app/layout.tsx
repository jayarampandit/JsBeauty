import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JS Beauty & Threading | Pinole, CA",
  description: "Precision threading, waxing, lashes, facials and henna with personalized care in Pinole, California.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "JS Beauty & Threading | Pinole, CA",
    description: "Embrace the beauty within with thoughtful, personalized salon care.",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "JS Beauty & Threading in Pinole, California" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
