'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Scissors, Image as ImageIcon, Info, MapPin } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Scissors },
    { name: 'Lookbook', href: '/gallery', icon: ImageIcon },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: MapPin },
  ];

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/98 dark:bg-[#0E1012]/98 backdrop-blur-2xl border-t border-[#E5E0D8] dark:border-white/[0.1] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.7)] px-2 py-1.5 safe-area-bottom transition-colors duration-300"
    >
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 relative group ${
                isActive
                  ? 'text-[#8C734B] dark:text-[#BA9D6A]'
                  : 'text-[#7D776D] hover:text-[#181A1C] dark:text-white/60 dark:hover:text-white'
              }`}
            >
              {/* Active Top Glow Pill */}
              {isActive && (
                <span className="absolute -top-1.5 w-6 h-[2.5px] bg-[#BA9D6A] rounded-full shadow-[0_0_8px_#BA9D6A]" />
              )}

              <div
                className={`p-1 rounded-lg transition-transform ${
                  isActive ? 'scale-110' : 'group-hover:scale-105'
                }`}
              >
                <Icon size={19} strokeWidth={isActive ? 2.3 : 1.8} />
              </div>

              <span
                className={`text-[9.5px] tracking-wider uppercase font-sans mt-0.5 ${
                  isActive ? 'font-bold text-[#8C734B] dark:text-[#BA9D6A]' : 'font-medium'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
