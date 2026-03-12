import { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { MotionSection } from "@/components/motion-section";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in DeFi, tokenized finance, blockchain infrastructure, DePIN, and AI-assisted Web3 systems.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-[min(1200px,94vw)] space-y-8 pb-24">
      <MotionSection>
        <p className="text-xs uppercase tracking-[0.3em] text-amber/75">Case Files</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Selected System Builds</h1>
        <p className="mt-4 max-w-3xl text-sm text-mist md:text-base">
          Architecture-first project breakdowns spanning DePIN, infrastructure, tokenized finance, protocol engineering, and production delivery.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </MotionSection>
    </div>
  );
}
