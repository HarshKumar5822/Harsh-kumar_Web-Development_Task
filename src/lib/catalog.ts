import type { Product } from "@/lib/api";

// Central catalogue used by the homepage and product page fallbacks.
// Update the images or add/remove products here to customize the shop.
export const CATALOG_PRODUCTS: Product[] = [
  {
    _id: "fallback-1",
    name: "Midnight Elegance",
    description:
      "A sophisticated blend of dark vanilla, amber, and musk for unforgettable evenings.",
    price: 89.99,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // dark amber perfume bottle on blue background
      "https://images.unsplash.com/photo-1522312298940-653d2b79db65?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "fallback-2",
    name: "Rose Garden",
    description:
      "A romantic floral bouquet of Bulgarian rose, jasmine, and peony.",
    price: 95.0,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // pink feminine perfume bottle with flowers
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "fallback-3",
    name: "Citrus Burst",
    description:
      "Zesty notes of lemon, orange, and grapefruit for an energizing start to the day.",
    price: 65.0,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // bright citrus‑toned perfume bottle
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "fallback-4",
    name: "Ocean Breeze",
    description:
      "An invigorating aquatic scent with sea salt, bergamot, and white florals.",
    price: 75.5,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // cool blue perfume bottle
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "fallback-5",
    name: "Velvet Woods",
    description:
      "A warm unisex scent with cedarwood, vetiver, and tonka bean for cozy evenings.",
    price: 110.0,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // deep blue luxury perfume bottle
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "fallback-6",
    name: "Amber Dusk",
    description:
      "Smoky amber and sandalwood wrapped in soft vanilla, inspired by golden sunsets.",
    price: 99.0,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // dark bottle on dramatic background
      "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "fallback-7",
    name: "Jasmine Noir",
    description:
      "An intense white‑floral composition of jasmine, tuberose, and patchouli.",
    price: 120.0,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // elegant glass perfume with flowers
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    _id: "fallback-8",
    name: "Fresh Linen",
    description:
      "Clean, airy notes of cotton, white musk, and powdery iris for everyday elegance.",
    price: 70.0,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // minimal clear bottle on soft background
      "https://images.unsplash.com/photo-1612810432633-96f64dc8ccb6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];


