import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import site from "@/data/site.json";
import { Logo } from "./Header";

export default function Footer() {
  return <footer className="footer"><div className="footer-grid page-width"><div><Logo /><p>Thoughtful beauty care in Pinole, with precise technique, warm service and results that feel naturally you.</p><div className="footer-social"><Instagram size={17} /><b>f</b><b>♪</b></div></div><div><h3>Quick links</h3><Link href="/">Home</Link><Link href="/services">Services & Pricing</Link><Link href="/about">Our Story</Link><Link href="/reviews">Reviews</Link><Link href="/contact">Contact</Link></div><div><h3>Popular services</h3>{site.serviceCards.slice(0,6).map((item) => <Link href={`/services#${item.slug}`} key={item.name}>{item.name}</Link>)}</div><div><h3>Visit & connect</h3><a href={site.business.directionsUrl}><MapPin size={14} />{site.business.addressLine1}<br />{site.business.addressLine2}</a><a href={`tel:${site.business.phoneHref}`}><Phone size={14} />{site.business.phoneDisplay}</a><a href={`mailto:${site.business.email}`}><Mail size={14} />{site.business.email}</a></div></div><div className="footer-bottom page-width"><span>© 2026 {site.business.name}. All rights reserved.</span><Link href="/policies">Policies & Terms</Link></div></footer>;
}
