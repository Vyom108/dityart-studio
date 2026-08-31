import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 pb-20 pt-32">
      <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
      <div className="mt-6 space-y-6 text-[#1f1f1f]/70">
        <p>
          <b>Effective Date:</b> August 01, 2025.
        </p>
        <p>
          By placing an order with DityArt Studio, you agree to the following terms:
        </p>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">1. Products &amp; Services</h2>
          <p className="mt-2">
            We create customized designs and gift products as per customer specifications. Product images on the website are for reference; final products may vary slightly due to printing, materials, or design adjustments.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">2. Orders &amp; Payment</h2>
          <p className="mt-2">
            Full payment is required before order processing. Orders are confirmed only after successful payment and receipt of all necessary design inputs from the customer.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">3. Design Approval</h2>
          <p className="mt-2">
            We provide digital previews for customized orders. Once a design is approved by the customer, no further changes or cancellations will be accepted.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">4. Shipping &amp; Delivery</h2>
          <p className="mt-2">
            Delivery timelines may vary based on location and courier service. DityArt Studio is not responsible for delays caused by third-party courier companies.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">5. Returns &amp; Refunds</h2>
          <p className="mt-2">
            Since our products are custom-made, returns and refunds are not applicable except in the case of manufacturing defects or damage during shipping. Such cases must be reported within 48 hours of delivery with photo proof.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">6. Intellectual Property</h2>
          <p className="mt-2">
            All designs created by DityArt Studio remain our intellectual property and may not be reproduced, resold, or redistributed without our written permission.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-[#1f1f1f]">7. Changes to Terms</h2>
          <p className="mt-2">
            We may update these Terms of Service from time to time. Continued use of our services after changes means you accept the updated terms.
          </p>
        </section>
      </div>
      <Link href="/" className="mt-8 inline-block font-semibold underline">
        Return home
      </Link>
    </main>
  );
}
