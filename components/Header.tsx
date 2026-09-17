"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Instagram, Facebook, Music2, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import site from "@/data/site.json";
import BookingLink from "@/components/BookingLink";

export function Logo() {
  return (
    <Link className="logo" href="/">
      <Image src="/images/mainlogotransparent.png" alt="JS Beauty & Threading" width={190} height={83} priority />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <div className="topbar page-width"><span><Mail size={13} />{site.business.email}</span><a href={`tel:${site.business.phoneHref}`}><Phone size={13} />{site.business.phoneDisplay}</a><span><Clock3 size={13} />Tue–Sat 10 AM–7 PM · Sun 11 AM–6 PM</span><div className="top-social"><Instagram size={15} /><Facebook size={17} aria-label="Facebook" /><Music2 size={17} aria-label="TikTok" /></div></div>
    <header className="header page-width"><Logo /><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? "nav open" : "nav"}><Link onClick={close} href="/">Home</Link><Link onClick={close} href="/services">Services</Link><Link onClick={close} href="/#gallery">Gallery</Link><Link onClick={close} href="/about">Our Story</Link><Link onClick={close} href="/reviews">Reviews</Link><Link onClick={close} href="/contact">Contact</Link></nav><BookingLink className="button solid header-book">Book now</BookingLink></header>
  </>;
}
