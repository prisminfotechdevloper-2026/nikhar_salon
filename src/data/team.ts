export interface TeamMember {
  name: string;
  role: string;
  exp: string;
  speciality: string;
  img: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Vikram Sen",
    role: "Master Barber & Founder",
    exp: "10+ Years Experience",
    speciality: "Precision Fade Architecture & Royal Shave",
    img: "/images/team-vikram.jpg"
  },
  {
    name: "Rahul Verma",
    role: "Senior Beard Specialist",
    exp: "7+ Years Experience",
    speciality: "Bespoke Beard Sculpting & Organic Conditioning",
    img: "/images/team-rahul.jpg"
  },
  {
    name: "Sameer Khan",
    role: "Skin & Facial Expert",
    exp: "6+ Years Experience",
    speciality: "Charcoal Detox & Anti-Pollution Skin Revival",
    img: "/images/team-sameer.jpg"
  },
  {
    name: "Karan Rathore",
    role: "Hair Spa & Keratin Artist",
    exp: "5+ Years Experience",
    speciality: "Keratin Protein Repair & Scalp Wellness",
    img: "/images/team-karan.jpg"
  }
];
