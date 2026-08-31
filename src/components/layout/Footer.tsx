import Link from "next/link";
import { Heart, Mail, MapPinned, MessageCircle, Phone } from "lucide-react";

import SectionSparkles from "@/components/decor/SectionSparkles";
import FloatingConfetti from "@/components/decor/FloatingConfetti";
import Squiggle from "@/components/decor/Squiggle";
import Logo from "@/components/shared/Logo";
import { site } from "@/config/site";

function InstagramMark() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-[15px] w-[15px] text-[#ffb300]">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookMark({ className = "h-[15px] w-[15px]" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`${className} text-[#1877f2]`}>
      <path
        fill="currentColor"
        d="M14.2 8.1V6.7c0-.7.5-.9.8-.9h2V2.2L14.3 2c-3 0-4.6 1.8-4.6 5v1.1H6.8v3.9h2.9V22h4.4V12h3.1l.4-3.9h-3.4z"
      />
    </svg>
  );
}

/**
 * Site-wide footer. Rich decoration but light text — a handcrafted
 * sign-off rather than a wall of legal copy.
 */
export default function Footer() {
  const wa = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hi DityArt Studio! I'd like to customize something.",
  )}`;
  const phoneDisplay = "+91 90819 13600";
  const phoneHref = `tel:+${site.contact.whatsapp}`;

  return (
    <footer className="relative isolate overflow-hidden border-t border-[#f0e4cc] bg-[#fff8e9] py-14 sm:py-16">
      <SectionSparkles seed={21} density="med" palette="amber" />
      <FloatingConfetti
        className="left-[6%] top-[20%]"
        shape="dot"
        color="#ffb300"
        size={7}
        opacity={0.6}
        variant="drift"
        duration={5.4}
      />
      <FloatingConfetti
        className="right-[8%] top-[18%]"
        shape="plus"
        color="#ffd166"
        size={11}
        opacity={0.55}
        variant="sway"
        duration={6.2}
        delay={0.6}
      />
      <FloatingConfetti
        className="left-[14%] bottom-[18%]"
        shape="asterisk"
        color="#ffb300"
        size={14}
        opacity={0.5}
        variant="rise"
        duration={6.8}
        delay={1.1}
      />
      <FloatingConfetti
        className="right-[14%] bottom-[22%]"
        shape="triangle"
        color="#e99500"
        size={10}
        opacity={0.55}
        variant="drift"
        duration={5.9}
        delay={0.3}
      />

      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-24 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd166]/30 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 text-center md:grid-cols-[auto_1fr] md:px-8">
        <div className="flex justify-center md:justify-start">
          <Logo variant="circle" imageClassName="h-20 w-20" />
        </div>

        <div className="flex flex-col items-center gap-2 text-[13px] font-bold leading-6 text-[#1f1f1f]/70 md:items-end md:text-right sm:text-sm">
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-end">
            <Link href="/about" className="underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]">
              About Us
            </Link>
            <span aria-hidden>||</span>
            <Link href="/products" className="underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]">
              Explore Products
            </Link>
            <span aria-hidden>||</span>
            <Link href="/custom-order" className="underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]">
              Start a Custom Order
            </Link>
          </nav>

          <nav aria-label="Social and contact links" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-end">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              WhatsApp
            </a>
            <span aria-hidden>||</span>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]"
            >
              <InstagramMark />
              Instagram
            </a>
            <span aria-hidden>||</span>
            <a
              href={site.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]"
            >
              <FacebookMark />
              FB
            </a>
            <span aria-hidden>||</span>
            <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-1.5 underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]">
              <Mail size={15} className="text-[#e98d00]" />
              Mail
            </a>
            <span aria-hidden>||</span>
            <a href={phoneHref} className="inline-flex items-center gap-1.5 underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]">
              <Phone size={15} className="text-[#25D366]" />
              {phoneDisplay}
            </a>
          </nav>

          <nav aria-label="Legal links" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-end">
            <Link href="/privacy" className="underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]">
              Privacy Policy
            </Link>
            <span aria-hidden>||</span>
            <Link href="/terms" className="underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]">
              Terms of Service
            </Link>
            <span aria-hidden>||</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=DityArt+Studio+Rajkot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline decoration-[#1f1f1f]/30 underline-offset-2 transition hover:text-[#e98d00]"
            >
              <MapPinned size={14} className="text-[#4285F4]" />
              Rajkot
            </a>
          </nav>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl px-5 lg:px-8">
        <Squiggle
          variant="wave"
          color="#e6cf95"
          width={260}
          height={20}
          className="mx-auto opacity-70"
        />
      </div>

      <div className="relative mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-center text-xs text-[#1f1f1f]/55 sm:flex-row sm:text-left lg:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. Made with a whole lot of heart.
        </p>
        <p className="flex items-center gap-2">
          <Heart size={12} className="text-[#ffb300]" fill="#ffb300" />
          {site.tagline}
        </p>
      </div>
    </footer>
  );
}
