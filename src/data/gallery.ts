export interface GalleryImage {
  id: number;
  category: string;
  imgUrl: string;
  altText: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    category: "Haircuts & Styling",
    imgUrl: "/images/gallery-textured-crop.jpg",
    altText: "Textured Crop & Low Fade",
  },
  {
    id: 2,
    category: "Beard Grooming",
    imgUrl: "/images/gallery-beard-sculpt.jpg",
    altText: "Royal Beard Sculpting",
  },
  {
    id: 3,
    category: "Facials",
    imgUrl: "/images/gallery-facial.jpg",
    altText: "Charcoal Detox Facial Treatment",
  },
  {
    id: 4,
    category: "Hair Treatments",
    imgUrl: "/images/gallery-spa.jpg",
    altText: "Keratin Spa & Protein Therapy",
  },
  {
    id: 5,
    category: "Shave & Clean Up",
    imgUrl: "/images/gallery-shave.jpg",
    altText: "Traditional Italian Hot Towel Shave",
  },
  {
    id: 6,
    category: "Salon Ambience",
    imgUrl: "/images/gallery-ambience.jpg",
    altText: "Nikhar Salon Luxury Studio Ambience",
  },
];