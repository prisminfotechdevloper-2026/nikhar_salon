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
    imgUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    altText: "Textured Crop & Fade",
  },
  {
    id: 2,
    category: "Beard Grooming",
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    altText: "Beard Sculpting",
  },
  {
    id: 3,
    category: "Facials",
    imgUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    altText: "Charcoal Detox Facial",
  },
  {
    id: 4,
    category: "Hair Treatments",
    imgUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    altText: "Spa & Keratin Therapy",
  },
  {
    id: 5,
    category: "Shave & Clean Up",
    imgUrl: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
    altText: "Hot Towel Shave",
  },
  {
    id: 6,
    category: "Salon Ambience",
    imgUrl: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
    altText: "Nikhar Salon Interior",
  },
];