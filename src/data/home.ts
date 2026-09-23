export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  tag: string;
}

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  service: string;
  text: string;
  avatar: string;
}

export interface VipPass {
  title: string;
  price: string;
  period: string;
  badge: string;
  featured?: boolean;
  features: string[];
}

// Hero Background Slides
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "The Art of Hair Patch & Grooming.",
    subtitle: "KOTA'S #1 NON-SURGICAL HAIR REPLACEMENT & STYLING",
    desc: "Experience 100% natural human hair patch transformations with undetectable hairline, bespoke fade haircuts, and royal beard sculpting by Master Specialist Firoz Khan.",
    image: "/images/hero-slide-1.jpg",
    tag: "PRIMARY SPECIALIZATION"
  },
  {
    id: 2,
    title: "Master Barbers. Pure Distinction.",
    subtitle: "BESPOKE HAIR STYLING & TEXTURE CRAFT",
    desc: "Our master stylists bring over a decade of precision craft to give you a sharp, commanding look customized to your face profile.",
    image: "/images/hero-slide-2.jpg",
    tag: "MASTER ARTISANS"
  },
  {
    id: 3,
    title: "Luxury Skin Therapies & Spa.",
    subtitle: "CHARCOAL DETOX & KERATIN REPAIR",
    desc: "Rejuvenate your skin and hair with top-tier international organic serums, essential oils, and soothing hot steam relaxation.",
    image: "/images/hero-slide-3.jpg",
    tag: "VIP WELLNESS"
  }
];

// Customer Testimonials (6 Curated Reviews for multi-card slider)
export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Rohit Sharma",
    location: "Vigyan Nagar, Kota",
    rating: 5,
    service: "Non-Surgical Hair Patch",
    text: "Master Firoz Khan installed my hair patch so naturally that even my closest friends couldn't detect it. The undetectable hairline gave me back my youthful appearance and complete confidence. Best hair restoration studio in Kota!",
    avatar: "/images/real_customer/customer1.png"
  },
  {
    id: 2,
    name: "Aman Verma",
    location: "Talwandi, Kota",
    rating: 5,
    service: "Hair Patch Servicing & Fade",
    text: "I visit every month for my hair patch refitting and skin fade. The hygiene standards, medical-grade bonding tape, and precision styling are 10/10. Truly a premier luxury salon experience.",
    avatar: "/images/real_customer/customer2.png"
  },
  {
    id: 3,
    name: "Vikram Rathore",
    location: "Gumanpura, Kota",
    rating: 5,
    service: "Royal Beard Sculpting",
    text: "Hands down the finest beard sculpting craft in Kota. Sharp straight-razor lines, soothing hot towel steam compress, and healthy organic beard oil finish. Highly recommended for every gentleman.",
    avatar: "/images/real_customer/customer6.png"
  },
  {
    id: 4,
    name: "Priyansh Meena",
    location: "Kunhari, Kota",
    rating: 5,
    service: "O3+ Radiance Groom Facial",
    text: "The O3+ facial treatment completely refreshed my tired skin, removed stubborn sun tan, and added a clean, hydrated glow. Top-shelf imported products and skilled therapists.",
    avatar: "/images/real_customer/customer7.png"
  },
  {
    id: 5,
    name: "Harshvardhan Singh",
    location: "Mahaveer Nagar, Kota",
    rating: 5,
    service: "Hair Patch & VIP Combo",
    text: "Got my complete pre-wedding styling and grooming package done at Nikhar Salon. The styling was tailored to perfection and everyone complimented my look on the wedding day. Exceptional hospitality.",
    avatar: "/images/real_customer/customer3.png"
  },
  {
    id: 6,
    name: "Aditya Jain",
    location: "Dadabari, Kota",
    rating: 5,
    service: "Keratin Hair Spa & Treatment",
    text: "The texture treatment and keratin hair spa worked wonders on my hair texture. The salon atmosphere is calm, tools are hospital-grade sterilized, and there's never any rush. Kota's top salon!",
    avatar: "/images/real_customer/customer5.png"
  }
];

// VIP Club Passes
export const VIP_PASSES: VipPass[] = [
  {
    title: "Classic Gentleman",
    price: "₹1,499",
    period: "per month",
    badge: "POPULAR",
    features: [
      "2x Signature Precision Haircuts",
      "2x Royal Beard Sculpt & Lineup",
      "1x Hot Towel Shave & Steam",
      "Complimentary Hair Wash & Styling",
      "Priority WhatsApp Slot Booking"
    ]
  },
  {
    title: "Executive Royal Club",
    price: "₹2,999",
    period: "per month",
    badge: "MOST LUXURY",
    featured: true,
    features: [
      "Unlimited Precision Haircuts",
      "Unlimited Beard Sculpt & Trims",
      "1x Deep Charcoal Detox Facial",
      "1x Keratin Protein Hair Spa",
      "VIP Dedicated Master Barber",
      "Zero Waiting Time Guarantee"
    ]
  },
  {
    title: "Groom's Royal Wedding Pass",
    price: "₹4,999",
    period: "package",
    badge: "SPECIAL OCCASION",
    features: [
      "Complete Bridal Groom Transformation",
      "Skin Glow Gold Facial & Peeling",
      "Keratin Treatment & Scalp Massage",
      "Royal Beard Architecture & Shave",
      "Hair Styling & Setting on Event Day",
      "Complimentary Champagne Coffee"
    ]
  }
];
