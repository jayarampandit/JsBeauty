"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import site from "@/data/site.json";
import { openBookingWidget } from "./BookingScheduler";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export default function BookingLink({ children, onClick, ...props }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (openBookingWidget()) {
      event.preventDefault();
    }
    onClick?.(event);
  }

  return (
    <a href={site.business.bookingUrl} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
