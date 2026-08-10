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
      "bg-[#FFC107] text-gray-900 hover:bg-[#FFB300] shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-gray-900 hover:bg-gray-100 shadow-md",
    outline:
      "border border-[#FFC107] text-[#FF8A00] hover:bg-[#FFF8E1]",
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