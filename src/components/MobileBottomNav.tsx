'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Scissors, BadgeCheck, Info, MapPin } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Scissors },
    { name: 'Results', href: '/transformations', icon: BadgeCheck },
    { name: 'Contact', href: '/contact', icon: MapPin },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E1012]/98 backdrop-blur-2xl border-t border-white/[0.1] shadow-[0_-8px_30px_rgba(0,0,0,0.7)] px-2 py-1.5 safe-area-bottom"
    >
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 relative group ${isActive
                  ? 'text-[#BA9D6A]'
                  : 'text-white/60 hover:text-white'
                }`}
            >
              {/* Active Top Glow Pill */}
              {isActive && (
                <span className="absolute -top-1.5 w-6 h-[2.5px] bg-[#BA9D6A] rounded-full shadow-[0_0_8px_#BA9D6A]" />
              )}

              <div
                className={`p-1 rounded-lg transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
              >
                <Icon size={19} strokeWidth={isActive ? 2.3 : 1.8} />
              </div>

              <span
                className={`text-[9.5px] tracking-wider uppercase font-sans mt-0.5 ${isActive ? 'font-bold text-[#BA9D6A]' : 'font-medium'
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
