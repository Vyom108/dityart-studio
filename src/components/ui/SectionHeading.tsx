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
        <span className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}