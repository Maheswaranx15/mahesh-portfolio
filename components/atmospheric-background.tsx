export function AtmosphericBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,179,71,0.14),transparent_35%),radial-gradient(circle_at_82%_12%,rgba(127,201,255,0.18),transparent_34%),linear-gradient(180deg,#07090d_0%,#0b1017_45%,#07090d_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-size:65px_65px] bg-grid" />
      <div className="absolute -bottom-20 left-0 right-0 h-[46vh] bg-[radial-gradient(ellipse_at_bottom,rgba(25,32,44,0.95)_0%,rgba(8,10,14,0.2)_75%,transparent_100%)]" />
      <div className="scanline absolute inset-0 opacity-30" />
      <div className="rain absolute inset-0 opacity-20" />
      <div className="fog absolute inset-0 opacity-35" />
    </div>
  );
}
