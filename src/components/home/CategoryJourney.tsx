"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import DoodleArrow from "@/components/decor/DoodleArrow";
import FloatingConfetti from "@/components/decor/FloatingConfetti";
import PaperBlob from "@/components/decor/PaperBlob";
import SectionSparkles from "@/components/decor/SectionSparkles";
import Sparkle from "@/components/decor/Sparkle";
import Squiggle from "@/components/decor/Squiggle";
import { site } from "@/config/site";
import { studioCategories, type StudioCategory } from "@/data/studioCategories";

const EASE = [0.22, 1, 0.36, 1] as const;
const SETTLE = [0.16, 0.84, 0.32, 1] as const;

const productPreviews: Record<string, string[]> = {
  "personalized-gifts": ["Wallet Cards", "Polaroid Photos", "Customized Chocolates"],
  "kids-stationery": ["Mini Activity Books", "Coloring Books", "Story Books"],
  "corporate-branding": ["Business Cards", "ID Cards", "Product Labels"],
};

function CategoryIntroduction() {
  return (
    <section id="category-atlas" className="relative isolate overflow-hidden bg-[#fff3d6] py-24 sm:py-28">
      <div aria-hidden className="paper-grain absolute inset-0 opacity-20" />
      <PaperBlob color="#ffb300" size="h-[28rem] w-[28rem]" className="-left-40 -top-32" blur={80} opacity={0.18} />
      <PaperBlob color="#ffd166" size="h-72 w-72" className="-right-28 bottom-0" blur={70} opacity={0.45} shape="oval" />
      <SectionSparkles seed={7} density="med" palette="amber" />
      <FloatingConfetti className="left-[8%] top-[24%]" shape="plus" color="#ffd166" size={13} opacity={0.6} variant="rise" duration={6.5} />
      <FloatingConfetti className="right-[10%] top-[18%]" shape="asterisk" color="#ffb300" size={16} opacity={0.48} variant="sway" duration={7} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#f1d496] bg-[#fffdf7] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#805500]"><Sparkles size={14} fill="currentColor" /> What we make</p>
          <h2 className="mt-5 font-display text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#1f1f1f] sm:text-5xl lg:text-6xl">Three creative worlds,<br /><span className="hand-underline italic">made personal.</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#1f1f1f]/70 sm:text-lg">Thoughtful pieces for your people, little learners, and the brands you&apos;re building.</p>
        </div>
        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          {studioCategories.map((category, index) => <CategoryTeaser key={category.id} category={category} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function CategoryTeaser({ category, index }: { category: StudioCategory; index: number }) {
  const rotation = [-3, 2, -2][index];
  return (
    <motion.article initial={{ opacity: 0, y: 20, rotate: rotation }} whileInView={{ opacity: 1, y: 0, rotate: rotation }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: SETTLE, delay: index * 0.08 }} className="group relative">
      <div aria-hidden className="absolute -inset-2 rounded-[1.8rem] bg-[#ffd166]/55" style={{ transform: `rotate(${rotation > 0 ? -2 : 2}deg)` }} />
      <div className="relative overflow-hidden rounded-[1.55rem] border-[6px] border-white bg-white p-1.5 shadow-[0_18px_40px_rgba(75,50,6,0.15)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-[#fff8e9]"><Image src={`/images/products/${category.image}`} alt={category.imageAlt} fill sizes="(max-width: 768px) 90vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
        <div className="flex items-end justify-between gap-3 px-3 pb-3 pt-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#b67500]">0{index + 1}</p><h3 className="mt-1 font-display text-xl font-bold text-[#1f1f1f]">{category.title}</h3></div><Link href={`#${category.id}`} aria-label={`Explore ${category.title}`} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1f1f1f] text-white transition duration-300 group-hover:-translate-y-1"><ArrowRight size={17} /></Link></div>
      </div>
    </motion.article>
  );
}

function CategoryChapter({ category, index }: { category: StudioCategory; index: number }) {
  const reversed = index === 1;
  const bg = category.palette === "amber" ? "bg-[#fff3d6]" : category.palette === "peach" ? "bg-[#fff8e9]" : "bg-[#fffdf7]";
  const previews = productPreviews[category.id] ?? [];
  const whatsappHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(`Hi DityArt Studio! I would like to know more about ${category.title}.`)}`;
  const words = category.title.split(" ");
  return (
    <section id={category.id} className={`relative isolate overflow-hidden py-24 sm:py-32 ${bg}`}>
      <div aria-hidden className="paper-grain absolute inset-0 opacity-20" />
      <PaperBlob color={category.palette === "amber" ? "#ffb300" : "#ffd166"} size="h-[28rem] w-[28rem]" className={reversed ? "-right-40 -top-32" : "-left-40 -top-32"} blur={75} opacity={0.2} />
      <PaperBlob color="#fff3d6" size="h-72 w-72" className={reversed ? "-left-28 bottom-6" : "-right-28 bottom-6"} blur={65} opacity={0.65} shape="oval" />
      <SectionSparkles seed={17 + index * 19} density="med" palette="amber" />
      <Squiggle className={`absolute ${reversed ? "left-[8%] bottom-[17%]" : "right-[8%] bottom-[17%]"} hidden opacity-55 lg:block`} color="#a46c00" width={92} height={24} variant="wave" />
      <FloatingConfetti className="left-[8%] top-[18%]" shape="asterisk" color="#ffb300" size={16} opacity={0.52} variant="sway" duration={7} />
      <FloatingConfetti className="right-[10%] top-[25%]" shape="plus" color="#ffd166" size={12} opacity={0.64} variant="drift" duration={6.2} delay={0.4} />
      <span aria-hidden className="pointer-events-none absolute right-[7%] top-[7%] select-none font-display text-[9rem] font-black leading-none text-[#1f1f1f]/[0.045] sm:text-[14rem]">0{index + 1}</span>

      <div className={`relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <motion.figure initial={{ opacity: 0, y: 28, rotate: reversed ? -3 : 3 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: SETTLE }} className="relative mx-auto w-full max-w-[35rem]">
          <div aria-hidden className={`absolute -inset-4 rounded-[2.5rem] bg-[#ffd166]/60 ${reversed ? "rotate-[4deg]" : "-rotate-[4deg]"}`} />
          <div className="relative overflow-hidden rounded-[2rem] border-[7px] border-white bg-white p-2 shadow-[0_28px_60px_rgba(75,50,6,0.18)]">
            <span aria-hidden className="absolute -top-3 left-1/2 z-10 h-6 w-32 -translate-x-1/2 -rotate-[3deg] rounded-[2px] bg-[#ffd166]/80" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]"><Image src={`/images/products/${category.image}`} alt={category.imageAlt} fill sizes="(max-width: 1024px) 90vw, 44vw" className="object-cover" /></div>
            <figcaption className="flex items-center justify-center gap-2 px-3 pb-2 pt-4 text-center font-display text-sm font-bold text-[#1f1f1f]"><Sparkle size={11} color="#ffb300" variant="tiny-star" />{category.note}<Sparkle size={11} color="#ffb300" variant="tiny-star" /></figcaption>
          </div>
          <DoodleArrow className={`absolute ${reversed ? "-left-16 -top-11 rotate-[14deg]" : "-right-14 -bottom-9 -rotate-[10deg]"} hidden lg:block`} color="#9b6500" flip={reversed} />
        </motion.figure>
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease: EASE }} className="text-xs font-bold uppercase tracking-[0.18em] text-[#b67500]">0{index + 1} · {category.kicker}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: SETTLE, delay: 0.08 }} className="mt-4 max-w-xl font-display text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#1f1f1f] sm:text-5xl lg:text-6xl">{words[0]} <span className="hand-underline italic">{words.slice(1).join(" ")}</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: EASE, delay: 0.16 }} className="mt-6 max-w-lg text-base leading-7 text-[#1f1f1f]/70 sm:text-lg sm:leading-8">{category.description}</motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: EASE, delay: 0.24 }} className="mt-7 flex flex-wrap gap-2">{previews.map((item) => <span key={item} className="rounded-full border border-[#e8d7b1] bg-white/85 px-3 py-1.5 text-xs font-semibold text-[#1f1f1f]/70">{item}</span>)}</motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: EASE, delay: 0.32 }} className="mt-8 flex flex-wrap gap-3">
            <Link href={`/products?category=${category.id}`} className="group inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(31,31,31,0.15)] transition hover:-translate-y-0.5">Browse {category.title}<ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d9bc79] bg-white px-6 py-3.5 text-sm font-bold text-[#1f1f1f] transition hover:-translate-y-0.5"><MessageCircle size={17} className="text-[#25D366]" />Ask on WhatsApp</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function CategoryJourney() {
  return <><CategoryIntroduction /><div id="products" className="sr-only">DityArt Studio product categories</div>{studioCategories.map((category, index) => <CategoryChapter key={category.id} category={category} index={index} />)}</>;
}

