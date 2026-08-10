"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { PRODUCT_CATEGORY_LABELS, products } from "@/data/products";
import type { ProductCategory } from "@/types/product";

const categories = Object.entries(PRODUCT_CATEGORY_LABELS) as [ProductCategory, string][];

export default function ProductCatalog() {
  const params = useSearchParams();
  const requested = params.get("category") as ProductCategory | null;
  const active = categories.some(([id]) => id === requested) ? requested : null;
  const visible = active ? products.filter((product) => product.category === active) : products;
  return <main className="min-h-screen bg-[#fffdf7] pb-24 pt-32">
    <section className="mx-auto max-w-7xl px-5 lg:px-8"><div className="rounded-[2rem] bg-[#fff3d6] px-7 py-12 text-center sm:px-12 sm:py-16"><p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9b6500]"><Sparkles size={14} fill="currentColor" /> The DityArt collection</p><h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black tracking-[-0.055em] text-[#1f1f1f] sm:text-6xl">Beautifully made.<br /><span className="italic">Always personal.</span></h1><p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#1f1f1f]/65 sm:text-base">Explore handcrafted gifts, little learning worlds, and brand details designed to start a lovely conversation.</p></div>
      <nav aria-label="Product categories" className="mt-8 flex flex-wrap justify-center gap-2"><Link href="/products" className={`rounded-full px-4 py-2 text-sm font-bold ${active ? "border border-[#dfc98f] bg-white text-[#1f1f1f]" : "bg-[#1f1f1f] text-white"}`}>All creations</Link>{categories.map(([id,label]) => <Link key={id} href={`/products?category=${id}`} className={`rounded-full px-4 py-2 text-sm font-bold ${active === id ? "bg-[#ffb300] text-[#1f1f1f]" : "border border-[#dfc98f] bg-white text-[#1f1f1f]"}`}>{label}</Link>)}</nav>
      <p className="mt-10 text-sm font-semibold text-[#1f1f1f]/60">{visible.length} thoughtful creations</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map((product) => <article key={product.slug} className="group overflow-hidden rounded-[1.6rem] border border-[#efdfc3] bg-white shadow-[0_10px_25px_rgba(96,66,16,0.07)]"><Link href={`/products/${product.slug}`} className="block"><div className="relative aspect-[4/3] overflow-hidden bg-[#fff3d6]"><Image src={`/images/products/${product.image}`} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /></div></Link><div className="p-5"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b67500]">{PRODUCT_CATEGORY_LABELS[product.category]}</p><h2 className="mt-2 font-display text-2xl font-bold text-[#1f1f1f]">{product.name}</h2><p className="mt-2 text-sm leading-6 text-[#1f1f1f]/65">{product.shortDescription}</p><div className="mt-5 flex gap-3"><Link href={`/products/${product.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1f1f1f]">See details <ArrowRight size={15} /></Link><a href={`https://wa.me/919081913600?text=${encodeURIComponent(`Hi DityArt Studio! I would like to order ${product.name}.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Ask about ${product.name} on WhatsApp`} className="ml-auto text-[#25D366]"><MessageCircle size={20} /></a></div></div></article>)}</div>
    </section>
  </main>;
}
