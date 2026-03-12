import { Metadata } from "next";
import { MotionSection } from "@/components/motion-section";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline across blockchain engineering roles with measurable production outcomes.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-[min(1000px,92vw)] space-y-8 pb-24">
      <MotionSection>
        <p className="text-xs uppercase tracking-[0.3em] text-amber/75">Build Log</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Experience Timeline</h1>
      </MotionSection>

      <MotionSection className="space-y-4">
        {experience.map((item) => (
          <article key={item.company} className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-white">{item.company}</h2>
                <p className="text-sm text-ice">{item.role}</p>
              </div>
              <div className="text-right text-xs uppercase tracking-[0.2em] text-mist">
                <p>{item.period}</p>
                <p>{item.location}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-mist">
              {item.highlights.map((highlight) => (
                <li key={highlight}>- {highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </MotionSection>
    </div>
  );
}
