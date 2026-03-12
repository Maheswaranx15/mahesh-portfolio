import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-[min(900px,92vw)] flex-col items-start justify-center">
      <p className="text-xs uppercase tracking-[0.3em] text-amber/75">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Signal Not Found</h1>
      <p className="mt-3 text-sm text-mist">The requested route does not exist in this command network.</p>
      <Link href="/" className="mt-6 rounded-full border border-amber/35 bg-amber/10 px-4 py-2 text-sm text-amber">
        Return Home
      </Link>
    </div>
  );
}
