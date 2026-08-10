import { cn } from "@/utils/cn";

type DoodleArrowProps = {
  className?: string;
  color?: string;
  flip?: boolean;
  width?: number;
  height?: number;
};

/**
 * Hand-drawn doodle arrow with a slight wobble.
 * Used in the collage to point toward the central logo / as a section accent.
 */
export default function DoodleArrow({
  className,
  color = "#1F1F1F",
  flip = false,
  width = 90,
  height = 60,
}: DoodleArrowProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 60"
      fill="none"
      className={cn("select-none", className)}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <path
        d="M2 50 C 14 36, 24 22, 42 18 C 58 14, 70 22, 84 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M76 6 L 86 14 L 76 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
