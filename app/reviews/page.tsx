import type { Metadata } from "next";
import { Star } from "lucide-react";
import BookingLink from "@/components/BookingLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerHero from "@/components/InnerHero";
import site from "@/data/site.json";

export const metadata: Metadata = {
  title: "Client Reviews",
  description: "Read client experiences with threading, waxing, lashes and personalized beauty care at JS Beauty & Threading in Pinole, CA.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return <main><Header /><InnerHero eyebrow="CLIENT STORIES" title="Kind words, beautiful confidence" copy="A few reflections from clients who trusted us with their brows, lashes, waxing and self-care." image="/images/reveiwlong.jpg" noImageMobile /><section className="reviews-page page-width">{site.reviews.map((review) => <blockquote key={review.name}><div>{Array.from({ length: review.rating }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div>{review.quote ? <p className="review-quote">“{review.quote}”</p> : <p className="review-summary">{review.summary}</p>}<footer><span>{review.name.charAt(0)}</span><div><b>{review.name}</b><small>{review.relativeDate}</small></div></footer></blockquote>)}</section><div className="review-cta page-width"><h2>Ready for your own JS Beauty experience?</h2><BookingLink className="button solid">Book an appointment</BookingLink></div><Footer /></main>;
}
