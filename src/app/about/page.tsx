import Image from 'next/image';
import Link from 'next/link';
import { Scissors, ShieldCheck, Sparkles, Clock, Heart, Award, ArrowRight } from 'lucide-react';

const TEAM = [
  {
    name: "Vikram Sen",
    role: "Master Stylist & Founder",
    exp: "10+ Years Exp.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Rahul Verma",
    role: "Senior Beard Specialist",
    exp: "7+ Years Exp.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sameer Khan",
    role: "Skin & Facial Expert",
    exp: "6+ Years Exp.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Karan Rathore",
    role: "Hair Spa & Texture Artist",
    exp: "5+ Years Exp.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-7xl mx-auto space-y-24">
      {/* Top Header & Journey */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">OUR STORY</p>
          <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-white leading-tight">
            The Journey of <br /> Nikhar Salon
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Nikhar Salon was founded with a simple vision — to create a luxury space where every man feels confident, relaxed, and well-groomed. Located in the heart of Kota, Rajasthan, we started with a passion for style and a commitment to quality.
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Today, we are proud to be one of the most trusted men's salons in the city, known for our professional team, modern techniques, and client-first approach.
          </p>
          <div className="pt-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 gold-gradient text-black font-semibold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full shadow-lg shadow-gold/20 hover:scale-105 transition"
            >
              Book Appointment <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="relative h-96 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
            alt="Salon Interior"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#121214] border border-zinc-800 rounded-2xl p-10">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">WHY CHOOSE US</p>
          <h2 className="text-3xl font-serif-luxury font-bold text-white">What Makes Nikhar Salon Different?</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Scissors className="text-gold mx-auto mb-3" size={28} />
            <h4 className="font-semibold text-sm text-white">Expert Stylists</h4>
            <p className="text-xs text-zinc-400 mt-1">Skilled & experienced hands</p>
          </div>
          <div>
            <Sparkles className="text-gold mx-auto mb-3" size={28} />
            <h4 className="font-semibold text-sm text-white">Premium Products</h4>
            <p className="text-xs text-zinc-400 mt-1">Top-shelf salon brands</p>
          </div>
          <div>
            <ShieldCheck className="text-gold mx-auto mb-3" size={28} />
            <h4 className="font-semibold text-sm text-white">Hygienic & Safe</h4>
            <p className="text-xs text-zinc-400 mt-1">100% sanitized equipment</p>
          </div>
          <div>
            <Heart className="text-gold mx-auto mb-3" size={28} />
            <h4 className="font-semibold text-sm text-white">Client Satisfaction</h4>
            <p className="text-xs text-zinc-400 mt-1">Your happiness is our reward</p>
          </div>
        </div>
      </section>

      {/* Meet Team */}
      <section>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2">OUR TEAM</p>
          <h2 className="text-3xl font-serif-luxury font-bold text-white">Meet Our Professional Stylists</h2>
          <p className="text-zinc-400 text-sm mt-2">Dedicated professionals trained in the latest haircut and grooming trends.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <div key={i} className="bg-[#121214] border border-zinc-800 rounded-2xl overflow-hidden group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif-luxury font-bold text-base text-white">{member.name}</h3>
                <p className="text-xs text-gold mt-1 font-medium">{member.role}</p>
                <span className="text-[11px] text-zinc-500 block mt-1">{member.exp}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Counter Numbers */}
      <section className="border-t border-zinc-800 pt-12">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-serif-luxury font-bold text-gold">5+</p>
            <p className="text-xs uppercase text-zinc-400 tracking-wider mt-1">Expert Stylists</p>
          </div>
          <div>
            <p className="text-4xl font-serif-luxury font-bold text-gold">1000+</p>
            <p className="text-xs uppercase text-zinc-400 tracking-wider mt-1">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-serif-luxury font-bold text-gold">5★</p>
            <p className="text-xs uppercase text-zinc-400 tracking-wider mt-1">Customer Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
}