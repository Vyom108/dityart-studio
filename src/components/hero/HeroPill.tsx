import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import Sparkle from "./Sparkle";

type HeroPillProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Small amber pill used above the hero heading.
 * Matches the moodboard's badge style.
 */
export default function HeroPill({ children, className }: HeroPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full",
        "border border-[#FFB300]/30 bg-[#FFF3D6]/70 backdrop-blur-sm",
        "px-4 py-1.5 text-xs font-medium tracking-wide text-[#1F1F1F] sm:text-sm",
        className
      )}
    >
      <Sparkle size={12} color="#FFB300" className="shrink-0" />
      <span>{children}</span>
    </span>
  );
}