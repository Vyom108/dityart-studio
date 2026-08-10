"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/utils/cn";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
};

/**
 * Secondary CTA — white pill with WhatsApp-green icon.
 * Routes to a WhatsApp link when `href` is given; falls back to button.
 */
export default function SecondaryButton({
  children,
  href,
  className,
  ...rest
}: SecondaryButtonProps) {
  const content = (
    <>
      <MessageCircle size={18} className="text-[#25D366]" />
      <span>{children}</span>
    </>
  );

  const base = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-full border border-[#1F1F1F]/15 bg-white px-7 py-3.5",
    "text-sm font-semibold text-[#1F1F1F]",
    "shadow-[0_6px_18px_rgba(31,31,31,0.06)]",
    "transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F1F1F]/30 hover:shadow-[0_14px_30px_rgba(31,31,31,0.10)]",
    "sm:text-base",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={base} {...rest}>
      {content}
    </button>
  );
}