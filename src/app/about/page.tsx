import Image from 'next/image';
import Link from 'next/link';
import { Scissors, ShieldCheck, Sparkles, Clock, Heart, Award, ArrowRight, Check } from 'lucide-react';
import Logo from '@/components/Logo';

const TEAM = [
  {
    name: "Vikram Sen",
    role: "Master Barber & Founder",
    exp: "10+ Years Experience",
    speciality: "Precision Fade Architecture & Royal Shave",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Rahul Verma",
    role: "Senior Beard Specialist",
    exp: "7+ Years Experience",
    speciality: "Bespoke Beard Sculpting & Organic Conditioning",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sameer Khan",
    role: "Skin & Facial Expert",
    exp: "6+ Years Experience",
    speciality: "Charcoal Detox & Anti-Pollution Skin Revival",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Karan Rathore",
    role: "Hair Spa & Keratin Artist",
    exp: "5+ Years Experience",
    speciality: "Keratin Protein Repair & Scalp Wellness",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-20 sm:space-y-28 font-sans">
      {/* 1. Header & Story Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
              OUR HERITAGE & VISION
            </span>
          </div>

          <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] font-normal">
            A Legacy of Refinement <br />
            <span className="italic text-[#BA9D6A]">in Kota, Rajasthan.</span>
          </h1>

          <p className="text-[#A6A29A] text-xs sm:text-sm md:text-base leading-relaxed">
            Nikhar Salon was founded with a clear, elevated vision: to provide discerning gentlemen in Kota a sanctuary where precision grooming meets warm, world-class hospitality.
          </p>

          <p className="text-[#A6A29A] text-xs sm:text-sm leading-relaxed">
            Every barber in our studio is trained in traditional scissors-over-comb techniques, Italian razor glide, and modern facial aesthetics. We don&apos;t just cut hair — we sculpt personal confidence.
          </p>

          <div className="pt-3 flex flex-wrap gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full shadow-lg shadow-[#BA9D6A]/20 hover:scale-105 transition"
            >
              Reserve Your Slot <ArrowRight size={15} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition"
            >
              Explore Services Menu
            </Link>
          </div>
        </div>

        {/* Story Visual Frame */}
        <div className="lg:col-span-6">
          <div className="relative h-80 sm:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden border border-[#BA9D6A]/30 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
              alt="Nikhar Salon Kota Interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs">
              <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-medium">
                Kota Salon Studio • Rajasthan
              </span>
              <span className="text-[#BA9D6A] font-semibold">Est. 2014</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Pillars of Nikhar Salon */}
      <section className="bg-[#141619] border border-white/[0.08] rounded-2xl md:rounded-3xl p-8 sm:p-12">
        <div className="text-center mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
              THE EXCELLENCE STANDARDS
            </span>
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-white">Why Kota Trusts Nikhar Salon</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-[#181A1C] border border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/40 transition">
            <div className="h-10 w-10 rounded-xl bg-[#BA9D6A]/10 text-[#BA9D6A] flex items-center justify-center">
              <Scissors size={20} />
            </div>
            <h4 className="font-serif-title text-xl text-white">Master Artisans</h4>
            <p className="text-xs text-[#A6A29A] leading-relaxed">
              Stylists trained with 5 to 10+ years of dedicated men&apos;s grooming experience.
            </p>
          </div>

          <div className="bg-[#181A1C] border border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/40 transition">
            <div className="h-10 w-10 rounded-xl bg-[#BA9D6A]/10 text-[#BA9D6A] flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <h4 className="font-serif-title text-xl text-white">Premium Products</h4>
            <p className="text-xs text-[#A6A29A] leading-relaxed">
              We exclusively use dermatologically approved organic serums, balms, and toners.
            </p>
          </div>

          <div className="bg-[#181A1C] border border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/40 transition">
            <div className="h-10 w-10 rounded-xl bg-[#BA9D6A]/10 text-[#BA9D6A] flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-serif-title text-xl text-white">100% Sanitized</h4>
            <p className="text-xs text-[#A6A29A] leading-relaxed">
              Hospital-grade autoclave sterilization for every blade, scissor, and styling tool.
            </p>
          </div>

          <div className="bg-[#181A1C] border border-white/[0.06] p-6 rounded-2xl space-y-3 hover:border-[#BA9D6A]/40 transition">
            <div className="h-10 w-10 rounded-xl bg-[#BA9D6A]/10 text-[#BA9D6A] flex items-center justify-center">
              <Heart size={20} />
            </div>
            <h4 className="font-serif-title text-xl text-white">VIP Hospitality</h4>
            <p className="text-xs text-[#A6A29A] leading-relaxed">
              Complimentary refreshments, personalized consultation, and zero-rush care.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Meet the Master Barbers & Stylists */}
      <section>
        <div className="text-center mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-2">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
              THE ARTISANS
            </span>
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-white">
            Meet Our Master Stylists
          </h2>
          <p className="text-[#A6A29A] text-xs sm:text-sm max-w-lg mx-auto">
            Experienced professionals dedicated to refining your personal aesthetic with passion and technique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <div 
              key={i} 
              className="bg-[#141619] border border-white/[0.08] hover:border-[#BA9D6A]/60 rounded-2xl md:rounded-3xl overflow-hidden group transition-all duration-300 shadow-sm"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#181A1C]">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141619] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9.5px] font-semibold text-[#BA9D6A] border border-white/10 uppercase tracking-wider">
                  {member.exp}
                </span>
              </div>
              <div className="p-5 text-center space-y-1.5">
                <h3 className="font-serif-title text-xl text-white">{member.name}</h3>
                <p className="text-xs text-[#BA9D6A] font-medium">{member.role}</p>
                <p className="text-[11px] text-[#A6A29A] pt-1 leading-snug">{member.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Reservation Card */}
      <section className="border border-[#BA9D6A]/30 bg-gradient-to-r from-[#141619] via-[#181A1C] to-[#141619] rounded-2xl md:rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
        <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold block">
          EXPERIENCE THE DIFFERENCE
        </span>
        <h3 className="font-serif-title text-3xl sm:text-4xl text-white">
          Book Your Appointment at Nikhar Salon Kota
        </h3>
        <p className="text-xs sm:text-sm text-[#A6A29A] max-w-lg mx-auto">
          Shop No. 12, 1st Floor, City Mall, Kota, Rajasthan. Open all 7 days from 9:00 AM to 10:00 PM.
        </p>
        <div className="pt-3">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full shadow-lg shadow-[#BA9D6A]/20 hover:scale-105 transition"
          >
            Reserve Your Experience <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}