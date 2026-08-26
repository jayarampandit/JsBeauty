import { Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerHero from "@/components/InnerHero";
import site from "@/data/site.json";

export default function ServicesPage() {
  return <main><Header /><InnerHero eyebrow="OUR COMPLETE MENU" title="Services & Pricing" copy="Explore every treatment and current price. Call when you are ready and we will help you choose the right service." image="/images/lashes.png" /><section className="full-menu page-width">{site.serviceGroups.map((group) => <article id={group.slug} className="menu-group" key={group.name}><div className="menu-group-heading"><span><Sparkles size={22} /></span><div><h2>{group.name}</h2><p>{group.description}</p></div></div><div className="menu-items">{group.items.map((item) => <div key={item.name}><span>{item.name}</span><i /><b>{"price" in item ? `$${item.price}` : item.priceLabel}</b></div>)}</div><a className="button solid" href={site.business.bookingUrl}>Book {group.name}</a></article>)}</section><p className="price-note page-width">Prices are subject to change. We will confirm your treatment and current price when you book.</p><Footer /></main>;
}
