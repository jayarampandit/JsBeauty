"use client";

import Script from "next/script";
import { useRef } from "react";
import site from "@/data/site.json";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (opts: {
          url: string;
          color?: string;
          label?: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

const HOST_ID = "gcal-booking-host";
const TRIGGER_ID = "gcal-booking-trigger";

export function openBookingWidget() {
  const trigger = document.getElementById(TRIGGER_ID);
  if (trigger) {
    trigger.click();
    return true;
  }
  return false;
}

export default function BookingScheduler() {
  const hostRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  function init() {
    if (loaded.current || !hostRef.current || !window.calendar) return;
    loaded.current = true;
    const host = hostRef.current;
    window.calendar.schedulingButton.load({
      url: site.business.schedulingUrl,
      color: "#039BE5",
      label: "Book an appointment",
      target: host,
    });
    // Google inserts the real button as a sibling right after the target
    // (insertAdjacentElement("afterend", ...)), not inside it, so it must
    // be located and hidden separately from the host element.
    const button = host.nextElementSibling as HTMLElement | null;
    if (button) {
      button.id = TRIGGER_ID;
      button.style.position = "fixed";
      button.style.left = "-9999px";
      button.style.top = "-9999px";
    }
  }

  return (
    <>
      <link
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
        rel="stylesheet"
      />
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="afterInteractive"
        onLoad={init}
        onReady={init}
      />
      <div
        id={HOST_ID}
        ref={hostRef}
        style={{ position: "fixed", left: -9999, top: -9999 }}
        aria-hidden="true"
      />
    </>
  );
}
