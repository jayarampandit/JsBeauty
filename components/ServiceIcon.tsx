import { Brush, Hand, type LucideProps } from "lucide-react";

type ServiceIconProps = LucideProps & { service: string };

/** Treatment-specific line icons, matching the site's Lucide stroke style. */
export default function ServiceIcon({ service, size = 24, ...props }: ServiceIconProps) {
  if (service === "bridal-hair-makeup") return <Brush size={size} aria-hidden="true" {...props} />;
  if (service === "henna") return <Hand size={size} aria-hidden="true" {...props} />;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {service === "threading" ? (
        <>
          <path d="M3 5 21 19M21 5 3 19M3 5h18M3 19h18" />
          <path d="m10 10 4 4m-4-2 2 2" />
        </>
      ) : service === "waxing" ? (
        <>
          <path d="M4 13h16l-1.5 7h-13Z" />
          <path d="m12 13 5-9a2 2 0 0 1 3 2l-4 7M3 13h18" />
          <path d="M8 16h4" />
        </>
      ) : (
        <>
          <path d="M3 9q9 10 18 0M5 11l-2 3m5-1-1 4m5-3v4m4-5 1 4m2-6 2 3" />
          {service === "lash-lift-tint" ? <path d="M9 5 12 2l3 3M12 2v6" /> : <path d="m5 6-2 2m6 0-1 2m7-2 1 2m3-4 2 2" />}
        </>
      )}
    </svg>
  );
}
