export interface CaseStudy {
  id: string;
  title: string;
  category: 'hair-patch' | 'makeover' | 'beard' | 'skin' | 'spa';
  categoryLabel: string;
  client: {
    name: string;
    age: number;
    occupation: string;
    location: string;
  };
  concern: string;
  solution: string;
  technique: string;
  stylist: string;
  duration: string;
  longevity: string;
  beforeImg: string;
  afterImg: string;
  singleImg?: string;
  rating: number;
  testimonial: string;
  keyBenefits: string[];
  featured?: boolean;
  focusY?: string;
}

export interface VideoStory {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  thumbnail: string;
  stylist: string;
  highlights: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-crown-restoration',
    title: 'Advanced Crown Baldness to Full Density Volume',
    category: 'hair-patch',
    categoryLabel: 'Hair Patch System',
    client: {
      name: 'Rohit Sharma',
      age: 34,
      occupation: 'Corporate Manager',
      location: 'Talwandi, Kota',
    },
    concern: 'Severe Grade-IV crown thinning with visible scalp reflection, causing hesitation in client presentations and wedding functions.',
    solution: 'Bespoke breathable Swiss micro-lace hair system custom-color matched to his natural dark brown undertones and seamlessly blended with scissor graduation.',
    technique: 'Hypoallergenic Medical Base Bonding + Razor Perimeter Graduation',
    stylist: 'Firoz Khan (Founder & Hair System Specialist)',
    duration: '55 Mins',
    longevity: '3-4 Weeks between routine services',
    beforeImg: '/images/client1-head-before.jpg',
    afterImg: '/images/client1-head-after.jpg',
    rating: 5,
    testimonial: 'Walking out of Nikhar Salon, I felt like my 25-year-old self again. The hairline is completely undetectable, even when I workout in the gym or ride my bike. Firoz bhai is a true artist.',
    keyBenefits: ['100% Breathable Base', 'Shower & Sweat Proof', 'Undetectable Frontal Hairline'],
    featured: true,
    focusY: 'center top',
  },
  {
    id: 'case-receding-hairline',
    title: 'Receding Frontal Temples to Textured Modern Fade',
    category: 'hair-patch',
    categoryLabel: 'Hair Patch System',
    client: {
      name: 'Aman Mathur',
      age: 27,
      occupation: 'Software Engineer',
      location: 'Kunhari, Kota',
    },
    concern: 'Deep frontal hairline recession making him appear much older than his actual age; unable to style trending textured crops or pompadours.',
    solution: 'Ultra-thin 0.03mm Polyurethane micro-skin membrane with individual single-knot ventilation and Italian razor skin fade on sides.',
    technique: 'Single-Knot Strand Placement + Skin Fade Blend',
    stylist: 'Firoz Khan',
    duration: '50 Mins',
    longevity: 'Monthly checkup & cleaning',
    beforeImg: '/images/client2-head-before.jpg',
    afterImg: '/images/client2-head-after.jpg',
    rating: 5,
    testimonial: 'None of my colleagues at work could tell I had a hair system installed. They simply asked me which gym or diet I started that made me look so fresh and sharp!',
    keyBenefits: ['Natural Scalp Appearance', 'Featherlight Weight', 'Modern Textured Styling'],
    featured: true,
    focusY: 'center top',
  },
  {
    id: 'case-executive-gentleman',
    title: 'Executive Gentleman Pompadour & Side Taper',
    category: 'hair-patch',
    categoryLabel: 'Hair Patch System',
    client: {
      name: 'Dr. Vivek Singhal',
      age: 38,
      occupation: 'Medical Practitioner',
      location: 'Vigyan Nagar, Kota',
    },
    concern: 'Significant diffuse thinning across the entire top mid-scalp and frontal region with loss of volume.',
    solution: 'Full-density monofilament system with reinforced perimeter, styled into a distinguished side-part pompadour with soft natural temples.',
    technique: 'Multi-Directional French Base + Custom Scissor Layering',
    stylist: 'Firoz Khan',
    duration: '60 Mins',
    longevity: 'Long-life durable foundation',
    beforeImg: '/images/client3-head-before.jpg',
    afterImg: '/images/client3-head-after.jpg',
    rating: 5,
    testimonial: 'As a practicing doctor, natural appearance was non-negotiable. Nikhar Salon provided complete privacy, dignity, and a world-class hair system.',
    keyBenefits: ['Medical-Grade Attachment', 'Natural Greying Integration', 'Zero Maintenance Stress'],
    focusY: 'center top',
  },
  {
    id: 'case-youthful-taper',
    title: 'Total Crown Coverage with High-Volume Spiky Fade',
    category: 'hair-patch',
    categoryLabel: 'Hair Patch System',
    client: {
      name: 'Karan Meena',
      age: 24,
      occupation: 'Competitive Exam Aspirant',
      location: 'Mahaveer Nagar, Kota',
    },
    concern: 'Early androgenetic alopecia in student years affecting mental confidence and public speaking.',
    solution: 'Feather-density invisible hairline system with youthful textured spikes and temple taper fade.',
    technique: 'Feathered Hairline Graduation + Matte Texture Finish',
    stylist: 'Firoz Khan',
    duration: '45 Mins',
    longevity: 'Student-friendly routine care',
    beforeImg: '/images/client4-head-before.jpg',
    afterImg: '/images/client4-head-after.jpg',
    rating: 5,
    testimonial: 'Kota coaching pressure had taken a toll on my hair. Firoz sir understood my situation, guided me with honest advice, and completely transformed my look in 45 minutes.',
    keyBenefits: ['Budget-Friendly Maintenance', 'Dynamic Daily Styling', 'Instant Confidence Rebound'],
    focusY: 'center top',
  },
  
 
  {
    id: 'case-hair-botox',
    title: 'Frizzy Heat-Damaged Hair to High-Gloss Keratin Botox',
    category: 'spa',
    categoryLabel: 'Hair Spa & Botox',
    client: {
      name: 'Nikhil Kashyap',
      age: 31,
      occupation: 'Fitness Trainer',
      location: 'Dadabari, Kota',
    },
    concern: 'Extremely dry, coarse hair damaged by chlorinated pool water and daily hard water hair washes.',
    solution: 'Intensive Brazilian keratin fiber reconstruction with hot ozone steam seal and argan lipid therapy.',
    technique: 'Ozone Steam Nano-Infusion + Keratin Thermo-Sealing',
    stylist: 'Firoz Khan',
    duration: '75 Mins',
    longevity: 'Up to 10 Weeks smooth silkiness',
    beforeImg: '/images/gallery-spa.jpg',
    afterImg: '/images/service-hair-botox.jpg',
    rating: 5,
    testimonial: 'My coarse, unmanageable hair now has incredible natural shine and silkiness. Even after workouts and daily showers, the frizz is totally gone.',
    keyBenefits: ['Long-Lasting Frizz Control', 'Deep Strand Repair', 'High-Gloss Mirror Finish'],
  },
];

export const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'cxnnPeX4eVM',
    title: 'Live Client Hair Patch Attachment & Scissor Blend',
    category: 'Hair Patch System',
    duration: '0:58',
    views: '1.9K Views',
    thumbnail: '/images/client1-head-after.jpg',
    stylist: 'Firoz Khan',
    highlights: ['Micro-Skin Placement', 'Natural Front Graduation', 'Shower-Proof Test'],
  },
  {
    id: '7KUB0CyceTw',
    title: 'Severe Crown Baldness to Dense Natural Hair System',
    category: 'Crown Restoration',
    duration: '0:55',
    views: '1.9K Views',
    thumbnail: '/images/client2-head-after.jpg',
    stylist: 'Firoz Khan',
    highlights: ['Swiss Invisible Lace', 'Natural Crown Swirl Match', '60-Min Transformation'],
  },
  {
    id: 'hKPB96VbZdo',
    title: 'Complete Executive Makeover: Scissor Cut & Beard Shape',
    category: 'Executive Makeover',
    duration: '0:45',
    views: '2.0K Views',
    thumbnail: '/images/client3-head-after.jpg',
    stylist: 'Firoz Khan & Arman',
    highlights: ['Italian Razor Taper', 'Sculpted Beard Line', 'Instant Confidence Shift'],
  },
  {
    id: 'QDtxfqVnNhI',
    title: 'Trending Curly Perm & High-Volume Taper Fade',
    category: 'Styling & Perm',
    duration: '0:50',
    views: '2.2K Views',
    thumbnail: '/images/gallery-textured-crop.jpg',
    stylist: 'Firoz Khan',
    highlights: ['Safe Botanical Formula', 'Bounce & Volume', 'Effortless Styling'],
  },
];

export const TRANSFORMATION_METRICS = [
  { value: '1,200+', label: 'Hair Systems Fitted', detail: 'In Kota & Hadoti Region' },
  { value: '99.4%', label: 'Undetectable Finish', detail: 'Natural Micro-Scalp Base' },
  { value: '45-60', label: 'Minutes Procedure', detail: 'Instant Non-Surgical Result' },
  { value: '4.9 ★', label: 'Client Rating', detail: 'Over 850+ Verified Reviews' },
];
