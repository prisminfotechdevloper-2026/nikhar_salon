'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    // Direct WhatsApp send
    const text = encodeURIComponent(
      `*NEW INQUIRY - NIKHAR SALON KOTA*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Service Interested:* ${formData.service || 'General Inquiry'}\n` +
      `*Message:* ${formData.message}\n\n` +
      `*Location:* Shop No. 9, Vigyan Nagar, Kota (Raj)\n` +
      `_Sent via Nikhar Salon Official Website_`
    );
    window.open(`https://wa.me/919784711323?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-[#141619] border border-[#E5E0D8] dark:border-white/[0.09] p-6 sm:p-10 rounded-2xl md:rounded-3xl shadow-xs hover:shadow-md dark:shadow-xl transition-colors duration-300">
      <div className="mb-6 space-y-1">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#8C734B] dark:text-[#BA9D6A] font-semibold font-sans">
            SEND AN INQUIRY
          </span>
        </div>
        <h2 className="font-serif-title text-2xl sm:text-3xl text-[#181A1C] dark:text-white">We&apos;d Love to Hear From You</h2>
      </div>

      {sent ? (
        <div className="text-center py-12 space-y-3">
          <div className="h-14 w-14 rounded-full bg-[#BA9D6A]/20 text-[#8C734B] dark:text-[#BA9D6A] flex items-center justify-center mx-auto">
            <CheckCircle2 size={28} />
          </div>
          <h4 className="font-serif-title text-2xl text-[#181A1C] dark:text-white">Inquiry Transmitted!</h4>
          <p className="text-xs sm:text-sm text-[#555047] dark:text-[#A6A29A] max-w-sm mx-auto">
            Thank you! Your message has been prepared for our salon WhatsApp concierge.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSent(false)}
              className="border border-[#D9D4CB] dark:border-white/20 text-xs uppercase tracking-wider px-6 py-2.5 rounded-full text-[#181A1C] dark:text-white hover:border-[#BA9D6A] cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="text-[11px] uppercase text-[#7D776D] dark:text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                Full Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="e.g. Ishan Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="text-[11px] uppercase text-[#7D776D] dark:text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                Phone / WhatsApp *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                placeholder="+91 97847 11323"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-email" className="text-[11px] uppercase text-[#7D776D] dark:text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                Email Address (Optional)
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30"
              />
            </div>

            <div>
              <label htmlFor="contact-service" className="text-[11px] uppercase text-[#7D776D] dark:text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                Service of Interest
              </label>
              <select
                id="contact-service"
                aria-label="Service of Interest"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-[#181A1C] dark:text-white cursor-pointer"
              >
                <option value="" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Select a service...</option>
                <option value="Haircut & Styling" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Haircut & Styling</option>
                <option value="Beard Sculpting" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Beard Sculpting</option>
                <option value="Facial Care" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Facial Care</option>
                <option value="Hair Spa & Keratin" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Hair Spa & Keratin</option>
                <option value="VIP Royal Combo" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">VIP Royal Combo</option>
                <option value="Groom Wedding Package" className="bg-white dark:bg-[#181A1C] text-[#181A1C] dark:text-white">Groom Wedding Package</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="text-[11px] uppercase text-[#7D776D] dark:text-[#A6A29A] tracking-wider block mb-1 font-semibold">
              Your Message or Special Request *
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              placeholder="Tell us about your requirements, wedding date, or preferred stylist..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#F5F2ED] dark:bg-[#181A1C] border border-[#D9D4CB] dark:border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-[#181A1C] dark:text-white placeholder:text-[#7D776D]/60 dark:placeholder:text-white/30 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full gold-gradient text-[#0E1012] py-3.5 rounded-xl font-bold uppercase tracking-[0.12em] text-xs flex items-center justify-center gap-2.5 shadow-md shadow-[#BA9D6A]/20 hover:brightness-105 transition-colors cursor-pointer"
          >
            <WhatsAppIcon size={18} variant="authentic" /> Send Message via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}
