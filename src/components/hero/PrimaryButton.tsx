"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  withArrow?: boolean;
};

/**
 * Primary CTA — ink-black pill with white text, soft shadow, lift on hover.
 * Matches the moodboard's "Primary Button" swatch.
 */
export default function PrimaryButton({
  children,
  withArrow = true,
  className,
  ...rest
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2",
        "rounded-full bg-[#1F1F1F] px-7 py-3.5 text-sm font-semibold text-white",
        "shadow-[0_10px_30px_rgba(31,31,31,0.18)]",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(31,31,31,0.24)]",
        "sm:text-base",
        className
      )}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}