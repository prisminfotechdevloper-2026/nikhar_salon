export interface Stylist {
  id: string;
  name: string;
  role: string;
  exp: string;
  rating: string;
  reviews: string;
  specialty: string;
  avatar: string;
  badge?: string;
}

export const STYLISTS: Stylist[] = [
  {
    id: 'any',
    name: 'Any Available Master Stylist',
    role: 'Fastest Available Slot',
    exp: 'Expert Team',
    rating: '4.9',
    reviews: '500+ cuts',
    specialty: 'Precision cuts, beard shaping & VIP grooming',
    avatar: '/images/owner/owner-portrait.png',
    badge: 'POPULAR'
  },
  {
    id: 'firoz-khan',
    name: 'Firoz Khan',
    role: 'Owner & Master Hair Patch Director',
    exp: '12+ Yrs Exp',
    rating: '5.0',
    reviews: '1,200+ clients',
    specialty: 'Non-Surgical Hair Systems, Hairline Design & VIP Transformations',
    avatar: '/images/owner/firoz-khan.png',
    badge: 'DIRECTOR'
  },
  {
    id: 'firoz-durrani',
    name: 'Firoz Durrani',
    role: 'Senior Barber & Skin Fade Specialist',
    exp: '7+ Yrs Exp',
    rating: '4.9',
    reviews: '850+ cuts',
    specialty: 'Low/Mid/High Skin Fades, Foil Shaver Finishes & Textures',
    avatar: '/images/worker/firoz-Durrani.png',
  },
  {
    id: 'arman',
    name: 'Arman',
    role: 'Senior Hair Artisan & Beard Sculptor',
    exp: '6+ Yrs Exp',
    rating: '4.9',
    reviews: '700+ clients',
    specialty: 'Royal Beard Sculpting, Italian Razor Shave & Groom Facials',
    avatar: '/images/worker/arman.png',
  },
  {
    id: 'monu',
    name: 'Monu',
    role: 'Hair Styling & Keratin Spa Specialist',
    exp: '5+ Yrs Exp',
    rating: '4.8',
    reviews: '550+ clients',
    specialty: 'Messy Textured Crops, Keratin Protein Spa & Hair Color',
    avatar: '/images/worker/monu.png',
  },
];

export interface AddonService {
  id: string;
  title: string;
  price: number;
  time: string;
  desc: string;
  icon: string;
}

export const ADDONS: AddonService[] = [
  {
    id: 'scalp-tonic',
    title: 'Ayurvedic Scalp Tonic & 10-Min Champi',
    price: 149,
    time: '+10 mins',
    desc: 'Warm botanical oil pressure point massage for instant tension release',
    icon: ''
  },
  {
    id: 'beard-oil-steam',
    title: 'Royal Beard Steam & Organic Argan Butter',
    price: 99,
    time: '+10 mins',
    desc: 'Deep beard softening with hot ozone steam and gold argan balm',
    icon: ''
  },
  {
    id: 'charcoal-cleanup',
    title: 'Express Charcoal Nose & T-Zone Pore Detox',
    price: 199,
    time: '+15 mins',
    desc: 'Blackhead extraction, ultrasonic scrubbing & cold tightening',
    icon: ''
  },
  {
    id: 'patch-consult',
    title: 'Hair Patch Scalp Density & Base Analysis',
    price: 0,
    time: '+15 mins',
    desc: 'Private 1-on-1 consultation with Firoz Khan for hair systems',
    icon: ''
  },
];
