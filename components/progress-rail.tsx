"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ProgressRail() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const scaleY = useSpring(scrollYProgress, {
    damping: 18,
    stiffness: 125,
    mass: 0.2,
  });

  return (
    <div className="fixed right-4 top-24 z-40 hidden h-[72vh] w-[3px] overflow-hidden rounded-full bg-white/10 lg:block">
      {reducedMotion ? (
        <div className="h-full w-full bg-amber/70" />
      ) : (
        <motion.div className="h-full w-full origin-top bg-gradient-to-b from-amber to-ice" style={{ scaleY }} />
      )}
    </div>
  );
}
