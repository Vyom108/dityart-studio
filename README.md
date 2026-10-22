# DityArt Studio

A storefront for DityArt Studio, a creative business offering personalized gifts, stationery, and branding products. The site includes a browsable catalog, product detail pages, FAQs, contact information, and a custom order form.

> **AI assistance:** This project was built with substantial AI assistance. I do not claim it as evidence of independent TypeScript or React experience.

## Features

- Home, About, Products, Categories, Contact, FAQ, Privacy, Terms, and Custom Order pages.
- Product catalog with category browsing and individual product pages.
- Custom order form connected to the app's order API.
- WhatsApp contact and ordering links.

## Built with

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion

These are the technologies used in the project; they are not a statement of my independent proficiency with them.

## Order data

The app's order API currently writes data to `data/orders.json` on the server's local filesystem. This is a local/demo implementation; filesystem data may not persist across deployments. Replace the storage and add suitable access protections before using it to collect real customer information in a public production deployment.

## Run locally

You need Node.js and npm.

```bash
git clone https://github.com/Vyom108/dityart-studio.git
cd dityart-studio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other available scripts:

```bash
npm run lint
npm run build
npm run start
```

## Project structure

- `src/app/` — pages and the orders API route
- `src/components/` — layout, product, form, and visual components
- `src/data/products.ts` — product catalog
- `src/lib/orders.ts` — local JSON order persistence
- `public/images/` — product, brand, and hero images
