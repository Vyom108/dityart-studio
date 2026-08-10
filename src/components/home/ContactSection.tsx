"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import FloatingConfetti from "@/components/decor/FloatingConfetti";
import PaperBlob from "@/components/decor/PaperBlob";
import SectionSparkles from "@/components/decor/SectionSparkles";
import Sparkle from "@/components/decor/Sparkle";
import Squiggle from "@/components/decor/Squiggle";
import { site } from "@/config/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const SETTLE = [0.16, 0.84, 0.32, 1] as const;

const wa = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  "Hi DityArt Studio! I'd like to customize something.",
)}`;

/**
 * "Have an idea?" closing section. Parallax blob, layered atmosphere,
 * staggered reveal of the kicker, title, body, and CTAs.
 */
export default function ContactSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blobY: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  function tilt(e: MouseEvent<HTMLAnchorElement>, max = 2) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tilt-x", `${dy * -max}deg`);
    el.style.setProperty("--tilt-y", `${dx * max}deg`);
  }
  function untilt(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.setProperty("--tilt-x", "0deg");
    e.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate overflow-hidden bg-[#fffdf7] py-24 sm:py-32"
    >
      <div aria-hidden className="paper-grain absolute inset-0 opacity-20" />
      <motion.div style={{ y: blobY }} aria-hidden>
        <PaperBlob color="#ffd166" size="h-[30rem] w-[30rem]" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" blur={90} opacity={0.32} />
      </motion.div>
      <PaperBlob color="#ffb300" size="h-72 w-72" className="-left-24 top-24" blur={70} opacity={0.22} shape="oval" />
      <PaperBlob color="#fff3d6" size="h-80 w-80" className="-right-24 bottom-10" blur={80} opacity={0.55} shape="oval" />
      <SectionSparkles seed={42} density="med" palette="amber" />
      <FloatingConfetti className="left-[8%] top-[24%]" shape="plus" color="#ffd166" size={14} opacity={0.6} variant="rise" duration={6} />
      <FloatingConfetti className="right-[10%] top-[20%]" shape="dot" color="#ffb300" size={9} opacity={0.7} variant="drift" duration={5.5} delay={0.4} />
      <FloatingConfetti className="left-[14%] bottom-[18%]" shape="asterisk" color="#e99500" size={16} opacity={0.45} variant="sway" duration={7} delay={0.9} />
      <FloatingConfetti className="right-[14%] bottom-[22%]" shape="triangle" color="#ffd166" size={11} opacity={0.55} variant="rise" duration={6.4} delay={0.2} />

      <Squiggle className="absolute right-[8%] top-[18%] hidden -rotate-[10deg] opacity-50 lg:block" color="#dd8d00" width={86} height={22} variant="wave" />
      <Squiggle className="absolute left-[6%] bottom-[14%] hidden rotate-[6deg] opacity-50 lg:block" color="#1f1f1f" width={70} height={20} variant="tilt" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <div className="paper-grain relative overflow-hidden rounded-[2.25rem] bg-[#ffb300] px-7 py-14 text-center shadow-[0_25px_55px_rgba(112,74,2,0.16)] sm:px-16 sm:py-20">
          <Sparkle className="absolute left-[8%] top-[18%]" size={33} color="#fff3d6" />
          <Sparkle className="absolute bottom-[18%] right-[8%]" size={42} color="#fff3d6" />
          <Sparkle className="absolute right-[18%] top-[20%]" size={20} color="#fff3d6" opacity={0.8} variant="tiny-star" />
          <Sparkle className="absolute left-[16%] bottom-[20%]" size={16} color="#fff3d6" opacity={0.8} variant="tiny-star" />
          <span aria-hidden className="absolute right-[17%] top-[21%] h-2 w-2 rounded-full bg-[#fff3d6]" />
          <span aria-hidden className="absolute left-[22%] top-[42%] h-1.5 w-1.5 rounded-full bg-[#fff3d6]/80" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#725000]"
          >
            <Sparkles size={12} fill="currentColor" /> Let&rsquo;s make something special <Sparkles size={12} fill="currentColor" />
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: SETTLE, delay: 0.1 }}
            className="relative mx-auto mt-4 max-w-2xl font-display text-4xl font-black leading-tight tracking-[-0.05em] text-[#1f1f1f] sm:text-5xl"
          >
            Have an idea? <span className="italic">We&rsquo;d love to bring it to life.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="relative mx-auto mt-5 max-w-xl text-sm leading-6 text-[#1f1f1f]/70"
          >
            Tell us what you&rsquo;re dreaming up and we&rsquo;ll help turn it
            into a personal creation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="relative mt-8 flex flex-wrap justify-center gap-3"
          >
            <Cta
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              onMove={tilt}
              onLeave={untilt}
              className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f]/20 bg-[#fffdf7] px-6 py-3.5 text-sm font-bold text-[#1f1f1f] transition hover:-translate-y-0.5"
            >
              <MessageCircle size={17} /> Start your custom order
            </Cta>
            <Link
              href="/custom-order"
              className="inline-flex items-center gap-2 rounded-full border border-[#1f1f1f]/20 bg-[#fffdf7] px-6 py-3.5 text-sm font-bold text-[#1f1f1f] transition hover:-translate-y-0.5"
            >
              Custom order form
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Cursor-tilt CTA wrapper */
function Cta({
  href,
  children,
  className,
  onMove,
  onLeave,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onMove: (e: MouseEvent<HTMLAnchorElement>, max?: number) => void;
  onLeave: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseMove={(e) => onMove(e, 2)}
      onMouseLeave={onLeave}
      className={className}
      style={{
        transform:
          "perspective(400px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
        transition: "transform 240ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </a>
  );
}

