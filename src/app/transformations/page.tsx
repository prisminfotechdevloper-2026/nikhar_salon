import { Metadata } from 'next';
import TransformationsHero from '@/components/transformations/TransformationsHero';
import TransformationsGrid from '@/components/transformations/TransformationsGrid';
import VideoStoriesSection from '@/components/transformations/VideoStoriesSection';
import TransformationCta from '@/components/transformations/TransformationCta';

export const metadata: Metadata = {
  title: 'Client Case Studies & Real Transformations | Nikhar Salon Kota',
  description:
    'Explore verified before-and-after client transformations at Nikhar Salon Kota. Real non-surgical hair patch installations, precision razor beard sculpting, and restorative skincare by Firoz Khan.',
  keywords: [
    'hair patch before after kota',
    'nikhar salon transformations',
    'hair restoration results kota',
    'non surgical hair patch case study rajasthan',
    'beard styling makeover kota',
    'firoz khan nikhar salon vigyan nagar',
  ],
  openGraph: {
    title: 'Real Client Transformations & Case Studies | Nikhar Salon Kota',
    description:
      'Honest Before & After grooming case studies. See live transformations for crown hair thinning, beard sculpting, and facial glow.',
    url: 'https://nikharsaloon.vercel.app/transformations',
    siteName: 'Nikhar Salon Kota',
    images: [
      {
        url: 'https://nikharsaloon.vercel.app/images/real-hair-patch-before-after-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Nikhar Salon Real Client Transformations',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TransformationsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0E1012] text-[#181A1C] dark:text-[#FAF8F5] transition-colors duration-300">
      <main id="main-content" tabIndex={-1}>
        {/* 1. Luxury Editorial Header with Live Metric Badges */}
        <TransformationsHero />

        {/* 2. Interactive Case Studies Directory with Category Filtering */}
        <TransformationsGrid />

        {/* 3. Live Studio Video Reels & Client Shorts */}
        <VideoStoriesSection />

        {/* 4. Direct Transformation Booking & Consultation CTA */}
        <TransformationCta />
      </main>
    </div>
  );
}
