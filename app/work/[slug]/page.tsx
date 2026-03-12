import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionSection } from "@/components/motion-section";
import { projects } from "@/lib/content";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.name,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-[min(1000px,92vw)] space-y-8 pb-24">
      <MotionSection className="rounded-2xl border border-white/10 bg-black/35 p-7">
        <p className="text-xs uppercase tracking-[0.3em] text-amber/75">Project Dossier</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">{project.name}</h1>
        <p className="mt-2 text-sm text-mist md:text-base">{project.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.domains.map((domain) => (
            <span key={domain} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-mist">
              {domain}
            </span>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-white/10 bg-black/30 p-5">
          <p className="text-xs uppercase tracking-[0.26em] text-ice/80">Role</p>
          <p className="mt-2 text-sm text-white">{project.role}</p>
        </article>
        <article className="rounded-xl border border-white/10 bg-black/30 p-5">
          <p className="text-xs uppercase tracking-[0.26em] text-ice/80">Period</p>
          <p className="mt-2 text-sm text-white">{project.period}</p>
        </article>
      </MotionSection>

      <MotionSection className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-7">
        <h2 className="text-2xl font-semibold text-white">Problem</h2>
        <p className="text-sm text-mist md:text-base">{project.problem}</p>
      </MotionSection>

      <MotionSection className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-7">
        <h2 className="text-2xl font-semibold text-white">Context</h2>
        <p className="text-sm text-mist md:text-base">{project.context}</p>
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-xl font-semibold text-white">Constraints</h2>
          <ul className="mt-3 space-y-2 text-sm text-mist">
            {project.constraints.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-xl font-semibold text-white">Architecture Decisions</h2>
          <ul className="mt-3 space-y-2 text-sm text-mist">
            {project.architecture.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </MotionSection>

      <MotionSection className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-xl font-semibold text-white">Security / Scale / Compliance</h2>
          <ul className="mt-3 space-y-2 text-sm text-mist">
            {project.securityScaleCompliance.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-xl font-semibold text-white">Role and Contributions</h2>
          <ul className="mt-3 space-y-2 text-sm text-mist">
            {project.contributions.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <h2 className="text-xl font-semibold text-white">Outcomes</h2>
        <ul className="mt-3 space-y-2 text-sm text-mist">
          {project.outcomes.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <h2 className="text-xl font-semibold text-white">Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-amber/35 bg-amber/10 px-3 py-1 text-xs text-amber">
              {item}
            </span>
          ))}
        </div>
      </MotionSection>

      {project.links && project.links.length > 0 ? (
        <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <h2 className="text-xl font-semibold text-white">References</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-ice/40 bg-ice/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ice transition hover:bg-ice/25"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </MotionSection>
      ) : null}

      <MotionSection>
        <Link href="/work" className="text-sm text-amber transition hover:text-amber/80">
          Back to all projects
        </Link>
      </MotionSection>
    </div>
  );
}
