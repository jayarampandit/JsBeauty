"use client";

import Link from "next/link";
import { Clock3, Instagram, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import site from "@/data/site.json";

export function Logo() {
  return <Link className="logo" href="/"><span>JS</span><small>BEAUTY & THREADING</small></Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <div className="topbar page-width"><span><Mail size={13} />{site.business.email}</span><a href={`tel:${site.business.phoneHref}`}><Phone size={13} />{site.business.phoneDisplay}</a><span><Clock3 size={13} />Tue–Sat 10 AM–7 PM · Sun 11 AM–6 PM</span><div className="top-social"><Instagram size={15} /><b>f</b><b>♪</b></div></div>
    <header className="header page-width"><Logo /><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? "nav open" : "nav"}><Link onClick={close} href="/">Home</Link><Link onClick={close} href="/services">Services</Link><Link onClick={close} href="/#gallery">Gallery</Link><Link onClick={close} href="/about">Our Story</Link><Link onClick={close} href="/reviews">Reviews</Link><Link onClick={close} href="/contact">Contact</Link></nav><a className="button solid header-book" href={site.business.bookingUrl}>Book now</a></header>
  </>;
}
