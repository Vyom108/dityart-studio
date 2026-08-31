import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 pb-20 pt-32">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <div className="mt-6 space-y-6 text-[#1f1f1f]/70">
        <p>
          <b>Effective Date:</b> August 01, 2025
        </p>
        <p>
          At DityArt Studio, we value your privacy and are committed to protecting your personal information.
        </p>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">Information We Collect</h2>
          <p className="mt-2">
            When you place an order, we may collect details such as your name, email address, contact number, shipping address, and order preferences.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">How We Use Your Information</h2>
          <p className="mt-2">
            This information is used solely to process and deliver your orders, communicate with you regarding your purchase or inquiries, and improve our products and services.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">Information Sharing</h2>
          <p className="mt-2">
            We do not sell, rent, or share your personal information with third parties except as required to deliver your order, such as courier companies, or when required by law.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">Data Security</h2>
          <p className="mt-2">
            We take reasonable measures to protect your information from unauthorized access, alteration, or disclosure.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">Cookies &amp; Analytics</h2>
          <p className="mt-2">
            Our website may use cookies or analytics tools to enhance your browsing experience. These tools collect non-identifiable data such as page visits and device type.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">Your Rights</h2>
          <p className="mt-2">
            You may request to update, correct, or delete your personal data by contacting us at dityartstudio@gmail.com.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">Contact</h2>
          <p className="mt-2">
            If you have any questions about this Privacy Policy, email us at dityartstudio@gmail.com or WhatsApp us at +91 9081913600.
          </p>
        </section>
      </div>
      <Link href="/" className="mt-8 inline-block font-semibold underline">
        Return home
      </Link>
    </main>
  );
}
