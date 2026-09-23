export interface Service {
  id: number;
  title: string;
  category: 'hair-patch' | 'hair' | 'beard' | 'skin' | 'spa';
  desc: string;
  img: string;
  price: string;
  time: string;
  badge?: string;
  featured?: boolean;
}

export const servicesData: Service[] = [
  // =========================================================================
  // 1. HAIR PATCH & NON-SURGICAL SYSTEMS (4 UNIQUE SERVICES - NO REPEATED IMAGES)
  // =========================================================================
  {
    id: 1,
    title: "Non-Surgical Hair Patch System",
    category: "hair-patch",
    desc: "100% natural human hair system with micro-skin breathable base, undetectable frontal hairline, and custom contour styling by owner Firoz Khan.",
    img: "/images/real-hair-patch-installation.jpg",
    price: "₹5,999 onwards",
    time: "60-90 mins",
    badge: "PRIMARY SERVICE",
    featured: true,
  },
  {
    id: 2,
    title: "Hair Patch Service & Maintenance",
    category: "hair-patch",
    desc: "Comprehensive servicing, deep hygienic scalp cleansing, medical-grade re-taping/gluing, botanical conditioning & scissor re-styling.",
    img: "/images/hair-patch-transform-2.jpg",
    price: "₹499",
    time: "30-45 mins",
    badge: "MAINTENANCE",
    featured: true,
  },
  {
    id: 3,
    title: "Custom Swiss Lace Frontal System",
    category: "hair-patch",
    desc: "Ultra-thin French/Swiss lace base designed for receding frontal zones with high-density hair integration and seamless skin merge.",
    img: "/images/hair-patch-transform-1.jpg",
    price: "₹6,499 onwards",
    time: "60 mins",
    badge: "PREMIUM LACE",
  },
  {
    id: 4,
    title: "Miracle Silk Base Monofilament System",
    category: "hair-patch",
    desc: "Ultra-durable silk top with multi-directional crown parting, zero knots visibility, perfect for active gym workouts, sports & daily shower.",
    img: "/images/service-hair-patch-silk.jpg",
    price: "₹7,999 onwards",
    time: "60 mins",
    badge: "SILK BASE",
  },

  // =========================================================================
  // 2. HAIRCUTS & PRECISION STYLING (2 UNIQUE REAL INDIAN CUSTOMER SERVICES)
  // =========================================================================
  {
    id: 5,
    title: "Executive Pompadour & Precision Skin Fade",
    category: "hair",
    desc: "Bespoke scissor texturing, high-volume pompadour flow, skin-tapered sides with foil shaver finish, and hot towel refreshment.",
    img: "/images/real_customer/customer1.png",
    price: "₹350",
    time: "35-45 mins",
    badge: "SIGNATURE CUT",
    featured: true,
  },
  {
    id: 6,
    title: "Nikhar Modern Textured Crop & Taper",
    category: "hair",
    desc: "Contemporary layered crop haircut tailored for Indian hair texture, sharp temple lining and custom matte styling clay.",
    img: "/images/real_customer/customer2.png",
    price: "₹300",
    time: "30-40 mins",
    badge: "TRENDING",
  },

  // =========================================================================
  // 3. BEARD SCULPTING & GROOMING (2 UNIQUE REAL INDIAN CUSTOMER SERVICES)
  // =========================================================================
  {
    id: 7,
    title: "Royal Beard Sculpting & Razor Lineup",
    category: "beard",
    desc: "Artisanal beard shaping with straight-razor cheek/neck lines, gradient blend, hot herbal steam towel, and luxury organic beard oil.",
    img: "/images/real_customer/customer6.png",
    price: "₹250",
    time: "25-30 mins",
    badge: "ROYAL CRAFT",
    featured: true,
  },
  {
    id: 8,
    title: "Italian Hot Towel Beard Trim & Shave",
    category: "beard",
    desc: "Classic warm lather straight-razor shave, dual hot towel compress, precision jawline contouring, and soothing luxury aftershave balm.",
    img: "/images/real_customer/customer3.png",
    price: "₹200",
    time: "20-30 mins",
    badge: "HOT TOWEL CARE",
  },

  // =========================================================================
  // 4. SKIN REVIVAL & FACIAL CARE (1 UNIQUE REAL INDIAN CUSTOMER SERVICE)
  // =========================================================================
  {
    id: 9,
    title: "O3+ Bridal Groom Radiance Facial",
    category: "skin",
    desc: "Multi-stage deep pore purification, active tan removal, gentle dead-cell polish, collagen face massage, and radiant brightening peel-off mask.",
    img: "/images/real_customer/customer7.png",
    price: "₹999",
    time: "50-60 mins",
    badge: "GROOM SPECIAL",
    featured: true,
  },

  // =========================================================================
  // 5. HAIR SPA & TEXTURE THERAPY (2 UNIQUE REAL INDIAN CUSTOMER SERVICES)
  // =========================================================================

  {
    id: 10,
    title: "Keratin Protein Intensive Hair Spa",
    category: "spa",
    desc: "Restorative keratin protein infusion, hot ozone steam penetration, frizz control, split-end sealing, and relaxing neck & shoulder massage.",
    img: "/images/real_customer/customer5.png",
    price: "₹850",
    time: "45-60 mins",
    badge: "SPA THERAPY",
  },
];