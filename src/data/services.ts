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
  // 1. HAIR PATCH & NON-SURGICAL SYSTEMS (PRIMARY FLAGSHIP - 5 SERVICES)
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
    badge: "POPULAR",
    featured: true,
  },
  {
    id: 3,
    title: "Custom Swiss Lace Frontal System",
    category: "hair-patch",
    desc: "Ultra-thin French/Swiss lace base designed for receding frontal zones with high-density hair integration and seamless skin merge.",
    img: "/images/service-hair-patch-lace.jpg",
    price: "₹6,499 onwards",
    time: "60 mins",
    badge: "PREMIUM LACE",
  },
  {
    id: 4,
    title: "Hair Patch Scalp Detox & Deep Spa",
    category: "hair-patch",
    desc: "Intensive scalp therapy for hair system wearers — anti-fungal treatment, soothing steam, and hair patch nourishment therapy.",
    img: "/images/hair-patch-transform-1.jpg",
    price: "₹799",
    time: "45 mins",
    badge: "HYGIENE CARE",
  },
  {
    id: 5,
    title: "Miracle Silk Base Monofilament System",
    category: "hair-patch",
    desc: "Ultra-durable silk top with multi-directional crown parting, zero knots visibility, perfect for active gym workouts, sports & daily shower.",
    img: "/images/service-hair-patch-silk.jpg",
    price: "₹7,999 onwards",
    time: "60 mins",
    badge: "SILK BASE",
  },

  // =========================================================================
  // 2. HAIRCUTS & PRECISION STYLING (5 SERVICES)
  // =========================================================================
  {
    id: 6,
    title: "Executive Fade & Precision Cut",
    category: "hair",
    desc: "Bespoke scissor work, low/mid/high skin fade with foil shaver finish, texture definition, and hot towel neck shave.",
    img: "/images/service-haircut.jpg",
    price: "₹350",
    time: "30-45 mins",
    badge: "SIGNATURE",
  },
  {
    id: 7,
    title: "Classic Scissor Silhouette & Styling",
    category: "hair",
    desc: "Full shears-over-comb traditional haircut for businessmen and classic gentlemen desiring natural length and volume flow.",
    img: "/images/gallery-textured-crop.jpg",
    price: "₹400",
    time: "40 mins",
  },
  {
    id: 8,
    title: "Textured Crop & Low Taper Fade",
    category: "hair",
    desc: "Modern messy top crop with razor-sharp temple taper, matte clay styling, and hairline enhancement.",
    img: "/images/hero-slide-3.jpg",
    price: "₹350",
    time: "35 mins",
  },
  {
    id: 9,
    title: "Junior & Young Gentleman Cut",
    category: "hair",
    desc: "Patient, stylish haircutting for boys and young men with trendy styling and gentle scalp wash.",
    img: "/images/services-hero/hero-card-haircut.jpg",
    price: "₹250",
    time: "25 mins",
  },
  {
    id: 10,
    title: "Groom Signature Styling & High-Fashion Blowdry",
    category: "hair",
    desc: "Complete event-ready styling, volume blowdry, precision pomade texture sculpting, and high-hold shine setting spray.",
    img: "/images/service-groom-styling.jpg",
    price: "₹500",
    time: "30 mins",
    badge: "EVENT READY",
  },

  // =========================================================================
  // 3. BEARD SCULPTING & SHAVING (5 SERVICES)
  // =========================================================================
  {
    id: 11,
    title: "Royal Beard Sculpting & Razor Lineup",
    category: "beard",
    desc: "Sharp cheek and neck lines, gradient fade shaping, hot steam towel, and nourishing sandalwood organic beard oil.",
    img: "/images/service-beard.jpg",
    price: "₹200",
    time: "20-30 mins",
    badge: "ROYAL CRAFT",
  },
  {
    id: 12,
    title: "Italian Hot Towel Straight Razor Shave",
    category: "beard",
    desc: "Traditional straight razor glide with warm lather, double hot towel compress, cold stone soothing, and luxury aftershave balm.",
    img: "/images/service-shave.jpg",
    price: "₹250",
    time: "25-35 mins",
  },
  {
    id: 13,
    title: "Beard Spa & Organic Conditioning",
    category: "beard",
    desc: "Deep cleansing beard shampoo, steam softening, protein mask, and high-shine organic argan beard butter massage.",
    img: "/images/gallery-beard-sculpt.jpg",
    price: "₹350",
    time: "30 mins",
  },
  {
    id: 14,
    title: "Beard Color & Grey Blending",
    category: "beard",
    desc: "Ammonia-free natural black/dark brown beard dyeing with subtle grey blending for a youthful, sharp aesthetic.",
    img: "/images/service-beard-color.jpg",
    price: "₹300",
    time: "25 mins",
  },
  {
    id: 15,
    title: "Imperial Beard Trim & Ozone Steam Therapy",
    category: "beard",
    desc: "Precision contour shaping with warm ozone steam infusion, high-frequency beard follicle stimulation, and gold beard butter.",
    img: "/images/service-beard-steam.jpg",
    price: "₹400",
    time: "35 mins",
    badge: "DELUXE CARE",
  },

  // =========================================================================
  // 4. SKIN REVIVAL & FACIAL CARE (5 SERVICES)
  // =========================================================================
  {
    id: 16,
    title: "Charcoal Deep Detox Facial",
    category: "skin",
    desc: "Deep pore ultrasonic cleansing, blackhead extraction, charcoal peel-off mask, and cold roller pore tightening.",
    img: "/images/service-facial-detox.jpg",
    price: "₹800",
    time: "45-60 mins",
    badge: "DETOX GLOW",
  },
  {
    id: 17,
    title: "O3+ Bridal Groom Radiance Facial",
    category: "skin",
    desc: "Luxury multi-step gold radiance treatment for grooms — brightening serum infusion, collagen massage, and 24K gold foil finish.",
    img: "/images/service-facial-gold.jpg",
    price: "₹1,499",
    time: "60-75 mins",
    badge: "GROOM SPECIAL",
  },
  {
    id: 18,
    title: "Anti-Tan Fruit Glow Cleanup",
    category: "skin",
    desc: "Instant tan removal, gentle dead skin exfoliation, hydrating papaya/aloe mask, and soothing vitamin-C facial massage.",
    img: "/images/gallery-facial.jpg",
    price: "₹550",
    time: "35-45 mins",
  },
 
  {
    id: 19,
    title: "Diamond Microdermabrasion & Skin Polish",
    category: "skin",
    desc: "Non-invasive crystal skin polishing, dead-layer buffing, pigmentation reduction, and cooling hyaluronic mask.",
    img: "/images/services-hero/hero-card-scrub.jpg",
    price: "₹1,200",
    time: "45-50 mins",
    badge: "GLOW POLISH",
  },

  // =========================================================================
  // 5. HAIR SPA & KERATIN THERAPY (5 SERVICES)
  // =========================================================================
  {
    id: 20,
    title: "Keratin Protein Intensive Hair Spa",
    category: "spa",
    desc: "Restorative keratin protein infusion, hot steam deep penetration, hair shaft repair, and relaxing neck & shoulder massage.",
    img: "/images/service-spa-master.jpg",
    price: "₹950",
    time: "45-60 mins",
    badge: "SPA THERAPY",
  },
  {
    id: 21,
    title: "Anti-Dandruff Scalp Detox Treatment",
    category: "spa",
    desc: "Medical-grade salicylic scalp scrub, anti-fungal botanical wash, ozone steam treatment, and calming cooling tonic.",
    img: "/images/service-scalp-detox.jpg",
    price: "₹850",
    time: "45 mins",
  },
  {
    id: 22,
    title: "Moroccan Argan Oil Nourishing Spa",
    category: "spa",
    desc: "Pure Moroccan argan oil deep conditioning mask for frizzy, dry, or sun-damaged hair with long-lasting silkiness.",
    img: "/images/service-argan-spa.jpg",
    price: "₹1,100",
    time: "50 mins",
  },
  {
    id: 23,
    title: "Hair Botox & Keratin Reconstruction",
    category: "spa",
    desc: "Advanced hair fiber rejuvenation — seals split ends, eliminates frizz, and adds high-gloss shine for 2-3 months.",
    img: "/images/service-hair-botox.jpg",
    price: "₹1,599",
    time: "60-75 mins",
    badge: "LUXURY SPA",
  },
  {
    id: 24,
    title: "Ayurvedic Scalp Champi & Kansa Wand Therapy",
    category: "spa",
    desc: "Traditional warm herbal oil massage with pure brass Kansa wand pressure point stimulation for instant tension release.",
    img: "/images/service-ayurvedic-champi.jpg",
    price: "₹699",
    time: "40 mins",
    badge: "STRESS RELIEF",
  },
];