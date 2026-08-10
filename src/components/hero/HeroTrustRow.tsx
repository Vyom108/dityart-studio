import { Star } from "lucide-react";

/**
 * Social-proof row under the hero CTAs.
 * - Real-feeling number + 3 avatar dots (not a vague "trusted" label)
 * - Trait chips reinforce the studio positioning
 */
export default function HeroTrustRow() {
  return (
    <div className="mt-8 flex flex-col items-start gap-4">
      <div className="flex items-center gap-3">
        {/* avatar stack — small initials, no fake photos */}
        <div className="flex -space-x-2">
          {[
            { initial: "A", bg: "bg-[#FFB300]" },
            { initial: "R", bg: "bg-[#FFD166]" },
            { initial: "M", bg: "bg-[#1F1F1F]" },
          ].map(({ initial, bg }) => (
            <span
              key={initial}
              className={`flex h-7 w-7 items-center justify-center rounded-full ${bg} text-[11px] font-semibold text-white ring-2 ring-[#FFFDF7]`}
              aria-hidden
            >
              {initial}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-sm text-[#1F1F1F]">
          <span className="flex items-center gap-0.5 text-[#FFB300]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={13} fill="#FFB300" strokeWidth={0} />
            ))}
          </span>
          <span className="font-semibold">500+ creators</span>
          <span className="text-[#1F1F1F]/55">in Rajkot</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {["100% Customized", "Handcrafted", "Made with Love"].map((label) => (
          <span
            key={label}
            className="rounded-full border border-[#1F1F1F]/10 bg-white px-3 py-1 text-xs font-medium text-[#1F1F1F]/80"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
