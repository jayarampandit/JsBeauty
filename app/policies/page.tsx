import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerHero from "@/components/InnerHero";
import site from "@/data/site.json";

const labels: Record<string, string> = { appointments: "Appointments & Walk-ins", cancellations: "Cancellations", lateArrivals: "Late Arrivals", health: "Health & Safety", pricing: "Pricing", refunds: "Service Satisfaction" };
export default function PoliciesPage() {
  return <main><Header /><InnerHero eyebrow="HELPFUL DETAILS" title="Salon policies" copy="Clear expectations help us protect your time, comfort and experience." image="/images/salon.png" /><section className="policies-page page-width">{Object.entries(site.policies).map(([key, value]) => <article key={key}><h2>{labels[key]}</h2><p>{value}</p></article>)}<p className="policy-contact">Questions? Call <a href={`tel:${site.business.phoneHref}`}>{site.business.phoneDisplay}</a> before your visit.</p></section><Footer /></main>;
}
