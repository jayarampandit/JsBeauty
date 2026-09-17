import SalonImage from "./SalonImage";

export default function InnerHero({ eyebrow, title, copy, image, mobileImage, brightOverlay }: { eyebrow: string; title: string; copy: string; image: string; mobileImage?: string; brightOverlay?: boolean }) {
  const classes = ["inner-hero", mobileImage && "inner-hero-split-wash", brightOverlay && "inner-hero-bright"].filter(Boolean).join(" ");
  return <section className={classes}><SalonImage src={image} alt="" fill priority sizes="100vw" className={mobileImage ? "inner-hero-img-desktop" : undefined} />{mobileImage && <SalonImage src={mobileImage} alt="" fill priority sizes="100vw" className="inner-hero-img-mobile" />}<div className="inner-hero-wash" /><div className="page-width"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}
