export interface Service {
  id: number;
  title: string;
  desc: string;
  img: string;
  price: string;
  time: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Haircut & Styling",
    desc: "Trendy cuts, fade trims, and textured styling for modern men.",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    price: "₹350",
    time: "30-60 mins",
  },
  {
    id: 2,
    title: "Beard Grooming",
    desc: "Sharp lines, perfect shape, and organic beard oil conditioning.",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    price: "₹200",
    time: "20-40 mins",
  },
  {
    id: 3,
    title: "Facial Care",
    desc: "Deep cleansing, blackhead extraction and skin glow revival.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    price: "₹800",
    time: "45-75 mins",
  },
  {
    id: 4,
    title: "Hair Treatment",
    desc: "Keratin repair, anti-dandruff detox and intensive hair spa.",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    price: "₹950",
    time: "30-60 mins",
  },
  {
    id: 5,
    title: "Shave & Clean Up",
    desc: "Traditional hot towel razor shave and soothing balm application.",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
    price: "₹250",
    time: "20-40 mins",
  },
  {
    id: 6,
    title: "Premium Products",
    desc: "Top luxury brands, clay waxes, serums & organic beard oils.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    price: "Varies",
    time: "N/A",
  },
];