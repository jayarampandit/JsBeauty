import { Award, Heart, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerHero from "@/components/InnerHero";
import SalonImage from "@/components/SalonImage";
import site from "@/data/site.json";

const icons = [Award, Heart, ShieldCheck];
export default function AboutPage() {
  return <main><Header /><InnerHero eyebrow="GET TO KNOW US" title="Beauty with heart" copy="More than a decade of skill, care and a commitment to helping every client feel confident." image="/images/bannermain.jpg" /><section className="story-page page-width"><div className="story-photo"><SalonImage src="/images/sita.jpg" alt="Sita, founder of JS Beauty & Threading" fill sizes="(max-width: 800px) 100vw, 46vw" /></div><div className="story-body"><p className="eyebrow">OUR STORY</p><h2>{site.about.storyTitle}</h2>{site.about.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="founder-signature"><b>{site.about.founder}</b><span>{site.about.founderRole}</span></div></div></section><section className="about-values page-width"><p className="eyebrow">WHY CLIENTS RETURN</p><h2>A thoughtful standard of care</h2><div>{site.benefits.map((benefit, index) => { const Icon = icons[index]; return <article key={benefit.title}><span><Icon /></span><h3>{benefit.title}</h3><p>{benefit.description}</p></article>; })}</div></section><Footer /></main>;
}
