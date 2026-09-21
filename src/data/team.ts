export interface TeamMember {
  id: string;
  name: string;
  role: string;
  exp: string;
  speciality: string;
  img: string;
  bio: string;
  skills: string[];
  availability: string;
}

export const TEAM: TeamMember[] = [
  {
    id: "firoz-khan",
    name: "Firoz Khan",
    role: "Founder & Master Hair Patch Specialist",
    exp: "12+ Years Experience",
    speciality: "Non-Surgical Hair Systems, Monofilament Base & Precision Fades",
    img: "/images/owner/firoz-khan-clean.png",
    bio: "Lead visionary and hair restoration pioneer in Kota. Firoz specializes in 100% natural, undetectable non-surgical hair systems, custom scalp contour matching, and executive fades.",
    skills: ["Hair Patch Installation", "Scalp Contour Analysis", "Monofilament Base", "Italian Razor Blending"],
    availability: "Mon - Sun • By Appointment"
  },
  {
    id: "firoz-durrani",
    name: "Firoz Durrani",
    role: "Senior Barber & Skin Fade Specialist",
    exp: "7+ Years Experience",
    speciality: "Italian Razor Skin Fades, Scissor Tapering & Modern Crop Architecture",
    img: "/images/worker/firoz-Durrani.png",
    bio: "Renowned for ultra-clean razor skin fades, seamless side profile blending, and sharp hairline symmetry. Firoz brings an artistic modern eye to every gentleman's haircut.",
    skills: ["Precision Skin Fade", "Scissor-over-Comb", "Modern Textured Crop", "Beard Lineup"],
    availability: "Mon - Sun • 09:30 AM - 09:00 PM"
  },
  {
    id: "arman",
    name: "Arman",
    role: "Senior Hair Artisan & Beard Sculptor",
    exp: "6+ Years Experience",
    speciality: "Executive Beard Sculpting, Classic Pompadours & Hot Towel Therapy",
    img: "/images/worker/arman.png",
    bio: "Master of facial hair architecture and gentleman styling. Arman crafts razor-sharp beard contours and revitalizing hot towel treatments that leave you impeccably groomed.",
    skills: ["Beard Sculpting", "Italian Hot Towel Shave", "Classic Pompadour", "Scalp Therapy"],
    availability: "Mon - Sun • 09:30 AM - 09:00 PM"
  },
  {
    id: "monu",
    name: "Monu",
    role: "Hair Styling & Texture Specialist",
    exp: "5+ Years Experience",
    speciality: "Keratin Protein Therapy, Hair Botox, Spiky Textures & Color Blending",
    img: "/images/worker/monu.png",
    bio: "Specialist in hair health, keratin smoothing, and dynamic textured finishes. Monu excels at integrating hair patch textures with natural side hair for a completely seamless look.",
    skills: ["Keratin Protein Repair", "Hair Patch Blending", "Volume Texture", "Hair Botox"],
    availability: "Mon - Sun • 09:30 AM - 09:00 PM"
  }
];
