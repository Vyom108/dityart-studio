import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = "center",
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center"
          ? "mx-auto text-center"
          : "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-[#fff3d6] px-4 py-1 text-sm font-bold uppercase tracking-[0.14em] text-[#a46c00]">
          {badge}
        </span>
      )}

      <h2 className="mt-4 font-display text-4xl font-black tracking-[-0.05em] text-[#1f1f1f] sm:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-base leading-7 text-[#1f1f1f]/65 sm:text-lg sm:leading-8">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}