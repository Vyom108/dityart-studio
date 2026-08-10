import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group block ${className ?? ""}`}
      aria-label="DityArt Studio Home"
    >
      <Image
        src="/images/brand/dityart-studio.png"
        alt="DityArt Studio"
        width={212}
        height={72}
        priority
        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:-rotate-2"
      />
    </Link>
  );
}
