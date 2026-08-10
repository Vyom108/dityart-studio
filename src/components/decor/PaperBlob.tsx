import { cn } from "@/utils/cn";

type PaperBlobProps = {
  color?: string;
  className?: string;
  size?: string; // tailwind size class, e.g. "h-72 w-72"
  blur?: number; // px
  opacity?: number;
  shape?: "blob" | "oval" | "rounded";
  ring?: boolean;
};

/**
 * Organic CSS shape used as a soft glow / atmosphere behind sections.
 * Default shape uses an asymmetric border-radius for a "hand-painted" feel.
 */
export default function PaperBlob({
  color = "#FFD166",
  className,
  size = "h-72 w-72",
  blur = 40,
  opacity = 0.35,
  shape = "blob",
  ring = false,
}: PaperBlobProps) {
  const borderRadius =
    shape === "oval"
      ? "9999px"
      : shape === "rounded"
        ? "2.5rem"
        : "47% 53% 60% 40% / 50% 60% 40% 50%";
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", size, className)}
      style={{
        background: color,
        borderRadius,
        filter: `blur(${blur}px)`,
        opacity,
        boxShadow: ring ? `0 0 0 1px ${color}33` : undefined,
      }}
    />
  );
}
