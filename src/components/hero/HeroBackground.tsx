import Sparkle from "./Sparkle";

/**
 * Hero ambient background:
 * - cream base (inherited from body)
 * - orange radial glow top-right
 * - yellow blur bottom-left
 * - tiny scattered sparkles
 * - subtle paper texture overlay
 */
export default function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      {/* Orange glow */}
      <div
        className="absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,179,0,0.22), transparent 70%)",
        }}
      />
      {/* Yellow blur — hidden on small screens to keep the top-of-fold calm */}
      <div
        className="absolute -left-24 bottom-0 hidden h-[420px] w-[420px] rounded-full sm:block"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,209,102,0.32), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      {/* Secondary soft glow — desktop only */}
      <div
        className="absolute left-1/3 top-1/2 hidden h-[260px] w-[260px] -translate-x-1/2 rounded-full lg:block"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,243,214,0.7), transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* Scattered sparkles */}
      <Sparkle
        size={14}
        color="#FFB300"
        className="absolute left-[12%] top-[18%]"
      />
      <Sparkle
        size={22}
        color="#FFD166"
        className="absolute left-[6%] top-[58%] hidden sm:block"
      />
      <Sparkle
        size={10}
        color="#FFB300"
        className="absolute right-[18%] top-[10%]"
      />
      <Sparkle
        size={16}
        color="#FFD166"
        className="absolute right-[8%] bottom-[22%] hidden sm:block"
      />
      <Sparkle
        size={12}
        color="#FFB300"
        className="absolute left-1/2 top-[8%] hidden sm:block"
        style={{ left: "48%" }}
      />
      <Sparkle
        size={8}
        color="#FFB300"
        className="absolute left-[40%] bottom-[14%] hidden lg:block"
      />
    </div>
  );
}