export type StudioCategory = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  note: string;
  palette: "amber" | "cream" | "peach";
};

export const studioCategories: StudioCategory[] = [
  { id: "personalized-gifts", title: "Personalized Gifts", kicker: "For the people who are yours", description: "We turn names, photos, and memories into gifts people can keep.", image: "Website Products_20260705_210558_0000.png", imageAlt: "Personalized DityArt Studio wallet card", note: "Made for a favourite person", palette: "cream" },
  { id: "kids-stationery", title: "Kids Stationery", kicker: "Little worlds, made tangible", description: "Fun books and stationery made for children to enjoy.", image: "Website Products_20260705_210559_0017.png", imageAlt: "DityArt Studio mini activity book", note: "Made for curious minds", palette: "peach" },
  { id: "corporate-branding", title: "Corporate Branding", kicker: "Details that make a brand memorable", description: "Simple and clear branding that helps your business stand out.", image: "Website Products_20260705_210600_0020.png", imageAlt: "DityArt Studio custom ID cards", note: "Made for first impressions", palette: "amber" },
];

