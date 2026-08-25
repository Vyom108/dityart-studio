import { MapPinned } from "lucide-react";

const notes = [
  ["Aarohi", "The tiniest details were so us. It felt incredibly personal from the first message."],
  ["Niyati", "Beautiful design, kind communication, and a gift everyone asked about."],
  ["Meera", "Our stationery looked polished but still had the warmth we wanted."],
];

export default function Testimonials() {
  return (
    <section className="bg-[#fffdf7] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[.18em] text-[#a46c00]">Little notes of love</p>
        <h2 className="mt-4 text-center font-display text-4xl font-black tracking-[-.05em] sm:text-5xl">Made for people, remembered by people.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {notes.map(([name, quote]) => (
            <blockquote key={name} className="rounded-[1.7rem] border border-[#f0dfbf] bg-[#fff8e9] p-7">
              <p className="font-display text-xl font-bold leading-relaxed">“{quote}”</p>
              <footer className="mt-6 text-sm font-bold text-[#a46c00]">{name}</footer>
            </blockquote>
          ))}
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=DityArt+Studio+Rajkot"
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto mt-10 flex w-fit items-center gap-3 rounded-full border border-[#f0dfbf] bg-[#fff8e9] px-6 py-3.5 text-left text-[#1f1f1f] transition hover:-translate-y-0.5 hover:border-[#e99500]"
        >
          <MapPinned size={19} className="shrink-0 text-[#4285F4]" />
          <span className="flex flex-col leading-tight">
            <span className="font-bold">Loved our work?</span>
            <span className="mt-1 text-sm text-[#1f1f1f]/65 group-hover:text-[#e98d00]">Read or leave us a Google review</span>
          </span>
        </a>
      </div>
    </section>
  );
}
