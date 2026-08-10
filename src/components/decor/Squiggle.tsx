import { cn } from "@/utils/cn";

type SquiggleProps = {
  className?: string;
  color?: string;
  flip?: boolean;
  width?: number;
  height?: number;
  strokeWidth?: number;
  variant?: "wave" | "loop" | "tilt";
};

/**
 * Small hand-drawn curve used as a section accent.
 * Three variants:
 *  - wave: gentle S-curve, default.
 *  - loop: small self-loop, decorative.
 *  - tilt: single tilt line for underlining / accent.
 */
export default function Squiggle({
  className,
  color = "#1F1F1F",
  flip = false,
  width = 80,
  height = 24,
  strokeWidth = 2,
  variant = "wave",
}: SquiggleProps) {
  const transform = flip ? "scaleX(-1)" : undefined;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={cn("select-none", className)}
      style={transform ? { transform } : undefined}
      aria-hidden
    >
      {variant === "loop" && (
        <path
          d={`M2 ${height / 2} C ${width * 0.25} ${height * 0.1}, ${width * 0.4} ${height * 0.9}, ${width * 0.55} ${height / 2} C ${width * 0.7} ${height * 0.15}, ${width * 0.85} ${height * 0.85}, ${width - 2} ${height / 2}`}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
      )}
      {variant === "tilt" && (
        <path
          d={`M2 ${height * 0.75} L ${width * 0.5} ${height * 0.45} L ${width - 2} ${height * 0.65}`}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
      {variant === "wave" && (
        <path
          d={`M2 ${height / 2} C ${width * 0.18} ${height * 0.1}, ${width * 0.32} ${height * 0.9}, ${width * 0.5} ${height / 2} S ${width * 0.82} ${height * 0.1}, ${width - 2} ${height / 2}`}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
      )}
    </svg>
  );
}
