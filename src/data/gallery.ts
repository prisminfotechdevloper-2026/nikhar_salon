export interface GalleryImage {
  id: number;
  category: string;
  imgUrl: string;
  altText: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    category: "Hair Patch Transformations",
    imgUrl: "/images/real-hair-patch-before-after-1.jpg",
    altText: "Crown Baldness to Full Dense Volume Transformation (Real Client)",
  },
  {
    id: 2,
    category: "Hair Patch Transformations",
    imgUrl: "/images/real-hair-patch-before-after-2.jpg",
    altText: "Receding Hairline to Sleek Textured Pompadour Fade (Real Client)",
  },
  {
    id: 3,
    category: "Hair Patch Transformations",
    imgUrl: "/images/real-hair-patch-installation.jpg",
    altText: "Micro-Skin Hair System Fitting & Scalp Bonding Procedure",
  },
  {
    id: 4,
    category: "Hair Patch Transformations",
    imgUrl: "/images/hair-patch-transform-1.jpg",
    altText: "Executive Pompadour & Fade Hair Patch Result",
  },
  {
    id: 5,
    category: "Hair Patch Transformations",
    imgUrl: "/images/hair-patch-transform-2.jpg",
    altText: "Textured Volume & Beard Blend Non-Surgical System",
  },
  {
    id: 6,
    category: "Haircuts & Styling",
    imgUrl: "/images/gallery-textured-crop.jpg",
    altText: "Textured Crop & Low Fade",
  },
  {
    id: 7,
    category: "Beard Grooming",
    imgUrl: "/images/gallery-beard-sculpt.jpg",
    altText: "Royal Beard Sculpting",
  },
  {
    id: 8,
    category: "Facials",
    imgUrl: "/images/gallery-facial.jpg",
    altText: "Charcoal Detox Facial Treatment",
  },
  {
    id: 9,
    category: "Hair Treatments",
    imgUrl: "/images/gallery-spa.jpg",
    altText: "Keratin Spa & Protein Therapy",
  },
  {
    id: 10,
    category: "Shave & Clean Up",
    imgUrl: "/images/gallery-shave.jpg",
    altText: "Traditional Italian Hot Towel Shave",
  },
  {
    id: 11,
    category: "Salon Ambience",
    imgUrl: "/images/gallery-ambience.jpg",
    altText: "Nikhar Salon Luxury Studio Ambience",
  },
];