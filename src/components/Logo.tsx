import Image from "next/image";
import Link from "next/link";

export function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="eCard home">
      <Image src="/brand/ecard-icon.svg" alt="" width={30} height={30} priority />
      <span className={`font-brand text-xl font-bold tracking-tight ${invert ? "text-white" : "text-ink-950"}`}>eCard</span>
    </Link>
  );
}
