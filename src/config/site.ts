/**
 * Centralized site metadata. Kept in code (not env) because none of
 * these are secrets — they're public-facing studio facts. If you need
 * to rotate the contact email or social handles later, edit here and
 * the footer / contact section both pick it up.
 */
export const site = {
  name: "DityArt Studio",
  shortName: "DityArt",
  tagline: "Where Creativity Meets Craftsmanship.",
  description:
    "Custom gifts, kids stationery, and business designs made with care in Rajkot.",
  city: "Rajkot",
  country: "India",
  since: 2019,
  contact: {
    email: "dityartstudio@gmail.com",
    whatsapp: "919081913600",
    instagram: "https://instagram.com/dityart_studio",
    facebook: "https://facebook.com/dityartstudio",
  },
  hours: {
    label: "Studio hours",
    value: "9:00 am to 9:00 pm",
  },
} as const;

export type Site = typeof site;



