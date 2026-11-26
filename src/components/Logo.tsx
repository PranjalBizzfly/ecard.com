import Image from "next/image";
import Link from "next/link";

/** eCard logo: 36px mark + wordmark in the brand typeface (font-brand). Mark spins on hover inside the header (.site-header .logo). */
export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="logo flex items-center gap-2.5" aria-label="eCard home">
      <Image src="/brand/ecard-icon.svg" alt="" width={36} height={36} priority />
      <span className={`font-brand text-xl font-bold tracking-tight ${invert ? "text-white" : "text-ink-950"}`}>eCard</span>
    </Link>
  );
}
