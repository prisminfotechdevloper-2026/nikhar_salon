'use client';

import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

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
      `*🌟 NEW INQUIRY - NIKHAR SALON KOTA 🌟*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'N/A'}\n` +
      `✂️ *Service Interested:* ${formData.service || 'General Inquiry'}\n` +
      `💬 *Message:* ${formData.message}\n\n` +
      `_Sent via Nikhar Salon Contact Page_`
    );
    window.open(`https://wa.me/918239239249?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#141619] border border-white/[0.09] p-6 sm:p-10 rounded-2xl md:rounded-3xl shadow-xl">
      <div className="mb-6 space-y-1">
        <div className="inline-flex items-center gap-2">
          <div className="h-3 w-[2px] bg-[#BA9D6A]" />
          <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#BA9D6A] font-semibold">
            SEND AN INQUIRY
          </span>
        </div>
        <h2 className="font-serif-title text-2xl sm:text-3xl text-white">We&apos;d Love to Hear From You</h2>
      </div>

      {sent ? (
        <div className="text-center py-12 space-y-3">
          <div className="h-14 w-14 rounded-full bg-[#BA9D6A]/20 text-[#BA9D6A] flex items-center justify-center mx-auto">
            <Sparkles size={28} />
          </div>
          <h4 className="font-serif-title text-2xl text-white">Inquiry Transmitted!</h4>
          <p className="text-xs sm:text-sm text-[#A6A29A] max-w-sm mx-auto">
            Thank you! Your message has been prepared for our salon WhatsApp concierge.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSent(false)}
              className="border border-white/20 text-xs uppercase tracking-wider px-6 py-2.5 rounded-full text-white hover:border-[#BA9D6A] cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ishan Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 8239239249"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white"
              />
            </div>

            <div>
              <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
                Service of Interest
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white cursor-pointer"
              >
                <option value="">Select a service...</option>
                <option value="Haircut & Styling">Haircut & Styling</option>
                <option value="Beard Sculpting">Beard Sculpting</option>
                <option value="Facial Care">Facial Care</option>
                <option value="Hair Spa & Keratin">Hair Spa & Keratin</option>
                <option value="VIP Royal Combo">VIP Royal Combo</option>
                <option value="Groom Wedding Package">Groom Wedding Package</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase text-[#A6A29A] tracking-wider block mb-1 font-semibold">
              Your Message or Special Request *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Tell us about your requirements, wedding date, or preferred stylist..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#181A1C] border border-white/[0.1] rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#BA9D6A] text-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full gold-gradient text-[#0E1012] py-3.5 rounded-xl font-bold uppercase tracking-[0.12em] text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#BA9D6A]/20 hover:brightness-105 transition cursor-pointer"
          >
            <Send size={15} /> Send Message via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}
