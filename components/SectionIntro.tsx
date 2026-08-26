export default function SectionIntro({ eyebrow, title, copy, centered = false }: { eyebrow?: string; title: string; copy?: string; centered?: boolean }) {
  return <div className={centered ? "section-intro centered" : "section-intro"}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 dangerouslySetInnerHTML={{ __html: title }} />{copy && <p>{copy}</p>}</div>;
}
