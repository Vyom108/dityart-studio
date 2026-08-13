"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { PRODUCT_CATEGORY_LABELS, products } from "@/data/products";
import type { ProductCategory } from "@/types/product";

const filters: Array<{ id: ProductCategory | "all"; label: string }> = [
  { id: "all", label: "All products" },
  ...Object.entries(PRODUCT_CATEGORY_LABELS).map(([id, label]) => ({ id: id as ProductCategory, label })),
];

export default function HomeProductExplorer() {
  const [active, setActive] = useState<ProductCategory | "all">("all");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = active === "all" || product.category === active;
      const text = `${product.name} ${product.shortDescription} ${PRODUCT_CATEGORY_LABELS[product.category]}`.toLowerCase();
      return matchesCategory && (!term || text.includes(term));
    });
  }, [active, query]);

  return (
    <section id="products" className="scroll-mt-28 bg-[#fffdf7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a46c00]"><Sparkles size={14} fill="currentColor" /> Find your product</p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.055em] text-[#1f1f1f] sm:text-5xl">What are you looking for?</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#1f1f1f]/65">Browse the collection or search for a product. Tap any item to see details and order on WhatsApp.</p>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-[#efdfc3] bg-[#fff8e9] p-4 sm:p-5">
          <label className="flex h-12 items-center gap-3 rounded-xl bg-white px-4 ring-1 ring-[#eadbbd] focus-within:ring-2 focus-within:ring-[#ffb300]">
            <Search size={18} className="shrink-0 text-[#9b6500]" aria-hidden />
            <span className="sr-only">Search products</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search wallet card, fridge magnet, sticker..." className="min-w-0 flex-1 bg-transparent text-sm text-[#1f1f1f] outline-none placeholder:text-[#1f1f1f]/45 sm:text-base" />
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
            {filters.map((filter) => <button key={filter.id} type="button" onClick={() => setActive(filter.id)} aria-pressed={active === filter.id} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition ${active === filter.id ? "bg-[#1f1f1f] text-white" : "border border-[#dfc98f] bg-white text-[#1f1f1f] hover:border-[#ffb300]"}`}>{filter.label}</button>)}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4"><p className="text-sm font-semibold text-[#1f1f1f]/60">{visible.length} products</p><Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1f1f1f] hover:text-[#a46c00]">View all products <ArrowRight size={16} /></Link></div>
        {visible.length ? <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => <article key={product.slug} className="group overflow-hidden rounded-[1.35rem] border border-[#efdfc3] bg-white shadow-[0_10px_24px_rgba(96,66,16,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(96,66,16,0.12)]">
            <Link href={`/products/${product.slug}`} className="block"><div className="relative aspect-[4/3] overflow-hidden bg-[#fff3d6]"><Image src={`/images/products/${product.image}`} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" /></div></Link>
            <div className="p-3 sm:p-4"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a46c00]">{PRODUCT_CATEGORY_LABELS[product.category]}</p><h3 className="mt-1 font-display text-base font-bold leading-tight text-[#1f1f1f] sm:text-xl">{product.name}</h3><div className="mt-3 flex items-center justify-between gap-2 sm:mt-4 sm:gap-3"><Link href={`/products/${product.slug}`} className="inline-flex min-h-9 items-center gap-1 text-xs font-bold text-[#1f1f1f] hover:text-[#a46c00] sm:min-h-10 sm:text-sm">View <ArrowRight size={14} /></Link><a href={`https://wa.me/919081913600?text=${encodeURIComponent(`Hi DityArt Studio! I would like to order ${product.name}.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Ask about ${product.name} on WhatsApp`} className="grid h-9 w-9 place-items-center rounded-full bg-[#e6f8eb] text-[#16763a] transition hover:bg-[#25D366] hover:text-[#102b18] sm:h-10 sm:w-10"><MessageCircle size={17} className="sm:hidden" /><MessageCircle size={19} className="hidden sm:block" /></a></div></div>
          </article>)}
        </div> : <div className="mt-5 rounded-2xl border border-dashed border-[#d7b46c] bg-[#fff8e9] p-8 text-center text-sm text-[#1f1f1f]/65">No products found. Try another word or category.</div>}
      </div>
    </section>
  );
}

