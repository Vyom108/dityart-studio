export type ProductCategory = "personalized-gifts" | "kids-stationery" | "corporate-branding";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  perfectFor: string[];
  gallery: string[];
};
