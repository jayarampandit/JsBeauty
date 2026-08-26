import SalonImage from "./SalonImage";

export default function InnerHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image: string }) {
  return <section className="inner-hero"><SalonImage src={image} alt="" fill priority sizes="100vw" /><div className="inner-hero-wash" /><div className="page-width"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}
