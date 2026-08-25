"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/shared/Logo";
import { NAV_ITEMS } from "@/constants/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 lg:px-6">
      <Container>
        <nav
          className={`mx-auto max-w-7xl rounded-[26px] border transition-all duration-500 ${
  scrolled
    ? "bg-white/95 backdrop-blur-2xl border-[#f3e5c7] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
    : "bg-white/85 backdrop-blur-xl border-[#f8ead0] shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
}`}
        >
          <div className="flex h-[74px] items-center justify-between px-5 sm:px-8 lg:px-10">

            <Logo variant="circle" />

            <div className="hidden items-center gap-8 xl:gap-11 lg:flex">

              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-semibold text-[#1f1f1f]/70 transition-all duration-300 hover:text-[#e98d00]"
                >
                  {item.label}
                </Link>
              ))}

            </div>

            <div className="hidden lg:block">
              <Link href="/#contact">
                <Button className="px-6 py-3 text-sm">Start a custom order</Button>
              </Link>
            </div>

            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-[#fff3d6] text-[#1f1f1f] lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={24} />}
            </button>

          </div>
          {menuOpen && (
            <div className="border-t border-[#f3e5c7] px-7 pb-6 pt-4 lg:hidden">
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-[#1f1f1f] hover:bg-[#fff3d6]">
                    {item.label}
                  </Link>
                ))}
                <Link href="/#contact" onClick={() => setMenuOpen(false)} className="mt-1 rounded-full bg-[#1f1f1f] px-5 py-3 text-center text-sm font-semibold text-white">Start a custom order</Link>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
