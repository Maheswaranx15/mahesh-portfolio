import { Metadata } from "next";
import { MotionSection } from "@/components/motion-section";
import { systemsMap } from "@/lib/content";

export const metadata: Metadata = {
  title: "Architecture",
  description: "Systems map of Maheshwaran's blockchain architecture domains and technical decision surfaces.",
};

export default function ArchitecturePage() {
  return (
    <div className="mx-auto w-[min(1100px,94vw)] space-y-8 pb-24">
      <MotionSection className="rounded-2xl border border-white/10 bg-black/35 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-amber/80">Systems Command</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Architecture Domains</h1>
        <p className="mt-4 max-w-3xl text-sm text-mist md:text-base">
          A view of the domains I combine to ship complete blockchain products: protocol logic, infrastructure, compliance-aware finance, and intelligent automation.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-3">
        {systemsMap.map((node, index) => (
          <article
            key={node.name}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-5 transition hover:-translate-y-1 hover:border-ice/45"
          >
            <span className="absolute right-4 top-4 text-xs text-white/25">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="text-xl font-semibold text-white">{node.name}</h2>
            <p className="mt-3 text-sm text-mist">{node.detail}</p>
          </article>
        ))}
      </MotionSection>
    </div>
  );
}
