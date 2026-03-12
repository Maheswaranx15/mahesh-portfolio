import Link from "next/link";
import { personalBrand } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex w-[min(1200px,94vw)] flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-amber/70">Dark Systems Studio</p>
          <p className="mt-2 text-xl font-semibold text-white">{personalBrand.name}</p>
          <p className="mt-2 max-w-lg text-sm text-mist">{personalBrand.title}</p>
        </div>
        <div className="space-y-2 text-sm text-mist">
          <p>{personalBrand.location}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={personalBrand.linkedin} className="hover:text-ice transition">LinkedIn</Link>
            <Link href={personalBrand.github} className="hover:text-ice transition">GitHub</Link>
            <Link href="mailto:maheshwarankr.98@gmail.com" className="hover:text-ice transition">Email</Link>
          </div>
          <p className="text-xs text-white/40">Built with Next.js, Framer Motion, and a noir-tech design system.</p>
        </div>
      </div>
    </footer>
  );
}
