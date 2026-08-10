"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

import FloatingConfetti from "@/components/decor/FloatingConfetti";
import PaperBlob from "@/components/decor/PaperBlob";
import SectionSparkles from "@/components/decor/SectionSparkles";
import Sparkle from "@/components/decor/Sparkle";
import Squiggle from "@/components/decor/Squiggle";
import DoodleArrow from "@/components/decor/DoodleArrow";

const EASE = [0.22, 1, 0.36, 1] as const;
const SETTLE = [0.16, 0.84, 0.32, 1] as const;

type Tile = {
  src: string;
  alt: string;
  caption: string;
  /** Tailwind grid placement. We use a 4-col grid on lg to make a hand-arranged collage. */
  span: string;
  rotate: number;
  priority?: boolean;
};

/**
 * Curated subset of the studio's creations. The full collection lives
 * on /products — this is the editorial pick that lives on the home page.
 *
 * The `span` values target the lg grid (4 columns) and produce a varied,
 * magazine-like layout. On smaller screens each tile is full width.
 */
const TILES: Tile[] = [
  {
    src: "/images/products/Website Products_20260705_210558_0000.png",
    alt: "Personalized wallet card by DityArt Studio",
    caption: "Personalized wallet card",
    span: "lg:col-span-2 lg:row-span-2",
    rotate: -3,
    priority: true,
  },
  {
    src: "/images/products/Website Products_20260705_210559_0003.png",
    alt: "DityArt Studio polaroid photo keepsake",
    caption: "Polaroid memories",
    span: "lg:col-span-1",
    rotate: 4,
  },
  {
    src: "/images/products/Website Products_20260705_210559_0009.png",
    alt: "DityArt Studio custom sticker sheet",
    caption: "Sticker stories",
    span: "lg:col-span-1",
    rotate: -5,
  },
  {
    src: "/images/products/Website Products_20260705_210600_0020.png",
    alt: "DityArt Studio custom ID cards",
    caption: "Branding touches",
    span: "lg:col-span-1",
    rotate: 6,
  },
  {
    src: "/images/products/Website Products_20260705_210559_0012.png",
    alt: "DityArt Studio personalized gift box",
    caption: "Gift box details",
    span: "lg:col-span-1",
    rotate: -4,
  },
  {
    src: "/images/products/Website Products_20260705_210559_0014.png",
    alt: "DityArt Studio customized calendar",
    caption: "Corporate gifting",
    span: "lg:col-span-2",
    rotate: 3,
  },
  {
    src: "/images/products/Website Products_20260705_210559_0017.png",
    alt: "DityArt Studio mini activity book",
    caption: "Kids collection",
    span: "lg:col-span-1",
    rotate: -6,
  },
  {
    src: "/images/products/Website Products_20260705_210559_0008.png",
    alt: "DityArt Studio handcrafted creation",
    caption: "Made for you",
    span: "lg:col-span-1",
    rotate: 5,
  },
];

/**
 * Gallery — the "Gallery" anchor on the home page.
 *
 * Composition:
 *   1. Atmospheric background (paper blobs + section sparkles + doodles)
 *   2. Header: kicker chip + hand-underlined headline + lede
 *   3. 8-tile magazine-style grid with hover lift and rotated polaroid feel
 *   4. Inline "See all creations" CTA card
 */
export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden bg-[#fffdf7] py-24 sm:py-32"
    >
      {/* Atmospheric background */}
      <div aria-hidden className="paper-grain absolute inset-0 opacity-22" />
      <PaperBlob
        color="#ffb300"
        size="h-[28rem] w-[28rem]"
        className="-right-40 -top-32"
        blur={80}
        opacity={0.18}
      />
      <PaperBlob
        color="#ffd166"
        size="h-72 w-72"
        className="-left-24 bottom-20"
        blur={70}
        opacity={0.4}
        shape="oval"
      />
      <PaperBlob
        color="#fff3d6"
        size="h-80 w-80"
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        blur={60}
        opacity={0.45}
      />
      <SectionSparkles seed={29} density="med" palette="amber" />

      {/* Decorative confetti */}
      <FloatingConfetti
        className="left-[8%] top-[16%]"
        shape="asterisk"
        color="#ffb300"
        size={16}
        opacity={0.55}
        variant="sway"
        duration={7}
        delay={0.2}
      />
      <FloatingConfetti
        className="right-[9%] top-[22%]"
        shape="plus"
        color="#ffd166"
        size={12}
        opacity={0.65}
        variant="rise"
        duration={6.2}
        delay={0.5}
      />
      <FloatingConfetti
        className="left-[12%] bottom-[18%]"
        shape="triangle"
        color="#e99500"
        size={11}
        opacity={0.55}
        variant="drift"
        duration={5.8}
        delay={0.9}
      />
      <FloatingConfetti
        className="right-[12%] bottom-[20%]"
        shape="dot"
        color="#ffb300"
        size={9}
        opacity={0.7}
        variant="rise"
        duration={6.4}
        delay={0.3}
      />

      {/* Doodle accents */}
      <Squiggle
        className="absolute left-[6%] top-[10%] hidden rotate-[6deg] opacity-50 lg:block"
        color="#1f1f1f"
        width={80}
        height={22}
        variant="loop"
      />
      <Squiggle
        className="absolute right-[6%] bottom-[12%] hidden -rotate-[8deg] opacity-60 lg:block"
        color="#dd8d00"
        width={86}
        height={22}
        variant="wave"
      />
      <DoodleArrow
        className="absolute left-[3%] bottom-[10%] hidden -rotate-[18deg] lg:block"
        color="#a46c00"
        width={90}
        height={60}
        flip
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-[#f1d496] bg-[#fff8e8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#805500] sm:text-xs"
          >
            <Sparkles size={14} fill="currentColor" />
            The gallery
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: SETTLE, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-black leading-[0.98] tracking-[-0.055em] text-[#1f1f1f] sm:text-5xl lg:text-6xl"
          >
            A little peek inside
            <br />
            <span className="hand-underline italic">the studio.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#1f1f1f]/70 sm:text-lg sm:leading-8"
          >
            A handful of recent creations &mdash; each one personalized,
            hand-finished, and made for the person it was meant for.
          </motion.p>
        </div>

        {/* Tile grid — magazine-style. On lg, spans produce a varied layout. */}
        <div className="relative mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-4">
          {TILES.map((tile, i) => (
            <GalleryTile key={tile.src} tile={tile} index={i} />
          ))}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: SETTLE, delay: 0.1 }}
          className="relative mt-16 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[2rem] border border-[#f0d38c] bg-[#ffb300] px-7 py-9 text-center text-[#1f1f1f] shadow-[0_25px_55px_rgba(177,112,0,0.16)] sm:flex-row sm:text-left"
        >
          <div aria-hidden className="paper-grain absolute inset-0 opacity-15" />
          <Sparkle
            className="absolute left-[6%] top-[16%]"
            size={24}
            color="#fff3d6"
          />
          <Sparkle
            className="absolute right-[8%] bottom-[20%]"
            size={18}
            color="#fff3d6"
            opacity={0.85}
            variant="tiny-star"
          />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7a5000]">
              The full collection
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl">
              Want to see everything we make?
            </h3>
            <p className="mt-2 max-w-md text-sm text-[#1f1f1f]/70 sm:text-base">
              Browse the entire DityArt catalogue &mdash; or send us a message
              and we&rsquo;ll start something custom for you.
            </p>
          </div>
          <div className="relative flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1f1f1f] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(31,31,31,0.18)] transition duration-300 hover:-translate-y-0.5"
            >
              See all creations
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[#1f1f1f]/20 bg-[#fffdf7] px-6 py-3.5 text-sm font-bold text-[#1f1f1f] transition duration-300 hover:-translate-y-0.5"
            >
              <Heart size={17} fill="#ffb300" className="text-[#ffb300]" />
              Make something custom
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------- */
/* GalleryTile — single image card with hover lift and polaroid-style tilt   */
/* ------------------------------------------------------------------------- */
function GalleryTile({ tile, index }: { tile: Tile; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: EASE, delay: (index % 4) * 0.06 }}
      className={`group relative ${tile.span}`}
    >
      <motion.div
        whileHover={{ y: -6, rotate: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative h-full w-full"
        style={{ rotate: tile.rotate }}
      >
        <div
          aria-hidden
          className="absolute -inset-2 rounded-[1.8rem] bg-[#ffd166]/60"
          style={{ transform: "rotate(-2deg)", filter: "blur(0.5px)" }}
        />
        <div className="relative h-full overflow-hidden rounded-[1.6rem] border-[6px] border-white bg-white p-1.5 shadow-[0_18px_40px_rgba(75,50,6,0.16)]">
          <div className="relative h-full min-h-[12rem] overflow-hidden rounded-[1.05rem] bg-[#fff3d6]">
            <Image
              src={tile.src}
              alt={tile.alt}
              fill
              priority={tile.priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            {/* Tag chip on hover */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/55 to-transparent p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-white">
                <Sparkle size={13} color="#ffd166" variant="tiny-star" />
                {tile.caption}
              </p>
            </div>
          </div>
        </div>
        <Sparkle
          className="absolute -right-1 -top-1 z-10"
          size={14}
          color="#ffb300"
          opacity={0.9}
          variant="tiny-star"
        />
      </motion.div>

      <p className="mt-3 text-center font-display text-sm font-bold text-[#1f1f1f] sm:text-base">
        {tile.caption}
      </p>
    </motion.div>
  );
}


