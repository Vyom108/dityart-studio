import { cn } from "@/utils/cn";

export type SparkleVariant = "4-point" | "tiny-star" | "plus";

type SparkleProps = {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: SparkleVariant;
  opacity?: number;
};

/**
 * Decorative sparkle. Three variants:
 *  - 4-point: the default handcrafted star (used everywhere in the studio).
 *  - tiny-star: a more delicate 5-point twinkle for ambient decoration.
 *  - plus: a minimal cross/plus for very small accents.
 *
 * Pure SVG, no runtime cost. `opacity` lets callers apply very low alpha
 * (0.35–0.6) for ambient sparkles in SectionSparkles.
 */
export default function Sparkle({
  size = 18,
  color = "#FFB300",
  className,
  style,
  variant = "4-point",
  opacity,
}: SparkleProps) {
  if (variant === "tiny-star") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={cn("select-none", className)}
        style={{ ...style, opacity }}
        aria-hidden
      >
        <path
          d="M12 1.6 L13.9 9.1 L21.4 11 L13.9 12.9 L12 22.4 L10.1 12.9 L1.6 11 L10.1 9.1 Z"
          fill={color}
        />
      </svg>
    );
  }
  if (variant === "plus") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={cn("select-none", className)}
        style={{ ...style, opacity }}
        aria-hidden
      >
        <path
          d="M11 2 H13 V11 H22 V13 H13 V22 H11 V13 H2 V11 H11 Z"
          fill={color}
        />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("select-none", className)}
      style={{ ...style, opacity }}
      aria-hidden
    >
      <path
        d="M12 0.5 C 12.6 6.4 17.6 11.4 23.5 12 C 17.6 12.6 12.6 17.6 12 23.5 C 11.4 17.6 6.4 12.6 0.5 12 C 6.4 11.4 11.4 6.4 12 0.5 Z"
        fill={color}
      />
    </svg>
  );
}
