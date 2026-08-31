"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Sparkle from "@/components/decor/Sparkle";

const EASE = [0.22, 1, 0.36, 1] as const;
const SETTLE = [0.16, 0.84, 0.32, 1] as const;

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fffdf7] pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20">
      <div aria-hidden className="absolute left-[-8rem] top-24 h-64 w-64 rounded-full bg-[#ffd166]/25 blur-3xl" />
      <div aria-hidden className="absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-[#ffb300]/15 blur-3xl" />
      <Sparkle className="absolute left-[5%] top-[31%] hidden sm:block" size={18} color="#ffd166" opacity={0.8} />
      <Sparkle className="absolute right-[8%] top-[20%] hidden lg:block" size={24} color="#ffb300" opacity={0.65} />
      <Sparkle className="absolute right-[13%] bottom-[16%] hidden sm:block" size={13} color="#ffd166" opacity={0.7} variant="tiny-star" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: EASE }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#f1d496] bg-[#fff8e8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#805500] sm:text-xs"><Sparkles size={14} fill="currentColor" /> Made with heart in Rajkot</p>
          <h1 className="mt-5 max-w-xl font-display text-[3rem] font-black leading-[0.95] tracking-[-0.06em] text-[#1f1f1f] sm:text-6xl lg:text-[3.75rem]">
            Where Creativity,            <br />
            <span className="relative inline-block pb-3 text-[#e99500] sm:pb-4"><HandUnderline>Meets Craftsmanship</HandUnderline></span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#1f1f1f]/70 sm:text-lg sm:leading-8">Personalized gifts, kids stationery, and business details made for your people and your story.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#products" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1f1f1f] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_25px_rgba(31,31,31,0.16)] transition hover:-translate-y-0.5 hover:bg-[#363636] sm:text-base">Explore products <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
            <Link href="/custom-order" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#d7b46c] bg-white px-6 py-3 text-sm font-bold text-[#1f1f1f] transition hover:bg-[#fff8e9] sm:text-base">Share your idea <Heart size={17} fill="#ffb300" className="text-[#ffb300]" /></Link>
          </div>
          <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#1f1f1f]/60"><span className="text-[#ffb300]">✦ ✦ ✦</span> Tiny Details, Big Feelings.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, ease: EASE, delay: 0.08 }} className="relative mx-auto h-[20rem] w-full max-w-[37rem] sm:h-[27rem] lg:h-[31rem]">
          <div aria-hidden className="absolute inset-x-[8%] inset-y-[10%] rotate-[-3deg] rounded-[2.4rem] bg-[#ffd166]" />
          <div aria-hidden className="absolute inset-x-[12%] inset-y-[13%] rotate-[3deg] rounded-[2.2rem] bg-[#ffb300]" />
          <div className="absolute inset-x-[16%] inset-y-[16%] overflow-hidden rounded-[2rem] bg-[#fff3d6]">
            <Image
              src="/images/hero/girl-story-cutout.png"
              alt="DityArt Studio girl illustration"
              width={512}
              height={512}
              priority
              sizes="(max-width: 640px) 54vw, 32vw"
              className="absolute -bottom-[10%] -left-[12%] h-[112%] w-auto max-w-none object-contain object-bottom"
            />
            <div className="absolute right-[3%] top-1/2 flex w-[58%] -translate-y-1/2 items-center justify-center rounded-2xl bg-white/5 px-2 py-2 text-center sm:px-3 sm:py-3">
              <Image
                src="/images/brand/horizontal-logo.png"
                alt="DityArt Studio"
                width={3600}
                height={1800}
                priority
                sizes="(max-width: 640px) 26vw, 15vw"
                className="h-auto w-full max-w-[18rem] translate-x-2 object-contain lg:max-w-[20rem] lg:translate-x-5"              />
            </div>
          </div>
          <Sparkle className="absolute left-[10%] top-[18%]" size={17} color="#ffd166" opacity={0.9} />
          <Sparkle className="absolute left-[18%] bottom-[13%]" size={13} color="#ffb300" opacity={0.75} variant="tiny-star" />
          <Sparkle className="absolute right-[16%] top-[11%]" size={22} color="#ffb300" />
          <Sparkle className="absolute right-[8%] top-[37%]" size={14} color="#ffd166" opacity={0.85} variant="tiny-star" />
          <Sparkle className="absolute bottom-[9%] right-[20%]" size={18} color="#ffb300" opacity={0.7} />
          <Sparkle className="absolute bottom-[15%] left-[13%]" size={14} color="#ffd166" />
        </motion.div>
      </div>
      <a href="#products" className="relative mx-auto mt-4 flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#785300] hover:text-[#1f1f1f]"><ArrowDown size={14} /> Browse products</a>
    </section>
  );
}

function HandUnderline({ children }: { children: React.ReactNode }) {
  return <span className="relative inline-block"><span className="relative z-10">{children}</span><motion.span aria-hidden className="absolute -bottom-3 left-[2%] z-0 h-2 w-[96%] translate-y-2 origin-left rotate-[-2deg] rounded-full bg-[#ffd166] sm:-bottom-4 sm:h-2.5" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.85, ease: SETTLE, delay: 0.55 }} /></span>;
}
