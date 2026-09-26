import { Suspense } from 'react';
import BookAppointmentHero from '@/components/book-appointment/BookAppointmentHero';
import SimpleBookingForm from '@/components/book-appointment/SimpleBookingForm';
import BookingInfoCard from '@/components/book-appointment/BookingInfoCard';

export const metadata = {
  title: 'Book Salon Slot | Nikhar Mens Parlour Kota',
  description: 'Reserve your grooming slot at Nikhar Mens Parlour Vigyan Nagar Kota. Zero waiting time, master stylist selection, and instant WhatsApp confirmation.',
};

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0A0B0D] text-[#181A1C] dark:text-[#FAF8F5] font-sans transition-colors duration-300">
      {/* Modular Ultra-Luxury Hero Section with Background Image */}
      <BookAppointmentHero />

      {/* Main Reservation Section (Clean, Balanced & Zero Gap) */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Main Booking Form (7 Cols) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="w-full h-96 rounded-2xl bg-white dark:bg-[#121417] border border-[#E5E0D8] dark:border-white/[0.08] p-8 animate-pulse flex items-center justify-center">
                  <div className="h-6 w-36 rounded-full bg-[#BA9D6A]/30" />
                </div>
              }
            >
              <SimpleBookingForm />
            </Suspense>
          </div>

          {/* Salon Info & Perks Card (5 Cols - Matching Height, Zero Gap) */}
          <div className="lg:col-span-5">
            <BookingInfoCard />
          </div>
        </div>
      </main>
    </div>
  );
}