import type { Product, ProductCategory } from "@/types/product";

export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  "personalized-gifts": "Personalized Gifts",
  "kids-stationery": "Kids Stationery",
  "corporate-branding": "Corporate Branding",
};

const product = (slug: string, name: string, category: ProductCategory, image: string, shortDescription: string, features: string[], perfectFor: string[]): Product => ({
  slug, name, category, image, shortDescription,
  description: `${shortDescription} Every DityArt piece is tailored around your colours, words, photos, and the little details that make it feel genuinely yours.`,
  features,
  perfectFor,
});

export const products: Product[] = [
  product("wallet-cards", "Wallet Cards", "personalized-gifts", "Website Products_20260705_210558_0000.png", "A tiny keepsake with a big feeling.", ["Personalised name and message", "Photo-ready layout", "Durable pocket-size finish"], ["Anniversaries", "Birthdays", "Just because"]),
  product("customized-stickers", "Customized Stickers", "personalized-gifts", "Website Products_20260705_210559_0001.png", "Small illustrated stickers made completely yours.", ["Custom names and illustrations", "Vibrant print finish", "Cut to your preferred size"], ["Journals", "Return gifts", "Small business parcels"]),
  product("fridge-magnets", "Fridge Magnets", "personalized-gifts", "Website Products_20260705_210559_0002.png", "Everyday reminders of a favourite person or moment.", ["Photo or illustration options", "Strong magnetic back", "Personal message included"], ["Housewarming gifts", "Family photos", "Milestones"]),
  product("polaroid-photos", "Polaroid Photos", "personalized-gifts", "Website Products_20260705_210559_0003.png", "A stack of memories with room for a handwritten feeling.", ["Choice of photo set", "Classic white border", "Optional captions"], ["Scrapbooks", "Memory boxes", "Birthday gifting"]),
  product("photo-albums", "Photo Albums", "personalized-gifts", "Website Products_20260705_210559_0004.png", "A personal story, beautifully collected page by page.", ["Custom cover design", "Curated page layouts", "Name and date personalization"], ["Weddings", "Baby milestones", "Travel memories"]),
  product("pop-out-frames", "Pop Out Frames", "personalized-gifts", "Website Products_20260705_210559_0005.png", "A playful way to bring a memory off the page.", ["Layered photo composition", "Custom message card", "Display-ready finish"], ["Surprise gifts", "Anniversaries", "Friendship day"]),
  product("wall-art", "Wall Art", "personalized-gifts", "Website Products_20260705_210559_0006.png", "Illustrated and typographic pieces made for your walls.", ["Custom quote or names", "Made to suit your space", "Gift-ready presentation"], ["New homes", "Nurseries", "Workspaces"]),
  product("customized-chocolates", "Customized Chocolates", "personalized-gifts", "Website Products_20260705_210559_0008.png", "Sweet little treats dressed up for the occasion.", ["Personal wrapper design", "Message-ready labels", "Event-friendly quantities"], ["Return gifts", "Celebrations", "Thank-yous"]),
  product("bag-tags", "Bag Tags", "personalized-gifts", "Website Products_20260705_210559_0009.png", "Bright, practical tags that make every bag easy to spot.", ["Name personalization", "Friendly illustrated styles", "Durable finish"], ["School bags", "Travel", "Party favours"]),
  product("mini-activity-books", "Mini Activity Books", "kids-stationery", "Website Products_20260705_210559_0017.png", "Little books designed to keep curious hands happily busy.", ["Age-appropriate activities", "Name on the cover", "Theme-led design"], ["Birthdays", "Travel kits", "Return gifts"]),
  product("coloring-books", "Coloring Books", "kids-stationery", "Website Products_20260705_210559_0012.png", "A creative world with your child at the centre.", ["Custom character or name", "Wholesome activity pages", "Choice of themes"], ["Rainy days", "Birthday gifts", "Classroom fun"]),
  product("magnetic-bookmarks", "Magnetic Bookmarks", "kids-stationery", "Website Products_20260705_210559_0013.png", "A cheerful little place-holder for growing readers.", ["Name and character options", "Strong magnetic fold", "Book-friendly size"], ["Reader gifts", "School surprises", "Party favours"]),
  product("customized-calendars", "Customized Calendars", "kids-stationery", "Website Products_20260705_210559_0014.png", "A year of photos, small wins, and happy reminders.", ["Month-by-month personalisation", "Photo or illustration choices", "Important dates included"], ["New year gifts", "Family desks", "School planners"]),
  product("multiplication-table-cards", "Multiplication Table Cards", "kids-stationery", "Website Products_20260705_210559_0015.png", "Learning tools that feel friendly, clear, and fun to use.", ["Easy-to-read layouts", "Child-friendly design", "Sturdy card stock"], ["Homework time", "School kits", "Young learners"]),
  product("notebook-stickers", "Notebook Stickers", "kids-stationery", "Website Products_20260705_210559_0016.png", "Practical labels with much more personality.", ["Name and subject labels", "Choice of colour palettes", "Ready for school supplies"], ["New term", "School kits", "Organised desks"]),
  product("logo-design", "Logo Design", "corporate-branding", "Website Products_20260705_210600_0022.png", "A warm, memorable visual starting point for your brand.", ["Discovery-led direction", "Primary logo and variations", "Ready-to-use files"], ["New businesses", "Creative refreshes", "Small brands"]),
  product("business-cards", "Business Cards", "corporate-branding", "Website Products_20260705_210600_0019.png", "A first impression with a little more personality.", ["Brand-aligned layout", "Premium print options", "Contact-ready design"], ["Client meetings", "Pop-ups", "Team introductions"]),
  product("letterheads", "Letterheads", "corporate-branding", "Website Products_20260705_210600_0023.png", "Everyday stationery that makes your brand feel considered.", ["Logo placement", "Print and digital versions", "Consistent brand details"], ["Invoices", "Proposals", "Official communication"]),
  product("id-cards", "ID Cards", "corporate-branding", "Website Products_20260705_210600_0020.png", "Clear, polished identity cards designed for real use.", ["Role and photo layout", "Brand-colour matching", "Print-ready files"], ["Teams", "Schools", "Events"]),
  product("product-labels", "Product Labels", "corporate-branding", "Website Products_20260705_210600_0021.png", "Small packaging details that make your product feel complete.", ["Format and size guidance", "Brand-consistent artwork", "Ready for print"], ["Bakers", "Makers", "Retail shelves"]),
  product("banners-and-hoardings", "Banners & Hoardings", "corporate-branding", "Website Products_20260705_210559_0018.png", "Big-format design that stays clear, warm, and recognisable.", ["Campaign-led layouts", "Print-spec ready artwork", "Strong visual hierarchy"], ["Storefronts", "Events", "Local launches"]),
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}



