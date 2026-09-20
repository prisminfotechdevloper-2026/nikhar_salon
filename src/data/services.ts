export interface Service {
  id: number;
  title: string;
  category?: 'hair-patch' | 'hair' | 'beard' | 'skin' | 'spa';
  desc: string;
  img: string;
  price: string;
  time: string;
  badge?: string;
  featured?: boolean;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Non-Surgical Hair Patch System",
    category: "hair-patch",
    desc: "100% natural human hair system with micro-skin breathable base, undetectable hairline, and custom styling by owner Firoz Khan.",
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
    desc: "Complete hair patch servicing, scalp hygienic cleansing, medical-grade re-taping/gluing, deep conditioning & cut re-styling.",
    img: "/images/real-hair-patch-before-after-1.jpg",
    price: "₹499",
    time: "30-45 mins",
    badge: "POPULAR",
    featured: true,
  },
  {
    id: 3,
    title: "Executive Haircut & Styling",
    category: "hair",
    desc: "Trendy precision cuts, skin fades, taper trims, texture crop, and signature pompadour styling.",
    img: "/images/service-haircut.jpg",
    price: "₹350",
    time: "30-45 mins",
  },
  {
    id: 4,
    title: "Royal Beard Sculpting",
    category: "beard",
    desc: "Sharp lines, razor fade shaping, hot steam towel, and nourishing organic beard oil conditioning.",
    img: "/images/service-beard.jpg",
    price: "₹200",
    time: "20-30 mins",
  },
  {
    id: 5,
    title: "Charcoal Detox Facial Care",
    category: "skin",
    desc: "Deep pore cleansing, blackhead extraction, charcoal detox mask, and instant glow revival for men.",
    img: "/images/service-facial.jpg",
    price: "₹800",
    time: "45-60 mins",
  },
  {
    id: 6,
    title: "Keratin Protein Hair Spa",
    category: "spa",
    desc: "Intensive keratin protein repair, anti-dandruff scalp detox, and relaxing hot steam head massage.",
    img: "/images/service-spa.jpg",
    price: "₹950",
    time: "45-60 mins",
  },
  {
    id: 7,
    title: "Hot Towel Shave & Clean Up",
    category: "beard",
    desc: "Traditional hot towel straight razor shave, soothing aftershave balm, and cold compress recovery.",
    img: "/images/service-shave.jpg",
    price: "₹250",
    time: "20-30 mins",
  },
  {
    id: 8,
    title: "Luxury Grooming Products",
    category: "hair",
    desc: "High-grade hair patch adhesives, matte styling clays, beard tonics, and hair care serums.",
    img: "/images/service-products.jpg",
    price: "Varies",
    time: "Instant",
  },
];