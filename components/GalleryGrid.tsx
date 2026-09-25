"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SalonImage from "./SalonImage";

type GalleryPhoto = { src: string; alt: string; label: string };

export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
  const showNext = () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length));

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const active = activeIndex === null ? null : photos[activeIndex];

  return (
    <>
      <div className="full-gallery-grid">
        {photos.map((photo, index) => (
          <button
            type="button"
            className="full-gallery-item"
            key={photo.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${photo.label} photo full size`}
          >
            <SalonImage src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 45vw, 22vw" />
            <span>{photo.label}</span>
          </button>
        ))}
      </div>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className="lightbox-close" aria-label="Close" onClick={close}>
            <X size={26} />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <ChevronLeft size={30} />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight size={30} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.label}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
