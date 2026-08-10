import { Suspense } from "react";
import ProductCatalog from "@/components/products/ProductCatalog";

export default function ProductsPage() {
  return <Suspense fallback={<main className="min-h-screen bg-[#fffdf7]" />}><ProductCatalog /></Suspense>;
}
