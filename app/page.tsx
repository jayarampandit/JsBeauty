import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  DoorOpen,
  Facebook,
  Music2,
  ListChecks,
  Instagram,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import BookingLink from "@/components/BookingLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SalonImage from "@/components/SalonImage";
import SectionIntro from "@/components/SectionIntro";
import site from "@/data/site.json";

const benefitIcons = [Award, ListChecks, ShieldCheck];

export const metadata: Metadata = {
  title: "Beauty Salon in Pinole, CA",
  alternates: { canonical: "/" },
};

export default function Home() {
  const featuredPrices = site.serviceGroups.slice(0, 5);
  return (
    <main>
      <Header />
      <section className="hero-home">
        <div className="hero-media">
          <SalonImage
            src={site.hero.image}
            alt="Serene client representing natural beauty"
            fill
            priority
            sizes="100vw"
            className="hero-img-desktop"
          />
          <SalonImage
            src="/images/homebanner.png"
            alt="Serene client representing natural beauty"
            fill
            priority
            sizes="100vw"
            className="hero-img-mobile"
          />
          <div className="hero-wash" />
        </div>
        <div className="hero-content page-width">
          <h1>
            Embrace
            <br />
            the <em>beauty</em>
            <br />
            within.
          </h1>
          <p>{site.hero.description}</p>
          <div className="hero-actions">
            <BookingLink className="button solid">
              Book an appointment
            </BookingLink>
            <Link className="button outline" href="/services">
              View services
            </Link>
          </div>
          <span className="walkin">
            <DoorOpen size={18} /> Walk-ins welcome
          </span>
        </div>
      </section>
      <section
        className="service-showcase page-width"
        aria-label="Featured services"
      >
        {site.serviceCards.map((service) => (
          <article className="service-tile" key={service.name}>
            <div className="tile-image">
              <SalonImage
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 700px) 50vw, 25vw"
              />
            </div>
            <div>
              <h3>{service.name}</h3>
              <BookingLink>
                Book now <ArrowRight size={14} />
              </BookingLink>
            </div>
          </article>
        ))}
      </section>
      <section className="natural-section">
        <div className="natural-inner page-width">
          <div className="natural-copy">
            <div className="section-intro">
              <p className="eyebrow">{site.about.kicker}</p>
              <h2 dangerouslySetInnerHTML={{ __html: "Nourish your <em>natural beauty</em>" }} />
            </div>
            <div className="natural-collage-mobile">
              <SalonImage
                src={site.about.nourishImages.right}
                alt="Calming spa atmosphere at JS Beauty & Threading"
                fill
                sizes="100vw"
              />
            </div>
            <p className="natural-summary">{site.about.summary}</p>
            <div className="small-benefits">
              <span>Expert care</span>
              <span>Premium products</span>
              <span>Personalized for you</span>
            </div>
            <Link className="text-link" href="/about">
              Discover our story <ArrowRight size={15} />
            </Link>
          </div>
          <div className="natural-collage">
            <div className="collage-a">
              <SalonImage
                src={site.about.nourishImages.left}
                alt="Clients relaxing at JS Beauty & Threading"
                fill
                sizes="260px"
              />
            </div>
            <div className="collage-b">
              <SalonImage
                src={site.about.nourishImages.center}
                alt="Relaxing spa treatment at JS Beauty & Threading"
                fill
                sizes="260px"
              />
            </div>
            <div className="collage-c">
              <SalonImage
                src={site.about.nourishImages.right}
                alt="Calming spa atmosphere at JS Beauty & Threading"
                fill
                sizes="260px"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="benefits page-width">
        <SectionIntro title="Why choose JS Beauty?" centered />
        <div className="benefit-grid">
          {site.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <article key={benefit.title}>
                <span>
                  <Icon size={27} />
                </span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section id="gallery" className="gallery-section page-width">
        <div className="heading-row">
          <SectionIntro
            eyebrow="OUR WORK & SPACE"
            title="Inside the JS experience"
          />
          <Link className="text-link" href="/#gallery">
            View full gallery <ArrowRight size={15} />
          </Link>
        </div>
        <div className="gallery-row">
          {site.gallery.map((image) => (
            <figure key={image.label}>
              <SalonImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 700px) 45vw, 16vw"
              />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="pricing-home page-width">
        <div className="heading-row">
          {/* <SectionIntro eyebrow="HONEST, SIMPLE PRICING" title="Services & Pricing" /> */}
          <div className="heading-actions">
            <Link className="text-link" href="/services">
              View all prices <ArrowRight size={15} />
            </Link>
            <BookingLink className="button solid">
              Book now
            </BookingLink>
          </div>
        </div>
        <div className="pricing-preview">
          {featuredPrices.map((group) => (
            <article key={group.name} data-service={group.slug}>
              <div className="price-icon">
                <ServiceIcon service={group.slug} size={24} />
              </div>
              <h3>{group.name}</h3>
              {group.items.slice(0, 6).map((item) => (
                <div className="price-line" key={item.name}>
                  <span>{item.name}</span>
                  <b>{"price" in item ? `$${item.price}` : item.priceLabel}</b>
                </div>
              ))}
            </article>
          ))}
        </div>
        <div className="full-menu pricing-full-mobile">
          {site.serviceGroups.map((group) => (
            <article className="menu-group" key={group.name}>
              <div className="menu-group-heading">
                <span>
                  <ServiceIcon service={group.slug} size={24} />
                </span>
                <div>
                  <h2>{group.name}</h2>
                  <p>{group.description}</p>
                </div>
              </div>
              <div className="menu-items">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <span>{item.name}</span>
                    <i />
                    <b>{"price" in item ? `$${item.price}` : item.priceLabel}</b>
                  </div>
                ))}
              </div>
              <BookingLink className="button solid">Book {group.name}</BookingLink>
            </article>
          ))}
        </div>
      </section>
      <section className="self-love">
        <span>Relax</span>
        <b>·</b>
        <span>Self Care</span>
        <b>·</b>
        <span>Self Love</span>
        <b>·</b>
        <em>Treat Yourself</em>
      </section>
      <section className="reviews-home page-width">
        <SectionIntro
          eyebrow="KIND WORDS"
          title="What our clients say"
          centered
        />
        <div className="review-grid">
          {site.reviews.slice(0, 3).map((review) => (
            <blockquote key={review.name}>
              <div className="review-stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              {review.quote ? (
                <p className="review-quote">“{review.quote}”</p>
              ) : (
                <p className="review-summary">{review.summary}</p>
              )}
              <footer>
                <span>{review.name.charAt(0)}</span>
                <div>
                  <b>{review.name}</b>
                  <small>{review.relativeDate}</small>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
        <Link className="text-link review-link" href="/reviews">
          Read all client stories <ArrowRight size={15} />
        </Link>
      </section>
      <section className="social-strip page-width">
        <div className="heading-row">
          <SectionIntro title="Follow our beauty journey" />
          <div className="social-labels">
            <span>
              <Instagram size={17} /> Instagram
            </span>
            <span><Facebook size={17} aria-hidden="true" /> Facebook</span>
            <span><Music2 size={17} aria-hidden="true" /> TikTok</span>
          </div>
        </div>
        <div className="social-grid">
          {site.gallery.map((image) => (
            <div key={image.label}>
              <SalonImage src={image.src} alt={image.alt} fill sizes="150px" />
            </div>
          ))}
        </div>
      </section>
      <section className="visit-section page-width">
        <article className="visit-card">
          <p className="eyebrow">VISIT US</p>
          <h2>{site.business.addressLine1}</h2>
          <p>{site.business.addressLine2}</p>
          <a href={site.business.directionsUrl}>
            <MapPin size={17} /> Get directions
          </a>
          <a href={`tel:${site.business.phoneHref}`}>
            <Phone size={17} /> {site.business.phoneDisplay}
          </a>
        </article>
        <article className="hours-card">
          <p className="eyebrow">OPENING HOURS</p>
          {site.hours.map((item) => (
            <div key={item.day}>
              <span>{item.day}</span>
              <b>{item.hours}</b>
            </div>
          ))}
        </article>
        <a
          className="map-visual"
          href={site.business.directionsUrl}
          aria-label="Open directions to JS Beauty & Threading"
        >
          <span className="map-road r1" />
          <span className="map-road r2" />
          <span className="map-road r3" />
          <span className="map-pin">
            <MapPin size={25} fill="currentColor" />
          </span>
          <b>{site.business.addressLine1}</b>
        </a>
        <article className="ready-card">
          <CalendarCheck size={32} />
          <h2>Ready to glow?</h2>
          <p>Book your appointment today and let us take care of the rest.</p>
          <BookingLink className="button light">
            Book your visit
          </BookingLink>
        </article>
      </section>
      <Footer />
    </main>
  );
}
