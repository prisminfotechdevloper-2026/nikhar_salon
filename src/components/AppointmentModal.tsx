'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import SimpleBookingForm from '@/components/book-appointment/SimpleBookingForm';

export type { Stylist, AddonService } from '@/data/appointment';

interface AppointmentModalProps {
  onClose?: () => void;
  defaultService?: string;
  defaultStylist?: string;
}

export default function AppointmentModal({ onClose, defaultService, defaultStylist }: AppointmentModalProps) {
  const isModal = Boolean(onClose);

  // Modal mode scroll locking & escape key
  useEffect(() => {
    if (!onClose) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isModal) {
    return <SimpleBookingForm defaultService={defaultService} defaultStylist={defaultStylist} />;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto overscroll-contain"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3.5 -right-2 sm:-right-3.5 z-30 w-8 h-8 rounded-full bg-[#181A1C] border border-white/25 text-white flex items-center justify-center hover:bg-[#BA9D6A] hover:text-black transition shadow-lg cursor-pointer"
          aria-label="Close booking modal"
        >
          <X size={15} />
        </button>

        <SimpleBookingForm
          defaultService={defaultService}
          defaultStylist={defaultStylist}
          onSuccess={onClose}
        />
      </div>
    </div>
  );
}