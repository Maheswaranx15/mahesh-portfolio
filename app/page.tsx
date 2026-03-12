import Link from "next/link";
import { MotionSection } from "@/components/motion-section";
import {
  capabilities,
  featuredProjects,
  heroLines,
  metrics,
  personalBrand,
  systemsMap,
  timelineNarrative,
} from "@/lib/content";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  return (
    <div className="mx-auto w-[min(1200px,94vw)] space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/35 px-6 py-20 shadow-tactical md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,179,71,0.18),transparent_45%),radial-gradient(circle_at_75%_20%,rgba(127,201,255,0.13),transparent_40%)]" />
        <div className="relative max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-amber/80">Operations Hub // Architect Console</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            {heroLines[0]}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-mist md:text-lg">{heroLines[1]}</p>
          <p className="mt-3 max-w-2xl text-base text-white/70">{heroLines[2]}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/work" className="rounded-full border border-amber/40 bg-amber/15 px-5 py-2 text-sm font-semibold text-amber transition hover:bg-amber/30">
              View Projects
            </Link>
            <Link href="/experience" className="rounded-full border border-ice/40 bg-ice/15 px-5 py-2 text-sm font-semibold text-ice transition hover:bg-ice/30">
              Enter the Build Log
            </Link>
            <Link href="/contact" className="rounded-full border border-white/30 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <MotionSection className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-amber/75">Identity</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{personalBrand.name}</h2>
          <p className="mt-3 text-sm text-mist md:text-base">{personalBrand.title}</p>
          <p className="mt-5 text-sm text-white/80 md:text-base">{personalBrand.shortBio}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-ice/80">Mission Timeline</p>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            {timelineNarrative.map((item) => (
              <li key={item} className="border-l border-white/20 pl-4">{item}</li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection>
        <p className="text-xs uppercase tracking-[0.3em] text-amber/75">Capabilities</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Architecture Domains</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-amber/40">
              <h3 className="text-base font-semibold text-white">{capability.title}</h3>
              <p className="mt-2 text-sm text-mist">{capability.description}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ice/75">Featured Builds</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Command-Grade Projects</h2>
          </div>
          <Link href="/work" className="text-sm text-amber transition hover:text-amber/80">View All</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-amber/75">Systems Map</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Command Center Domains</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {systemsMap.map((system) => (
            <article key={system.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-lg font-semibold text-white">{system.name}</h3>
              <p className="mt-2 text-sm text-mist">{system.detail}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection>
        <p className="text-xs uppercase tracking-[0.3em] text-ice/75">Proof</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Production Signals</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm text-mist">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold text-amber">{metric.value}</p>
              <p className="mt-3 text-xs text-white/70">{metric.note}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-white/15 bg-gradient-to-r from-amber/12 via-black/40 to-ice/12 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-amber/80">Final Call</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Let&apos;s Build Systems That Last.</h2>
        <p className="mt-4 max-w-3xl text-sm text-mist md:text-base">
          I partner with founders, CTOs, and protocol teams to deliver resilient blockchain architecture from concept through production.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full border border-amber/40 bg-amber/20 px-5 py-2 text-sm font-semibold text-amber transition hover:bg-amber/35">
            Start a Build Conversation
          </Link>
          <Link href="/resume" className="rounded-full border border-white/30 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/15">
            Open Resume
          </Link>
        </div>
      </MotionSection>
    </div>
  );
}
