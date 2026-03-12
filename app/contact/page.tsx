import { Metadata } from "next";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import { personalBrand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Maheshwaran Ramesh for blockchain architecture, DeFi protocol builds, and infrastructure design engagements.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-[min(900px,92vw)] space-y-8 pb-24">
      <MotionSection className="rounded-3xl border border-white/15 bg-gradient-to-br from-amber/10 via-black/40 to-ice/12 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-amber/80">Transmission Channel</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Let&apos;s Build Systems That Last.</h1>
        <p className="mt-4 text-sm text-mist md:text-base">
          I work with protocol teams, founders, and product leaders to design secure, scalable blockchain systems with production delivery focus.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-2">
        <Link href={`mailto:${personalBrand.email}`} className="rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-amber/40">
          <p className="text-xs uppercase tracking-[0.24em] text-amber/80">Email</p>
          <p className="mt-3 text-lg font-semibold text-white">{personalBrand.email}</p>
        </Link>
        <Link href={personalBrand.linkedin} className="rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-ice/40">
          <p className="text-xs uppercase tracking-[0.24em] text-ice/80">LinkedIn</p>
          <p className="mt-3 text-lg font-semibold text-white">Professional Network</p>
        </Link>
        <Link href={personalBrand.github} className="rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-ice/40">
          <p className="text-xs uppercase tracking-[0.24em] text-ice/80">GitHub</p>
          <p className="mt-3 text-lg font-semibold text-white">Code + Technical Artifacts</p>
        </Link>
        <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-amber/80">Location</p>
          <p className="mt-3 text-lg font-semibold text-white">{personalBrand.location}</p>
          <p className="mt-2 text-sm text-mist">Open to remote and global engagements.</p>
        </article>
      </MotionSection>
    </div>
  );
}
