import { cn } from "@/utils/cn";

import Sparkle from "./Sparkle";
import Confetti from "./Confetti";

/**
 * Deterministic layout helpers — keep decoration positions stable
 * between renders so they don't shift when the user scrolls.
 */
type Slot = {
  left: string; // tailwind arbitrary position, e.g. "[18%]" or "1/2"
  top: string;
  kind: "sparkle" | "dot" | "plus" | "asterisk" | "triangle" | "diamond";
  size: number;
  color: string;
  opacity: number;
  rotate?: number;
  variant?: "4-point" | "tiny-star" | "plus";
};

const AMBER_PALETTE = ["#FFB300", "#FFD166", "#FFB300", "#E99500", "#FFD166", "#1F1F1F"];
const CREAM_PALETTE = ["#FFB300", "#FFD166", "#FFB300", "#FFB300", "#FFD166", "#B67500"];
const INK_PALETTE = ["#FFD166", "#FFB300", "#FFD166", "#FFB300", "#FFFFFF", "#FFD166"];

// Pseudo-random with a stable seed so the same component renders
// the same positions on server and client (no hydration mismatch).
function seededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function buildSlots(seed: number, count: number, palette: string[]): Slot[] {
  const rand = seededRandom(seed);
  const positions: Array<{ left: string; top: string }> = [];
  const tries = count * 8;
  for (let i = 0; i < tries && positions.length < count; i++) {
    const leftPct = Math.round(3 + rand() * 94);
    const topPct = Math.round(3 + rand() * 94);
    // Reject positions too close to existing ones.
    const tooClose = positions.some(
      (p) => Math.abs(parseInt(p.left) - leftPct) < 9 && Math.abs(parseInt(p.top) - topPct) < 9,
    );
    if (tooClose) continue;
    positions.push({ left: `${leftPct}%`, top: `${topPct}%` });
  }
  const kinds: Slot["kind"][] = [
    "sparkle", "sparkle", "dot", "sparkle", "plus", "asterisk", "dot", "triangle", "diamond", "sparkle",
  ];
  return positions.map((p) => {
    const kind = kinds[Math.floor(rand() * kinds.length)];
    const color = palette[Math.floor(rand() * palette.length)];
    const size = 5 + Math.round(rand() * 22);
    const opacity = 0.32 + rand() * 0.45;
    return {
      ...p,
      kind,
      color,
      size,
      opacity,
      rotate: kind === "sparkle" || kind === "asterisk" ? Math.round(rand() * 30 - 15) : undefined,
      variant: kind === "sparkle" ? (rand() > 0.5 ? "4-point" : "tiny-star") : undefined,
    };
  });
}

type SectionSparklesProps = {
  seed?: number;
  density?: "low" | "med" | "high";
  palette?: "amber" | "cream" | "ink";
  className?: string;
  /** When true, dots/sparkles stay near the corners instead of spreading. */
  edgeOnly?: boolean;
};

const COUNTS: Record<NonNullable<SectionSparklesProps["density"]>, number> = {
  low: 8,
  med: 14,
  high: 22,
};

const PALETTES = {
  amber: AMBER_PALETTE,
  cream: CREAM_PALETTE,
  ink: INK_PALETTE,
};

/**
 * Drop-in component that sprinkles a deterministic constellation of
 * sparkles + dots + tiny marks across a section. The new visual
 * language unit for "decorative atmosphere".
 */
export default function SectionSparkles({
  seed = 7,
  density = "med",
  palette = "amber",
  className,
}: SectionSparklesProps) {
  const slots = buildSlots(seed, COUNTS[density], PALETTES[palette]);
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {slots.map((s, i) => {
        const common = {
          className: "absolute -translate-x-1/2 -translate-y-1/2",
          style: { left: s.left, top: s.top, rotate: s.rotate ? `${s.rotate}deg` : undefined },
        };
        if (s.kind === "sparkle") {
          return (
            <Sparkle
              key={i}
              size={s.size}
              color={s.color}
              variant={s.variant}
              opacity={s.opacity}
              {...common}
            />
          );
        }
        if (s.kind === "dot" || s.kind === "diamond") {
          return (
            <Confetti
              key={i}
              shape={s.kind}
              color={s.color}
              size={s.size}
              opacity={s.opacity}
              {...common}
            />
          );
        }
        if (s.kind === "plus" || s.kind === "asterisk" || s.kind === "triangle") {
          return (
            <Confetti
              key={i}
              shape={s.kind}
              color={s.color}
              size={s.size}
              opacity={s.opacity}
              {...common}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
