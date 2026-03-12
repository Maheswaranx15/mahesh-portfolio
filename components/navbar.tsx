"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems, personalBrand } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[min(1200px,94vw)] rounded-2xl border border-white/10 bg-black/45 px-4 py-3 shadow-tactical backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group min-w-0">
            <p className="truncate text-xs uppercase tracking-[0.35em] text-amber/80">Command Node</p>
            <p className="truncate text-sm font-semibold text-white group-hover:text-amber transition-colors">{personalBrand.name}</p>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm transition",
                    active ? "text-white" : "text-white/65 hover:text-white",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 -z-10 rounded-full border border-amber/40 bg-amber/15"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-ice/40 bg-ice/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ice transition hover:bg-ice/25"
          >
            Initiate Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
