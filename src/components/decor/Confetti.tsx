import { cn } from "@/utils/cn";

export type ConfettiShape = "triangle" | "dot" | "plus" | "asterisk" | "diamond";

type ConfettiProps = {
  shape?: ConfettiShape;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
};

/**
 * Small confetti shape used as ambient decoration.
 * Pure SVG, no animation — use FloatingConfetti to add motion.
 */
export default function Confetti({
  shape = "dot",
  color = "#FFB300",
  size = 10,
  className,
  style,
  opacity,
}: ConfettiProps) {
  if (shape === "dot") {
    return (
      <span
        aria-hidden
        className={cn("inline-block rounded-full", className)}
        style={{ width: size, height: size, backgroundColor: color, opacity, ...style }}
      />
    );
  }
  if (shape === "diamond") {
    return (
      <span
        aria-hidden
        className={cn("inline-block", className)}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          opacity,
          transform: "rotate(45deg)",
          ...style,
        }}
      />
    );
  }
  if (shape === "triangle") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        className={cn("select-none", className)}
        style={{ ...style, opacity }}
        aria-hidden
      >
        <path d="M6 1 L11 11 L1 11 Z" fill={color} />
      </svg>
    );
  }
  if (shape === "plus") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 12 12"
        fill="none"
        className={cn("select-none", className)}
        style={{ ...style, opacity }}
        aria-hidden
      >
        <path d="M5 1 H7 V5 H11 V7 H7 V11 H5 V7 H1 V5 H5 Z" fill={color} />
      </svg>
    );
  }
  // asterisk
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      className={cn("select-none", className)}
      style={{ ...style, opacity }}
      aria-hidden
    >
      <path
        d="M6 0.5 V11.5 M0.5 6 H11.5 M2 2 L10 10 M10 2 L2 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
