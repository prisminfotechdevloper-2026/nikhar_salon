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
    text: "Firoz Khan ji ne mera hair patch fixing itne natural tarike se kiya ki koi pehchan hi nahi pata! Invisible hairline aur confident look ne mera confidence double kar diya. Kota me best hair patch centre!",
    avatar: "/images/avatar-rohit.jpg"
  },
  {
    id: 2,
    name: "Aman Verma",
    location: "Talwandi, Kota",
    rating: 5,
    service: "Hair Patch Servicing & Fade",
    text: "Monthly hair patch service aur skin fade karwata hu yaha se. Cleanliness, premium tape/glue bonding, aur styling 10/10 hai. Truly luxury experience.",
    avatar: "/images/avatar-aman.jpg"
  },
  {
    id: 3,
    name: "Vikram Rathore",
    location: "Gumanpura, Kota",
    rating: 5,
    service: "Royal Beard Sculpting",
    text: "Best beard styling artist in Kota. Pehli baar meri beard ko exact sharp lines aur healthy shine mila. Highly recommended to everyone.",
    avatar: "/images/avatar-vikram.jpg"
  },
  {
    id: 4,
    name: "Priyansh Meena",
    location: "Kunhari, Kota",
    rating: 5,
    service: "Charcoal Detox Facial",
    text: "Deep clean facial ke baad meri skin fresh aur hydrated feel kar rahi hai. Premium imported products use karte hain.",
    avatar: "/images/avatar-priyansh.jpg"
  },
  {
    id: 5,
    name: "Harshvardhan Singh",
    location: "Vigyan Nagar, Kota",
    rating: 5,
    service: "Hair Patch & VIP Combo",
    text: "Mera pre-wedding look Nikhar Salon se ready hua. Hair patch transformation itna natural tha ki shaadi me sab tareef kar rahe the. Zero waiting and royal hospitality.",
    avatar: "/images/avatar-rohit.jpg"
  },
  {
    id: 6,
    name: "Aditya Jain",
    location: "Dadabari, Kota",
    rating: 5,
    service: "Executive Haircut & Shave",
    text: "Cleanliness and professional technique is unmatchable. Italian hot towel shave was so relaxing. Kota me best salon experience!",
    avatar: "/images/avatar-aman.jpg"
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
