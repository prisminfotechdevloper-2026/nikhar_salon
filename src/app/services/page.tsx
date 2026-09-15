import { servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 border-b border-zinc-900 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">EXPLORE ALL OFFERINGS</p>
        <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-white">Our Complete Services</h1>
        <p className="text-zinc-400 text-sm mt-3 max-w-lg mx-auto">
          Explore precision haircuts, beard grooming, signature facials, hair treatments, and hot towel shaves at Kota's premier salon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
      
       <div className="text-center mt-16 border-t border-zinc-900 pt-10">
           <span className="font-script text-4xl text-gold">Ready for a New Look?</span>
           <div className="mt-5">
              <Link href="/book-appointment" className="gold-gradient text-black font-semibold text-xs tracking-wider uppercase px-7 py-3 rounded-full hover:scale-105 transition">Book Your Transform →</Link>
           </div>
        </div>
    </div>
  );
}