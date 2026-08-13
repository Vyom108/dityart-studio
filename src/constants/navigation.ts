export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/#products",
  },
  {
    label: "About",
    href: "/#story",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

