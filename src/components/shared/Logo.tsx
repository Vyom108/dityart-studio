import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "horizontal" | "circle";
  imageClassName?: string;
};

export default function Logo({ className, variant = "horizontal", imageClassName }: LogoProps) {
  const isCircle = variant === "circle";

  return (
    <Link
      href="/"
      className={`group block ${className ?? ""}`}
      aria-label="DityArt Studio Home"
    >
      <Image
        src={isCircle ? "/images/brand/dityart-studio-circle.png" : "/images/brand/dityart-studio.png"}
        alt="DityArt Studio"
        width={isCircle ? 1500 : 321}
        height={isCircle ? 1500 : 152}
        priority
        className={`${isCircle ? "h-12 w-12" : "h-12 w-auto"} object-contain transition-transform duration-300 group-hover:-rotate-2 ${imageClassName ?? ""}`}
      />
    </Link>
  );
}
