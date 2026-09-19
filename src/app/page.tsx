'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Scissors, Sparkles, ShieldCheck, Clock, ArrowRight, Star, 
  Phone, MapPin, Send, ChevronLeft, ChevronRight, Play, Check, 
  ArrowUpRight, MessageCircle, Calendar, Award, User
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { galleryData } from '@/data/gallery';
import ServiceCard from '@/components/ServiceCard';
import VideoTourModal from '@/components/VideoTourModal';
import AppointmentModal from '@/components/AppointmentModal';
import Logo from '@/components/Logo';

// Hero Background Slides
const HERO_SLIDES = [
  {
    id: 1,
    title: "The Art of Modern Grooming.",
    subtitle: "PRECISION CUTS & ROYAL BEARD SCULPTING IN KOTA",
    desc: "Experience premier male grooming in Rajasthan. From bespoke fade craft to traditional hot towel razor shave and revitalizing skin therapies.",
    image: "/images/hero-slide-1.jpg",
    tag: "SIGNATURE EXPERIENCE"
  },
  {
    id: 2,
    title: "Master Barbers. Pure Distinction.",
    subtitle: "BESPOKE HAIR STYLING & TEXTURE CRAFT",
    desc: "Our master stylists bring over a decade of precision craft to give you a sharp, commanding look customized to your face profile.",
    image: "/images/hero-slide-2.jpg",
    tag: "MASTER STYLISTS"
  },
  {
    id: 3,
    title: "Luxury Skin Therapies & Spa.",
    subtitle: "CHARCOAL DETOX & KERATIN REPAIR",
    desc: "Rejuvenate your skin and hair with top-tier international organic serums, essential oils, and soothing hot steam relaxation.",
    image: "/images/hero-slide-3.jpg",
    tag: "VIP WELLNESS"
  }
];

// Customer Testimonials
const REVIEWS = [
  {
    id: 1,
    name: "Rohit Sharma",
    location: "Kota, Rajasthan",
    rating: 5,
    service: "Fade Haircut & Beard Sculpting",
    text: "Nikhar Salon is hands down the most premium men's salon in Kota! The attention to detail, hygienic equipment, and exact fade cut result was top notch.",
    avatar: "/images/avatar-rohit.jpg"
  },
  {
    id: 2,
    name: "Aman Verma",
    location: "Talwandi, Kota",
    rating: 5,
    service: "Keratin Spa Treatment",
    text: "Mera hair spa ka experience bohot hi luxury raha. Salon ka ambience international level ka hai aur staff bohot courteous hai. Worth every rupee.",
    avatar: "/images/avatar-aman.jpg"
  },
  {
    id: 3,
    name: "Vikram Rathore",
    location: "Gumanpura, Kota",
    rating: 5,
    service: "Royal Beard Sculpting",
    text: "Best beard styling artist in Kota. Pehli baar meri beard ko exact sharp lines aur healthy shine mila. Highly recommended to everyone.",
    avatar: "/images/avatar-vikram.jpg"
  },
  {
    id: 4,
    name: "Priyansh Meena",
    location: "Kunhari, Kota",
    rating: 5,
    service: "Charcoal Detox Facial",
    text: "Deep clean facial ke baad meri skin fresh aur hydrated feel kar rahi hai. Premium imported products use karte hain.",
    avatar: "/images/avatar-priyansh.jpg"
  }
];

// VIP Club Passes
const VIP_PASSES = [
  {
    title: "Classic Gentleman",
    price: "₹1,499",
    period: "per month",
    badge: "POPULAR",
    features: [
      "2x Signature Precision Haircuts",
      "2x Royal Beard Sculpt & Lineup",
      "1x Hot Towel Shave & Steam",
      "Complimentary Hair Wash & Styling",
      "Priority WhatsApp Slot Booking"
    ]
  },
  {
    title: "Executive Royal Club",
    price: "₹2,999",
    period: "per month",
    badge: "MOST LUXURY",
    featured: true,
    features: [
      "Unlimited Precision Haircuts",
      "Unlimited Beard Sculpt & Trims",
      "1x Deep Charcoal Detox Facial",
      "1x Keratin Protein Hair Spa",
      "VIP Dedicated Master Barber",
      "Zero Waiting Time Guarantee"
    ]
  },
  {
    title: "Groom's Royal Wedding Pass",
    price: "₹4,999",
    period: "package",
    badge: "SPECIAL OCCASION",
    features: [
      "Complete Bridal Groom Transformation",
      "Skin Glow Gold Facial & Peeling",
      "Keratin Treatment & Scalp Massage",
      "Royal Beard Architecture & Shave",
      "Hair Styling & Setting on Event Day",
      "Complimentary Champagne Coffee"
    ]
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Quick Booking Widget state
  const [quickService, setQuickService] = useState('Haircut & Styling');
  const [quickDate, setQuickDate] = useState('');
  const [quickStylist, setQuickStylist] = useState('Master Stylist');

  // Hero Carousel Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Filtered services
  const filteredServices = selectedCategory === 'All' 
    ? servicesData 
    : servicesData.filter(s => {
        if (selectedCategory === 'Haircut') return s.title.includes('Haircut');
        if (selectedCategory === 'Beard') return s.title.includes('Beard') || s.title.includes('Shave');
        if (selectedCategory === 'Facial') return s.title.includes('Facial');
        if (selectedCategory === 'Spa') return s.title.includes('Treatment') || s.title.includes('Products');
        return true;
      });

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingModalOpen(true);
  };

  return (
    <div className="overflow-x-hidden antialiased bg-[#0E1012] text-[#FAF8F5] font-sans selection:bg-[#BA9D6A] selection:text-[#0E1012]">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION (Amaia Design Aesthetic) */}
      {/* ========================================================================= */}
      <section className="relative isolate min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-32 lg:pb-10 overflow-hidden select-none border-b border-white/[0.08]">
        {/* Background Image Carousel with Atmospheric Gradient Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Deep Obsidian Overlays */}
          <div className="absolute inset-0 bg-black/55 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E1012]/80 via-transparent to-[#0E1012] z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1012]/80 via-transparent to-[#0E1012]/80 z-10" />
        </div>

        {/* Hero Center Content */}
        <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center my-auto pt-4 sm:pt-6">
          {/* Amaia-style Gold Pill Badge with Vertical Accent Lines */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 animate-in fade-in duration-500">
            <div className="h-3 sm:h-3.5 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10px] sm:text-[11.5px] font-semibold tracking-[0.25em] text-[#BA9D6A] uppercase">
              {HERO_SLIDES[currentSlide].subtitle}
            </span>
            <div className="h-3 sm:h-3.5 w-[2px] bg-[#BA9D6A]" />
          </div>

          {/* Grand Heading in DM Serif Display */}
          <h1 className="font-serif-title text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal tracking-[-0.03em] text-white leading-[1.1] sm:leading-[1.05] max-w-4xl drop-shadow-lg transition-all duration-500">
            {HERO_SLIDES[currentSlide].title}
          </h1>

          {/* Subtext */}
          <p className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base md:text-lg font-normal leading-relaxed text-white/85 drop-shadow px-2 sm:px-0">
            {HERO_SLIDES[currentSlide].desc}
          </p>

          {/* ===================================================================== */}
          {/* AMAIA-STYLE QUICK APPOINTMENT / FILTER WIDGET */}
          {/* ===================================================================== */}
          <div className="w-full max-w-4xl mt-6 sm:mt-8">
            <div className="w-full rounded-2xl md:rounded-3xl bg-[#141619]/95 backdrop-blur-xl p-3.5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[#BA9D6A]/30">
              <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-3 md:gap-4 items-end text-left">
                {/* 1. Service Picker */}
                <div className="relative lg:col-span-4">
                  <label className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#A6A29A] mb-1 sm:mb-1.5 pl-1">
                    Signature Service
                  </label>
                  <div className="relative">
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full rounded-xl border border-white/[0.1] bg-[#181A1C] hover:border-[#BA9D6A]/50 px-3.5 py-2.5 sm:py-3 text-xs md:text-sm font-medium text-white focus:outline-none focus:border-[#BA9D6A] appearance-none cursor-pointer pr-9"
                    >
                      <option value="Haircut & Styling">Executive Haircut & Styling (₹350)</option>
                      <option value="Beard Grooming">Royal Beard Sculpting (₹200)</option>
                      <option value="Facial Care">Charcoal Detox Facial (₹800)</option>
                      <option value="Hair Treatment">Keratin Hair Spa (₹950)</option>
                      <option value="Shave & Clean Up">Hot Towel Razor Shave (₹250)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#BA9D6A]">
                      <Scissors size={14} />
                    </div>
                  </div>
                </div>

                {/* 2. Barber / Stylist */}
                <div className="relative lg:col-span-3">
                  <label className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#A6A29A] mb-1 sm:mb-1.5 pl-1">
                    Master Stylist
                  </label>
                  <div className="relative">
                    <select
                      value={quickStylist}
                      onChange={(e) => setQuickStylist(e.target.value)}
                      className="w-full rounded-xl border border-white/[0.1] bg-[#181A1C] hover:border-[#BA9D6A]/50 px-3.5 py-2.5 sm:py-3 text-xs md:text-sm font-medium text-white focus:outline-none focus:border-[#BA9D6A] appearance-none cursor-pointer pr-9"
                    >
                      <option value="Any Master Stylist">Any Master Stylist</option>
                      <option value="Vikram Sen">Vikram Sen (Founder)</option>
                      <option value="Rahul Verma">Rahul Verma (Beard)</option>
                      <option value="Sameer Khan">Sameer Khan (Skin)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#BA9D6A]">
                      <User size={14} />
                    </div>
                  </div>
                </div>

                {/* 3. Preferred Date */}
                <div className="relative lg:col-span-2">
                  <label className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#A6A29A] mb-1 sm:mb-1.5 pl-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={quickDate}
                    onChange={(e) => setQuickDate(e.target.value)}
                    className="w-full rounded-xl border border-white/[0.1] bg-[#181A1C] hover:border-[#BA9D6A]/50 px-3 py-2.5 sm:py-3 text-xs md:text-sm font-medium text-white focus:outline-none focus:border-[#BA9D6A] cursor-pointer"
                  />
                </div>

                {/* 4. Action Button */}
                <div className="lg:col-span-3 sm:col-span-2">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C2A774] via-[#BA9D6A] to-[#B3935B] hover:brightness-110 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.1em] text-[#141619] uppercase transition-all duration-200 shadow-md shadow-[#BA9D6A]/25 cursor-pointer active:scale-98"
                  >
                    <span>Reserve Slot</span>
                    <ArrowRight className="h-4 w-4 text-[#141619] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Quick Buttons: Watch Video & Direct WhatsApp */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 hover:bg-white/[0.08] hover:border-[#BA9D6A] px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all backdrop-blur-md cursor-pointer"
            >
              <div className="h-6 w-6 rounded-full bg-[#BA9D6A] text-[#0E1012] flex items-center justify-center">
                <Play size={11} fill="currentColor" />
              </div>
              <span>Watch Salon Experience</span>
            </button>

            <a
              href="https://wa.me/918239239249?text=Hello%20Nikhar%20Salon!%20I%20would%20like%20to%20inquire%20about%20a%20grooming%20appointment."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 transition-all backdrop-blur-md"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>

        {/* Hero Bottom Bar: Scroll Indicator & Carousel Controls (Amaia Reference) */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 mt-4 sm:mt-6">
          <div className="flex items-center justify-between text-xs tracking-widest text-white/70">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-3.5 sm:h-4 w-[1px] bg-[#BA9D6A]" />
              <span className="text-[9.5px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80 whitespace-nowrap">
                SCROLL TO DISCOVER
              </span>
            </div>

            <div className="hidden md:block text-[11px] uppercase tracking-[0.25em] text-[#BA9D6A] font-medium">
              LUXURY GROOMING • KOTA, RAJASTHAN
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4">
              <span className="font-sans text-[11px] sm:text-xs tracking-wider text-white/90 tabular-nums">
                0{currentSlide + 1} <span className="text-[#BA9D6A] mx-0.5 sm:mx-1">—</span> 0{HERO_SLIDES.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                  className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/35 bg-black/40 backdrop-blur-md text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] active:scale-90 transition-all cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/35 bg-black/40 backdrop-blur-md text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] active:scale-90 transition-all cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. SALON HERITAGE & TRUST METRICS (Amaia Editorial Row) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#0B0D0F] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
          <div className="space-y-1">
            <p className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#BA9D6A]">10+ Yrs</p>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A6A29A] font-semibold">
              Heritage in Kota
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#BA9D6A]">15,000+</p>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A6A29A] font-semibold">
              Precision Haircuts
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#BA9D6A]">5.0 ★</p>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A6A29A] font-semibold">
              Client Satisfaction
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-[#BA9D6A]">100%</p>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A6A29A] font-semibold">
              Sanitized & Safe
            </p>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. SIGNATURE SERVICES (Curated Collection with Amaia Design) */}
      {/* ========================================================================= */}
      <section id="services" className="py-16 sm:py-24 bg-[#0E1012] relative overflow-hidden border-b border-white/[0.08]">
        {/* Subtle Ambient Gold Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#BA9D6A]/[0.06] blur-[160px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2">
                <div className="h-3 w-[2px] bg-[#BA9D6A]" />
                <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#BA9D6A] uppercase">
                  CURATED SERVICES
                </span>
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                Signature Grooming & Therapies
              </h2>
              <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed">
                Handcrafted cuts, razor sculpts, skin glow facials, and hair restoration therapies tailored exclusively for modern gentlemen.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Haircut', 'Beard', 'Facial', 'Spa'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#BA9D6A] text-[#0E1012] shadow-sm'
                      : 'border border-white/10 bg-white/[0.04] text-white/75 hover:border-[#BA9D6A]/50 hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'All Offerings' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service, index) => {
              const tags = ['SIGNATURE', 'ROYAL CRAFT', 'EXECUTIVE', 'SPA THERAPY', 'CLASSIC', 'PREMIUM'];
              return (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  tag={tags[index % tags.length]} 
                />
              );
            })}
          </div>

          {/* View All Services Footer */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#BA9D6A]/50 bg-white/[0.04] hover:bg-[#BA9D6A]/15 hover:border-[#BA9D6A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#C2A774] transition-all"
            >
              <span>Explore Complete Grooming Menu</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. THE CRAFT & VIDEO SHOWCASE SECTION (Amaia Cinematic Video Block) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#141619] border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <div className="h-3 w-[2px] bg-[#BA9D6A]" />
                <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#BA9D6A] uppercase">
                  THE CRAFTSMANSHIP
                </span>
              </div>

              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                More Than a Haircut. <br />
                <span className="italic text-[#BA9D6A]">A Ritual of Confidence.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed">
                Step inside Nikhar Salon Kota, where bespoke barbering meets tranquil hospitality. Every session begins with a consultation on your facial structure, lifestyle, and hair texture to craft a signature silhouette.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <div className="h-5 w-5 rounded-full bg-[#BA9D6A]/20 border border-[#BA9D6A]/40 flex items-center justify-center text-[#BA9D6A]">
                    <Check size={12} />
                  </div>
                  <span>Traditional Italian hot towel & straight razor shaving</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <div className="h-5 w-5 rounded-full bg-[#BA9D6A]/20 border border-[#BA9D6A]/40 flex items-center justify-center text-[#BA9D6A]">
                    <Check size={12} />
                  </div>
                  <span>Organic botanical hair detox & scalp massage</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <div className="h-5 w-5 rounded-full bg-[#BA9D6A]/20 border border-[#BA9D6A]/40 flex items-center justify-center text-[#BA9D6A]">
                    <Check size={12} />
                  </div>
                  <span>Custom fade architecture & beard line detailing</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-2.5 gold-gradient text-[#0E1012] font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full shadow-lg shadow-[#BA9D6A]/20 hover:scale-105 transition cursor-pointer"
                >
                  <Play size={14} fill="currentColor" /> Play Studio Tour Video
                </button>
              </div>
            </div>

            {/* Right Video / Visual Showcase Card */}
            <div className="lg:col-span-7">
              <div 
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border border-[#BA9D6A]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer"
              >
                <Image
                  src="/images/craft-experience.jpg"
                  alt="Nikhar Salon Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                {/* Center Play Button Pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#BA9D6A]/30 animate-ping" />
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-[#C2A774] via-[#BA9D6A] to-[#B3935B] text-[#0E1012] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play size={22} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-medium">
                    <Sparkles size={12} className="text-[#BA9D6A]" /> The Nikhar Salon Experience
                  </span>
                  <span className="text-white/80 hidden sm:inline">Kota Studio • Rajasthan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. VIP MEMBERSHIP & GROOMING PASSES (Luxury Real-Estate Inspired Cards) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0E1012] border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
            <div className="inline-flex items-center gap-2">
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
              <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#BA9D6A] uppercase">
                EXCLUSIVE MEMBERSHIP
              </span>
              <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              Nikhar Gentlemen&apos;s Club
            </h2>
            <p className="text-xs sm:text-sm text-[#A6A29A]">
              Join our VIP Grooming Club for unlimited styling sessions, zero waiting queues, and bespoke care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {VIP_PASSES.map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col justify-between rounded-2xl md:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#181A1C] border-2 border-[#BA9D6A] shadow-[0_16px_40px_rgba(186,157,106,0.25)] scale-[1.02]'
                    : 'bg-[#141619] border border-white/[0.08] hover:border-[#BA9D6A]/50'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#BA9D6A] bg-[#BA9D6A]/10 px-2.5 py-1 rounded-full border border-[#BA9D6A]/30">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl text-white mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="font-serif-title text-3xl sm:text-4xl text-[#BA9D6A] font-medium">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#A6A29A]">/ {plan.period}</span>
                  </div>

                  <div className="space-y-3 border-t border-white/[0.08] pt-6 mb-8 text-xs text-white/90">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check size={14} className="text-[#BA9D6A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/book-appointment"
                  className={`w-full text-center py-3 sm:py-3.5 rounded-xl text-xs font-bold uppercase tracking-[0.12em] transition-all ${
                    plan.featured
                      ? 'gold-gradient text-[#0E1012] shadow-md shadow-[#BA9D6A]/30 hover:brightness-105'
                      : 'border border-white/20 text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A]'
                  }`}
                >
                  Join Membership
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 6. CLIENT REVIEWS & STORIES (Amaia Carousel Style) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#141619] border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
            <span className="text-[10.5px] font-semibold tracking-[0.25em] text-[#BA9D6A] uppercase">
              TESTIMONIALS
            </span>
            <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-white font-normal mb-8 sm:mb-12">
            Trusted by Kota&apos;s Gentlemen
          </h2>

          <div className="relative bg-[#181A1C] border border-white/[0.08] rounded-2xl md:rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex justify-center gap-1.5 text-[#BA9D6A] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            <blockquote className="font-serif-title text-lg sm:text-2xl text-white/95 leading-relaxed italic max-w-3xl mx-auto">
              &ldquo;{REVIEWS[currentReview].text}&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#BA9D6A] mb-2">
                <Image
                  src={REVIEWS[currentReview].avatar}
                  alt={REVIEWS[currentReview].name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif-title text-base text-white">{REVIEWS[currentReview].name}</h4>
              <p className="text-xs text-[#BA9D6A] font-medium">{REVIEWS[currentReview].service}</p>
              <p className="text-[11px] text-[#A6A29A]">{REVIEWS[currentReview].location}</p>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
                className="h-9 w-9 rounded-full border border-white/20 text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] flex items-center justify-center transition cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs text-white/60 tabular-nums">
                0{currentReview + 1} / 0{REVIEWS.length}
              </span>
              <button
                type="button"
                onClick={() => setCurrentReview((prev) => (prev + 1) % REVIEWS.length)}
                className="h-9 w-9 rounded-full border border-white/20 text-white hover:border-[#BA9D6A] hover:text-[#BA9D6A] flex items-center justify-center transition cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 7. QUICK RESERVATION BANNER & KOTA LOCATION (Call To Action) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0E1012] to-[#0A0C0E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="rounded-2xl md:rounded-3xl border border-[#BA9D6A]/40 bg-[#141619] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2">
                <div className="h-3 w-[2px] bg-[#BA9D6A]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#BA9D6A] font-semibold">
                  INSTANT WHATSAPP BOOKING
                </span>
              </div>
              <h3 className="font-serif-title text-2xl sm:text-4xl text-white">
                Ready to Upgrade Your Signature Look?
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A29A]">
                Reserve your priority slot at Nikhar Salon Kota. Open Monday to Sunday, 9:00 AM to 10:00 PM.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/book-appointment"
                className="gold-gradient text-[#0E1012] text-xs font-bold uppercase tracking-[0.12em] px-7 py-3.5 rounded-full text-center shadow-lg shadow-[#BA9D6A]/30 hover:scale-105 transition"
              >
                Book Online Slot
              </Link>
              <a
                href="https://wa.me/918239239249?text=Hello%20Nikhar%20Salon!%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#BA9D6A]/50 bg-white/[0.05] hover:bg-[#BA9D6A]/15 text-white px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition"
              >
                <MessageCircle size={16} className="text-[#BA9D6A]" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Modal Dialog */}
      <VideoTourModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />

      {/* Interactive Booking Modal Dialog (Triggered from Quick Widget) */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-2xl">
            <AppointmentModal 
              defaultService={quickService} 
              onClose={() => setIsBookingModalOpen(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}