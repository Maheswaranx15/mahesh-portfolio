import { Metadata } from "next";
import Link from "next/link";
import { MotionSection } from "@/components/motion-section";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Maheshwaran Ramesh's resume and review career highlights in blockchain engineering.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-[min(1000px,92vw)] space-y-8 pb-24">
      <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-amber/80">Resume Access</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Professional Snapshot</h1>
        <p className="mt-4 text-sm text-mist md:text-base">
          Download the latest CV and review the full timeline of roles, projects, and technical stack.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/Mahesh_CV.pdf"
            target="_blank"
            className="rounded-full border border-amber/40 bg-amber/20 px-5 py-2 text-sm font-semibold text-amber transition hover:bg-amber/35"
          >
            Open Resume PDF
          </Link>
          <Link
            href="/Mahesh_CV.pdf"
            download
            className="rounded-full border border-white/30 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Download Resume
          </Link>
        </div>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <h2 className="text-2xl font-semibold text-white">What This Resume Signals</h2>
        <ul className="mt-4 space-y-2 text-sm text-mist">
          <li>- 6 years of hands-on blockchain engineering experience across multiple ecosystems.</li>
          <li>- Production outcomes in NFT scale, disbursal rails, account abstraction wallets, and gasless transfers.</li>
          <li>- Growth path from smart contract specialist to architecture-level system ownership.</li>
        </ul>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <h2 className="text-2xl font-semibold text-white">Resume Preview</h2>
        <p className="mt-3 text-sm text-mist md:text-base">
          Quick in-page preview. Open the full PDF in a new tab for best readability.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <iframe
            src="/Mahesh_CV.pdf#view=FitH"
            title="Maheshwaran Ramesh Resume PDF"
            className="h-[70vh] w-full"
          />
        </div>
      </MotionSection>
    </div>
  );
}
