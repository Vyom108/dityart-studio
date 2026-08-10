import { cn } from "@/utils/cn";

type HeroHeadingProps = {
  className?: string;
};

/**
 * The hero H1. Four lines, italic accent on the last word with a
 * hand-drawn underline glow — matches the moodboard's display feel.
 */
export default function HeroHeading({ className }: HeroHeadingProps) {
  return (
    <h1
      className={cn(
        "font-display font-bold text-[#1F1F1F]",
        "text-[44px] leading-[1.05] tracking-tight",
        "sm:text-[56px] md:text-[64px] lg:text-[72px]",
        className
      )}
    >
      <span className="block">Every Memory</span>
      <span className="block">Deserves</span>
      <span className="block">Something</span>
      <span className="block italic">
        <span className="hand-underline">Personal.</span>
      </span>
    </h1>
  );
}