import { Metadata } from "next";
import { MotionSection } from "@/components/motion-section";
import { personalBrand, timelineNarrative } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Architecture-level profile of Maheshwaran Ramesh: systems thinking, engineering philosophy, and Web3 leadership arc.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-[min(1000px,92vw)] space-y-10 pb-24">
      <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-7">
        <p className="text-xs uppercase tracking-[0.3em] text-amber/75">Profile</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">About Maheshwaran</h1>
        <p className="mt-4 text-base text-mist">{personalBrand.title}</p>
        <p className="mt-6 text-sm leading-relaxed text-white/80 md:text-base">
          I approach blockchain as systems architecture, not isolated contract delivery. My focus is aligning protocol design, infrastructure reliability, user experience, and operational constraints into solutions that can survive production pressure.
        </p>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-7">
        <p className="text-xs uppercase tracking-[0.3em] text-ice/75">Execution Style</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <h2 className="text-lg font-semibold text-white">Architectural Ownership</h2>
            <p className="mt-2 text-sm text-mist">Translate ambiguous product requirements into bounded, testable, and scalable blockchain architecture.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <h2 className="text-lg font-semibold text-white">Production Discipline</h2>
            <p className="mt-2 text-sm text-mist">Design for auditability, recovery paths, and performance constraints before launch windows close.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <h2 className="text-lg font-semibold text-white">Cross-Stack Delivery</h2>
            <p className="mt-2 text-sm text-mist">From chain-level logic to backend orchestration and UX integration, ship complete systems without fragmented ownership.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <h2 className="text-lg font-semibold text-white">Future-Driven Direction</h2>
            <p className="mt-2 text-sm text-mist">Advance toward DePIN, tokenized finance, and AI-assisted on-chain automation with practical, enterprise-grade implementation choices.</p>
          </article>
        </div>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-7">
        <p className="text-xs uppercase tracking-[0.3em] text-amber/75">Journey</p>
        <ul className="mt-4 space-y-3 text-sm text-mist">
          {timelineNarrative.map((item) => (
            <li key={item} className="border-l border-white/20 pl-4">{item}</li>
          ))}
        </ul>
      </MotionSection>
    </div>
  );
}
