'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Scissors, Sparkles, ShieldCheck, Clock, ArrowRight, Star, 
  Phone, MapPin, Send, ChevronLeft, ChevronRight, Menu, X, Heart
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { galleryData } from '@/data/gallery';
import ServiceCard from '@/components/ServiceCard';

// 5 Real Customer Reviews
const REVIEWS = [
  {
    id: 1,
    name: "Rohit Sharma",
    location: "Kota, Rajasthan",
    rating: 5,
    service: "Fade Haircut & Beard",
    text: "Nikhar Salon is hands down the best men's salon in Kota! Great service, polite professional staff, and amazing fade styling results. Highly recommended to everyone.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Aman Verma",
    location: "Talwandi, Kota",
    rating: 5,
    service: "Keratin Spa Treatment",
    text: "Mera hair spa ka experience bohot hi premium raha. Salon ka interior luxury look deta hai aur staff bahut polite aur hygienic equipment use karta hai.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Vikram Rathore",
    location: "Gumanpura, Kota",
    rating: 5,
    service: "Beard Sculpting & Shape",
    text: "Best beard styling artist in Kota. Pehli baar meri beard ko exact jaisa chahiye tha waisa perfect sharp look mila. Super satisfied!",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Priyansh Meena",
    location: "Kunhari, Kota",
    rating: 5,
    service: "Charcoal Detox Facial",
    text: "Deep clean facial ke baad meri skin ekdum fresh aur glowing ho gayi. Top quality products use karte hain jo skin ke liye totally safe hain.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Mohit Jain",
    location: "Dadabari, Kota",
    rating: 5,
    service: "Executive Grooming Combo",
    text: "Appointment time par bilkul zero wait time mila. VIP treatment jaisa feel hota hai yahan. Har month yahi se grooming karwata hoon.",
    avatar: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=200&q=80"
  }
];

export default function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Haircut & Styling',
    message: ''
  });
  const [sent, setSent] = useState(false);

  // Automatic Review Slider (Har 4 seconds me slide hoga)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const text = encodeURIComponent(
      `*New Inquiry - Nikhar Salon Kota*\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `✂️ Service: ${formData.service}\n` +
      `💬 Message: ${formData.message}`
    );
    window.open(`https://wa.me/918239239249?text=${text}`, '_blank');
  };

  return (
    <main className="overflow-x-hidden antialiased flex flex-col min-h-screen">
      {/* 1. HERO SECTION (Explicit mobile responsive fix for screenshot overflow and missing image) */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center px-4 sm:px-8 md:px-16 overflow-hidden bg-gradient-to-r from-black via-[#0d0d0e] to-black border-b border-zinc-800/60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center w-full max-w-7xl mx-auto py-10 md:py-16">
          <div className="space-y-4 sm:space-y-5 antialiased flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#e4a863] font-semibold">
              MEN'S SALON
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-bold leading-tight text-white antialiased">
              Style Beyond <br />
              <span className="italic font-normal text-zinc-300">Just a Haircut</span>
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed antialiased">
              At Nikhar Salon, we believe every man deserves to look and feel his best. From sharp haircuts to premium grooming, we bring out your best look.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex justify-center items-center gap-2 gold-gradient text-black font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full shadow-lg shadow-[#e4a863]/20 hover:scale-105 transition antialiased"
              >
                Book Your Appointment <ArrowRight size={15} />
              </Link>
              <a
                href="#services"
                className="inline-flex justify-center items-center border border-zinc-700 text-zinc-300 hover:text-white px-6 py-3.5 rounded-full text-xs uppercase tracking-wider transition antialiased"
              >
                Explore Services
              </a>
            </div>
            <p className="text-xs text-zinc-500 pt-1">📍 Kota, Rajasthan</p>
          </div>

          {/* Hero Photo - Properly sized for all devices including mobile screens */}
          <div className="relative h-64 sm:h-80 md:h-[500px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85"
              alt="Salon Styling"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <span className="absolute bottom-6 right-6 font-script text-3xl lg:text-4xl text-[#e4a863] drop-shadow-md">
              Grooming Redefined
            </span>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="bg-[#0f0f12] border-b border-zinc-800/80 py-7 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center antialiased">
          <div className="flex flex-col items-center antialiased">
            <Scissors className="text-[#e4a863] mb-2 antialiased" size={24} />
            <h4 className="font-semibold text-xs sm:text-sm text-white antialiased antialiased">Professional Stylists</h4>
            <p className="text-[11px] text-zinc-500 mt-0.5 antialiased antialiased antialiased">Top industry experts</p>
          </div>
          <div className="flex flex-col items-center antialiased">
            <ShieldCheck className="text-[#e4a863] mb-2 antialiased" size={24} />
            <h4 className="font-semibold text-xs sm:text-sm text-white antialiased antialiased">Hygienic & Safe</h4>
            <p className="text-[11px] text-zinc-500 mt-0.5 antialiased antialiased antialiased">Sterilized equipment</p>
          </div>
          <div className="flex flex-col items-center antialiased">
            <Sparkles className="text-[#e4a863] mb-2 antialiased" size={24} />
            <h4 className="font-semibold text-xs sm:text-sm text-white antialiased antialiased">Premium Products</h4>
            <p className="text-[11px] text-zinc-500 mt-0.5 antialiased antialiased antialiased">100% skin safe</p>
          </div>
          <div className="flex flex-col items-center antialiased">
            <Clock className="text-[#e4a863] mb-2 antialiased" size={24} />
            <h4 className="font-semibold text-xs sm:text-sm text-white antialiased antialiased">On-Time Service</h4>
            <p className="text-[11px] text-zinc-500 mt-0.5 antialiased antialiased antialiased">Zero waiting with booking</p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 flex flex-col antialiased">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center flex flex-col antialiased">
          <div className="space-y-4 flex flex-col antialiased flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#e4a863] font-semibold antialiased">
              ABOUT NIKHAR SALON
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white antialiased antialiased antialiased">
              Your Style, Our Passion
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed antialiased antialiased antialiased">
              Nikhar Salon is a premier men's salon in Kota, Rajasthan, dedicated to giving you the best grooming experience. Our expert stylists, modern techniques, and high-quality products ensure you always look sharp, confident, and refreshed.
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed antialiased antialiased antialiased">
              Founded with the belief that men deserve a dedicated luxury retreat, we combine traditional grooming craft with modern aesthetics.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800 antialiased">
              <div className="antialiased">
                <p className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#e4a863] antialiased">5+</p>
                <p className="text-[10px] sm:text-xs uppercase text-zinc-400 tracking-wider antialiased">Stylists</p>
              </div>
              <div className="antialiased">
                <p className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#e4a863] antialiased">1000+</p>
                <p className="text-[10px] sm:text-xs uppercase text-zinc-400 tracking-wider antialiased">Clients</p>
              </div>
              <div className="antialiased">
                <p className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#e4a863] antialiased">5★</p>
                <p className="text-[10px] sm:text-xs uppercase text-zinc-400 tracking-wider antialiased">Rating</p>
              </div>
            </div>

            <div className="pt-2 antialiased">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#e4a863] font-semibold hover:gap-3 transition-all antialiased antialiased antialiased antialiased"
              >
                Read Our Full Story & Meet Team →
              </Link>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl flex flex-col antialiased">
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
              alt="Nikhar Salon Ambience"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-20 px-4 sm:px-6 bg-[#0c0c0e] border-y border-zinc-800/80 flex flex-col antialiased">
        <div className="max-w-7xl mx-auto flex flex-col antialiased">
          <div className="text-center mb-12 sm:mb-16 flex flex-col antialiased">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#e4a863] font-semibold mb-2 antialiased antialiased">
              OUR SERVICES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white antialiased antialiased antialiased antialiased">
              Complete Grooming for Modern Men
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto antialiased antialiased antialiased">
              From hair to beard, skin to style — we cover everything you need to look your best.
            </p>
          </div>

          {/* Grid layout ensuring single column on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col antialiased">
            {servicesData.slice(0, 6).map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col antialiased">
            <Link
              href="/services"
              className="inline-block border border-[#e4a863] text-[#e4a863] hover:bg-[#e4a863] hover:text-black transition px-7 py-3 rounded-full text-xs uppercase tracking-wider font-semibold antialiased antialiased antialiased antialiased"
            >
              View All Services & Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section id="gallery" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col antialiased">
        <div className="text-center mb-12 flex flex-col antialiased">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#e4a863] font-semibold mb-2 antialiased antialiased">
            OUR GALLERY
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white antialiased antialiased antialiased antialiased">
            Moments of Style & Confidence
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2 antialiased antialiased antialiased">
            Real people, real transformations.
          </p>
        </div>

        {/* Grid layout for small devices */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 flex flex-col antialiased">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg flex flex-col antialiased"
            >
              <Image
                src={item.imgUrl}
                alt={item.altText}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-3 sm:p-4">
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#e4a863] font-semibold uppercase antialiased antialiased antialiased antialiased">
                  {item.category}
                </span>
                <p className="text-white text-xs sm:text-sm font-medium mt-0.5 antialiased antialiased antialiased">{item.altText}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col antialiased">
          <Link
            href="/gallery"
            className="inline-block border border-zinc-700 text-zinc-300 hover:text-white hover:border-[#e4a863] transition px-7 py-2.5 rounded-full text-xs uppercase tracking-wider antialiased antialiased antialiased antialiased antialiased"
          >
            Explore Full Lookbook →
          </Link>
        </div>
      </section>

      {/* 5. AUTOMATIC REVIEWS SLIDER (NEW & UPDATED) */}
      <section className="py-20 px-4 sm:px-6 bg-[#0f0f12] border-y border-zinc-800 relative flex flex-col antialiased">
        <div className="max-w-4xl mx-auto text-center flex flex-col antialiased">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#e4a863] font-semibold mb-2 antialiased antialiased antialiased">
            CLIENT EXPERIENCES
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white mb-8 antialiased antialiased antialiased antialiased">
            What Our Clients Say
          </h2>

          {/* Slider Content */}
          <div className="relative min-h-[220px] flex items-center justify-center flex flex-col antialiased">
            {/* Prev Button */}
            <button
              onClick={prevReview}
              className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:text-[#e4a863] hover:border-[#e4a863] flex items-center justify-center transition z-10 antialiased antialiased antialiased"
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Current Active Review Card */}
            <div className="max-w-2xl px-8 transition-opacity duration-500 ease-in-out flex flex-col antialiased">
              {/* 5 Stars */}
              <div className="flex justify-center gap-1 text-[#e4a863] mb-5 antialiased">
                {[...Array(REVIEWS[currentReview].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-base sm:text-lg text-zinc-200 italic leading-relaxed font-normal antialiased antialiased antialiased">
                "{REVIEWS[currentReview].text}"
              </blockquote>

              {/* Client Info */}
              <div className="mt-6 flex items-center justify-center gap-3 antialiased">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#e4a863]">
                  <Image
                    src={REVIEWS[currentReview].avatar}
                    alt={REVIEWS[currentReview].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left antialiased antialiased antialiased">
                  <h4 className="font-semibold text-sm text-white antialiased antialiased antialiased antialiased">
                    {REVIEWS[currentReview].name}
                  </h4>
                  <p className="text-[11px] text-zinc-400 antialiased antialiased antialiased">
                    {REVIEWS[currentReview].location} • <span className="text-[#e4a863]">{REVIEWS[currentReview].service}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextReview}
              className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:text-[#e4a863] hover:border-[#e4a863] flex items-center justify-center transition z-10 antialiased antialiased antialiased"
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8 antialiased">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentReview(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentReview === idx ? 'w-8 bg-[#e4a863]' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Slide to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT & QUICK INQUIRY (WITH 8239239249) */}
      <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col antialiased">
        <div className="text-center mb-12 flex flex-col antialiased">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#e4a863] font-semibold mb-2 antialiased antialiased antialiased">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white antialiased antialiased antialiased antialiased">
            Visit Us or Book Your Slot
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex flex-col antialiased">
          {/* Details */}
          <div className="space-y-4 flex flex-col antialiased">
            <div className="flex items-start gap-4 bg-[#121214] p-5 rounded-xl border border-zinc-800 antialiased">
              <Phone className="text-[#e4a863] shrink-0 mt-1 antialiased" size={20} />
              <div className="antialiased">
                <h4 className="text-xs uppercase text-zinc-400 font-semibold tracking-wider antialiased antialiased antialiased">Phone & WhatsApp</h4>
                {/* Updated to 8239239249 */}
                <a 
                  href="tel:+918239239249" 
                  className="text-white font-medium text-sm mt-0.5 hover:text-[#e4a863] transition block antialiased antialiased antialiased antialiased"
                >
                  +91 82392 39249
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#121214] p-5 rounded-xl border border-zinc-800 antialiased">
              <MapPin className="text-[#e4a863] shrink-0 mt-1 antialiased" size={20} />
              <div className="antialiased">
                <h4 className="text-xs uppercase text-zinc-400 font-semibold tracking-wider antialiased antialiased antialiased">Address</h4>
                <p className="text-white font-medium text-sm mt-0.5 antialiased antialiased antialiased">Shop No. 12, 1st Floor, City Mall, Kota, Rajasthan - 324001</p>
              </div>
            </div>

            <div className="w-full h-56 rounded-xl overflow-hidden border border-zinc-800 flex flex-col antialiased">
              <iframe
                title="Nikhar Salon Kota"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115545.98147573426!2d75.7663242!3d25.1764654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f849f2b874533%3A0x89988a8f895c2e3!2sKota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="bg-[#121214] border border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col antialiased">
            <h3 className="text-xl font-serif-luxury font-bold text-white mb-4 antialiased antialiased antialiased antialiased antialiased">Send Us a Quick Message</h3>
            {sent ? (
              <div className="text-center py-8 flex flex-col antialiased">
                <p className="text-[#e4a863] font-semibold text-sm antialiased antialiased antialiased">Message Sent to WhatsApp!</p>
                <button onClick={() => setSent(false)} className="mt-4 text-xs text-zinc-400 underline antialiased antialiased antialiased">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 antialiased">
                <div className="antialiased">
                  <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1 antialiased">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#e4a863]"
                  />
                </div>
                <div className="antialiased">
                  <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1 antialiased">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 82392 39249"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#e4a863]"
                  />
                </div>
                <div className="antialiased">
                  <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1 antialiased">Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#e4a863]"
                  >
                    <option>Haircut & Styling</option>
                    <option>Beard Grooming</option>
                    <option>Facial Care</option>
                    <option>Hair Treatment</option>
                    <option>Shave & Clean Up</option>
                  </select>
                </div>
                <div className="antialiased">
                  <label className="text-xs uppercase text-zinc-400 tracking-wider block mb-1 antialiased">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Your inquiry or preference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#e4a863] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gold-gradient text-black py-3 rounded-xl font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#e4a863]/20 hover:opacity-95 transition antialiased antialiased antialiased antialiased antialiased"
                >
                  <Send size={14} /> Send Message on WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}