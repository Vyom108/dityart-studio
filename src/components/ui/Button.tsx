import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#1f1f1f] text-white hover:bg-[#363636] shadow-[0_12px_25px_rgba(31,31,31,0.16)] hover:shadow-[0_18px_35px_rgba(31,31,31,0.22)]",
    secondary:
      "bg-white text-[#1f1f1f] border border-[#d7b46c] hover:bg-[#fff8e9]",
    outline:
      "border border-[#ffb300] text-[#a46c00] hover:bg-[#fff3d6]",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}