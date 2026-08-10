const faqs = [
  ["How do I place an order?", "Send us a WhatsApp message with your idea, occasion, and any reference photos. We will guide you from there."],
  ["Can I customise every product?", "Yes. Names, messages, colours, photos, and many design details can be tailored to your story."],
  ["How early should I enquire?", "The earlier the better, especially for gifting dates or larger brand orders. We will confirm the timeline on WhatsApp."],
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-[#fff8e9] py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-center text-xs font-bold uppercase tracking-[.18em] text-[#a46c00]">Helpful details</p>
        <h2 className="mt-4 text-center font-display text-4xl font-black tracking-[-.05em] sm:text-5xl">A few questions, answered.</h2>
        <div className="mt-12 space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-2xl border border-[#eddcb9] bg-white px-6 py-5">
              <summary className="cursor-pointer list-none font-display text-xl font-bold">{question}</summary>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#1f1f1f]/65">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
