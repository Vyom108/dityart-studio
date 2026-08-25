import Link from "next/link";
import { Heart, MapPinned, MessageCircle } from "lucide-react";

import SectionSparkles from "@/components/decor/SectionSparkles";
import FloatingConfetti from "@/components/decor/FloatingConfetti";
import Squiggle from "@/components/decor/Squiggle";
import Sparkle from "@/components/decor/Sparkle";
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

/**
 * Site-wide footer. Rich decoration but light text — a handcrafted
 * sign-off rather than a wall of legal copy.
 */
export default function Footer() {
  const wa = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hi DityArt Studio! I'd like to customize something.",
  )}`;
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

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center sm:text-left lg:flex-row lg:items-center lg:justify-between lg:gap-7 lg:px-8">
        <div className="flex shrink-0 flex-col items-center lg:items-start">
          <Logo variant="circle" imageClassName="h-20 w-20" />
          <Link href="/privacy" className="mt-5 inline-block text-sm leading-6 text-[#1f1f1f]/65 transition hover:text-[#e98d00] hover:underline">
            Privacy Policy
          </Link>
          <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#1f1f1f]/55">
            <Sparkle size={11} color="#ffb300" variant="tiny-star" />
            <span>Since {site.since}</span>
            <span aria-hidden className="mx-2 h-1 w-1 rounded-full bg-[#1f1f1f]/25" />
            <span>{site.hours.value}</span>
          </div>
        </div>

        <div className="shrink-0 lg:flex lg:items-center lg:gap-5">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.22em] text-[#dd8d00]">
            Studio
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#1f1f1f]/80 lg:mt-0">
            <li><Link href="/#products" className="transition hover:text-[#e98d00]">Explore products</Link></li>
            <li><Link href="/products" className="transition hover:text-[#e98d00]">All creations</Link></li>
            <li><Link href="/custom-order" className="transition hover:text-[#e98d00]">Start a custom order</Link></li>
            <li><Link href="/#contact" className="transition hover:text-[#e98d00]">Say hello</Link></li>
          </ul>
        </div>

        <div className="shrink-0 lg:flex lg:items-center lg:gap-5">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.22em] text-[#dd8d00]">
            Reach us
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[13px] sm:text-sm lg:mt-0 lg:justify-start lg:gap-x-5 lg:gap-y-3">
            <li>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[#1f1f1f]/80 transition hover:text-[#e98d00] sm:gap-2"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[#1f1f1f]/80 transition hover:text-[#e98d00] sm:gap-2"
              >
                <InstagramMark />
                @dityartstudio
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=DityArt+Studio+Rajkot"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[#1f1f1f]/80 transition hover:text-[#e98d00] sm:gap-2"
              >
                <MapPinned size={15} className="text-[#4285F4]" />
                Find us on Google
              </a>
            </li>
          </ul>
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




