import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerHero from "@/components/InnerHero";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Contact & Opening Hours",
  description: "Contact JS Beauty & Threading at 624 San Pablo Ave B in Pinole, CA. View salon hours, call for an appointment or get directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <main><Header /><InnerHero eyebrow="VISIT JS BEAUTY" title="We would love to see you" copy="Call for an appointment, stop by when walk-in space is available, or open directions to our Pinole salon." image="/images/facial.png" /><section className="contact-page page-width"><div className="contact-cards"><a href={`tel:${site.business.phoneHref}`}><Phone /><span><small>Call us</small><b>{site.business.phoneDisplay}</b></span></a><a href={`mailto:${site.business.email}`}><Mail /><span><small>Email us</small><b>{site.business.email}</b></span></a><a href={site.business.directionsUrl}><MapPin /><span><small>Find us</small><b>{site.business.addressLine1}<br />{site.business.addressLine2}</b></span></a></div><div className="contact-hours"><h2><Clock3 /> Opening hours</h2>{site.hours.map((item) => <div key={item.day}><span>{item.day}</span><b className={item.closed ? "closed" : ""}>{item.hours}</b></div>)}<a className="button solid" href={site.business.bookingUrl}>Call to book</a></div></section><Footer /></main>;
}
