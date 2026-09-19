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
    desc: "Trendy cuts, fade trims, texture crop, and signature styling for modern gentlemen.",
    img: "/images/service-haircut.jpg",
    price: "₹350",
    time: "30-60 mins",
  },
  {
    id: 2,
    title: "Beard Grooming",
    desc: "Sharp lines, razor fade shape, hot towel steam, and organic beard oil conditioning.",
    img: "/images/service-beard.jpg",
    price: "₹200",
    time: "20-40 mins",
  },
  {
    id: 3,
    title: "Facial Care",
    desc: "Deep cleansing, blackhead extraction, charcoal detox, and skin glow revival.",
    img: "/images/service-facial.jpg",
    price: "₹800",
    time: "45-75 mins",
  },
  {
    id: 4,
    title: "Hair Treatment",
    desc: "Keratin protein repair, anti-dandruff detox, and intensive scalp wellness spa.",
    img: "/images/service-spa.jpg",
    price: "₹950",
    time: "30-60 mins",
  },
  {
    id: 5,
    title: "Shave & Clean Up",
    desc: "Traditional hot towel straight razor shave, soothing aftershave balm, and cold compress.",
    img: "/images/service-shave.jpg",
    price: "₹250",
    time: "20-40 mins",
  },
  {
    id: 6,
    title: "Premium Products",
    desc: "Top luxury styling clay, matte wax, beard tonics, and organic hair growth serums.",
    img: "/images/service-products.jpg",
    price: "Varies",
    time: "N/A",
  },
];