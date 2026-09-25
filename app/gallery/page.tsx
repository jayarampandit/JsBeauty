import type { Metadata } from "next";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import Header from "@/components/Header";
import InnerHero from "@/components/InnerHero";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Browse photos of threading, lash extensions, waxing, henna, bridal and brow lamination work at JS Beauty & Threading in Pinole, CA.",
  alternates: { canonical: "/gallery" },
};

const CATEGORY_ORDER = [
  "Our studio",
  "Threading",
  "Waxing",
  "Lash Extensions",
  "Lash Lift",
  "Lash Tint",
  "Lashes",
  "Brow Lamination",
  "Bridal",
  "Henna",
  "Before & After",
];

const sortedGallery = [...site.gallery].sort(
  (a, b) => CATEGORY_ORDER.indexOf(a.label) - CATEGORY_ORDER.indexOf(b.label)
);

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <InnerHero eyebrow="OUR WORK & SPACE" title="Our Gallery" />
      <section className="full-gallery page-width">
        <GalleryGrid photos={sortedGallery} />
      </section>
      <Footer />
    </main>
  );
}
