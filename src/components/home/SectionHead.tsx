import type { ReactNode } from "react";
import { toTitleCase } from "@/lib/text";

/** Reference section-heading pattern (spec §4): pill, title with gradient accent, lead. */
export function SectionHead({ pill, title, accent, lead, align = "center", as: H = "h2" }: { pill: string; title: string; accent?: string; lead?: ReactNode; align?: "center" | "left"; as?: "h2" | "h3" }) {
  const c = align === "center";
  return (
    <div className={c ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      <span className="hm-pill">{toTitleCase(pill)}</span>
      <H className="hm-title mt-5">{toTitleCase(title)}{accent && <> <span className="hm-accent">{toTitleCase(accent)}</span></>}</H>
      {lead && <p className={`hm-lead mt-5 max-w-2xl ${c ? "mx-auto" : ""}`}>{lead}</p>}
    </div>
  );
}
