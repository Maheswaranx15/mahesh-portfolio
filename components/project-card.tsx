import Link from "next/link";
import { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-6 shadow-tactical backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-ice/45 hover:shadow-glowIce">
      <div className="flex flex-wrap items-center gap-2">
        {project.domains.slice(0, 3).map((domain) => (
          <span key={domain} className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-mist">
            {domain}
          </span>
        ))}
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-white">{project.name}</h3>
      <p className="mt-2 text-sm text-mist">{project.tagline}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.24em] text-amber/70">{project.role}</p>
      <Link
        href={`/work/${project.slug}`}
        className="mt-6 inline-flex rounded-full border border-amber/35 bg-amber/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber transition hover:bg-amber/20"
      >
        Open Case File
      </Link>
    </article>
  );
}
