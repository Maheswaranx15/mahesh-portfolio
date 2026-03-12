import { Metadata } from "next";
import { MotionSection } from "@/components/motion-section";
import { capabilities, skillGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical stack and capability matrix across smart contracts, infrastructure, and full-stack Web3 delivery.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto w-[min(1000px,92vw)] space-y-8 pb-24">
      <MotionSection>
        <p className="text-xs uppercase tracking-[0.3em] text-amber/75">Capability Matrix</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Skills</h1>
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article key={capability.title} className="rounded-xl border border-white/10 bg-black/25 p-4">
            <h2 className="text-lg font-semibold text-white">{capability.title}</h2>
            <p className="mt-2 text-sm text-mist">{capability.description}</p>
          </article>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="text-xl font-semibold text-white">{group.title}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-xs text-mist">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </MotionSection>
    </div>
  );
}
