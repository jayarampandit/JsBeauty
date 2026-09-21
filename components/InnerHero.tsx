import SalonImage from "./SalonImage";

export default function InnerHero({
  eyebrow,
  title,
  copy,
  image,
  mobileImage,
  brightOverlay,
  noImageMobile,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image?: string;
  mobileImage?: string;
  brightOverlay?: boolean;
  noImageMobile?: boolean;
}) {
  const classes = [
    "inner-hero",
    mobileImage && "inner-hero-split-wash",
    brightOverlay && "inner-hero-bright",
    noImageMobile && "inner-hero-no-image-mobile",
    !image && "inner-hero-no-image",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={classes}>
      {image && (
        <SalonImage
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className={mobileImage ? "inner-hero-img-desktop" : undefined}
        />
      )}
      {image && mobileImage && (
        <SalonImage
          src={mobileImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="inner-hero-img-mobile"
        />
      )}
      <div className="inner-hero-wash" />
      <div className="page-width">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}
