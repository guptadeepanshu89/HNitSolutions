import { trustedBrands } from "../data/content";

export default function TrustedBy() {
  const loop = [...trustedBrands, ...trustedBrands];
  return (
    <section className="border-y border-white/8 bg-navy/60 py-10">
      <p className="mb-6 text-center text-xs tracking-[0.28em] text-muted uppercase">
        Fictional partners we design for
      </p>
      <div className="overflow-hidden">
        <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-16 px-8">
          {loop.map((brand, index) => (
            <span key={`${brand}-${index}`} className="text-lg font-semibold tracking-[0.2em] text-white/25">
              {brand}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
