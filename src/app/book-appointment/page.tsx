import Image from 'next/image';
import AppointmentModal from '@/components/AppointmentModal';
import { Star } from 'lucide-react';

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 border-b border-zinc-900 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">SCHEDULE YOUR VISIT</p>
        <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-white">Reserve Your Slot</h1>
        <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
          Secure your premium grooming experience in Kota. Select service, date, and confirm via WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Booking Form */}
        <div className="lg:col-span-2">
            <AppointmentModal />
        </div>

        {/* Info Sidebar with Testimonial */}
        <aside className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between h-fit lg:sticky lg:top-24">
            <div className="space-y-3 text-xs text-zinc-500 border-t border-zinc-800 pt-4">
                <p>Location: kota, Rajasthan</p>
                <p>Timings: 9:00 AM – 10:00 PM (All Days)</p>
            </div>

          <div className="my-10 border-t border-zinc-800 pt-8 space-y-4">
            <div className="flex gap-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
            </div>
            <blockquote className="text-sm text-zinc-300 italic leading-relaxed">
              "Absolutely loved the experience! My barber was skilled, listened to what I wanted, and the beard trim was perfect. Highly recommend Nikhar Salon!"
            </blockquote>
            <p className="text-white text-xs font-medium">— Aman Yadav, Kota Client</p>
          </div>
          
           <div className="text-center">
            <span className="font-script text-3xl text-gold block mt-2">Because You Deserve the Best</span>
          </div>
        </aside>
      </div>
    </div>
  );
}