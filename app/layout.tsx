import type { Metadata } from "next";
import site from "@/data/site.json";
import "./globals.css";

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JS Beauty & Threading | Beauty Salon in Pinole, CA",
    template: "%s | JS Beauty & Threading",
  },
  description: "Beauty salon in Pinole, CA offering threading, waxing, lash extensions, lash lifts, brow lamination, henna and bridal hair and makeup.",
  applicationName: site.business.name,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  keywords: [
    "beauty salon Pinole CA",
    "eyebrow threading Pinole",
    "waxing Pinole",
    "lash extensions Pinole",
    "lash lift Pinole",
    "brow lamination Pinole",
    "bridal hair and makeup Pinole",
    "henna tattoo Pinole",
  ],
  alternates: { canonical: "/" },
  category: "beauty",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.business.name,
    title: "JS Beauty & Threading | Beauty Salon in Pinole, CA",
    description: "Threading, waxing, lashes, brow lamination, henna and bridal beauty services with personalized care in Pinole.",
    images: [{ url: "/images/og.png", width: 1731, height: 909, alt: "JS Beauty & Threading in Pinole, California" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JS Beauty & Threading | Beauty Salon in Pinole, CA",
    description: "Personalized threading, waxing, lashes, henna and bridal beauty services in Pinole, California.",
    images: ["/images/og.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${siteUrl}/#beauty-salon`,
  name: site.business.name,
  url: siteUrl,
  image: new URL("/images/og.png", siteUrl).toString(),
  description: "Personalized threading, waxing, lash, brow, henna and bridal beauty services in Pinole, California.",
  telephone: site.business.phoneHref,
  email: site.business.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.business.addressLine1,
    addressLocality: site.business.city,
    addressRegion: site.business.state,
    postalCode: "94564",
    addressCountry: "US",
  },
  areaServed: { "@type": "City", name: site.business.city },
  hasMap: site.business.directionsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c") }} /></body></html>;
}
