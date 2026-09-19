import React from 'react';

interface WhatsAppIconProps {
  size?: number;
  className?: string;
  variant?: 'authentic' | 'mono' | 'luxury';
}

/**
 * High-fidelity, official WhatsApp vector icon component.
 * - 'authentic': Official WhatsApp emerald green bubble with crisp white handset.
 * - 'mono': Single-color fill that responds to parent text color.
 * - 'luxury': Gold-tinted premium edition matching the salon aesthetic.
 */
export default function WhatsAppIcon({
  size = 20,
  className = '',
  variant = 'authentic'
}: WhatsAppIconProps) {
  if (variant === 'authentic') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 drop-shadow-sm ${className}`}
        aria-hidden="true"
      >
        {/* Authentic Green Gradient Background Disc */}
        <defs>
          <linearGradient id="waGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#29E56C" />
            <stop offset="50%" stopColor="#25D366" />
            <stop offset="100%" stopColor="#1EBE5D" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="11" fill="url(#waGradient)" />
        
        {/* Crisp White WhatsApp Handset & Bubble Path */}
        <path
          d="M12.012 4.5a7.512 7.512 0 00-6.425 11.397l-.842 3.076 3.155-.828A7.508 7.508 0 1012.012 4.5zm4.37 10.603c-.183.513-.912.94-1.282 1-.365.059-.834.083-1.344-.08a11.96 11.96 0 01-1.23-.48 9.39 9.39 0 01-3.754-3.324c-.13-.22-.27-.45-.4-.68-.133-.228-.21-.452-.21-.692 0-.24.12-.47.24-.59.12-.12.24-.24.36-.36.09-.09.15-.18.21-.27.09-.15.03-.27-.03-.39-.06-.12-.54-1.3-.74-1.78-.19-.48-.39-.41-.54-.42-.14-.01-.3-.01-.45-.01-.15 0-.39.06-.6.28-.21.23-.8 78-.8 1.9 0 1.12.82 2.21.93 2.36.11.15 1.6 2.45 3.88 3.43.54.23.96.37 1.29.48.54.17 1.04.15 1.43.09.44-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.16-.44-.27z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (variant === 'luxury') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2C999" />
            <stop offset="50%" stopColor="#BA9D6A" />
            <stop offset="100%" stopColor="#9C7F4E" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="11" fill="url(#waGoldGradient)" />
        <path
          d="M12.012 4.5a7.512 7.512 0 00-6.425 11.397l-.842 3.076 3.155-.828A7.508 7.508 0 1012.012 4.5zm4.37 10.603c-.183.513-.912.94-1.282 1-.365.059-.834.083-1.344-.08a11.96 11.96 0 01-1.23-.48 9.39 9.39 0 01-3.754-3.324c-.13-.22-.27-.45-.4-.68-.133-.228-.21-.452-.21-.692 0-.24.12-.47.24-.59.12-.12.24-.24.36-.36.09-.09.15-.18.21-.27.09-.15.03-.27-.03-.39-.06-.12-.54-1.3-.74-1.78-.19-.48-.39-.41-.54-.42-.14-.01-.3-.01-.45-.01-.15 0-.39.06-.6.28-.21.23-.8.78-.8 1.9 0 1.12.82 2.21.93 2.36.11.15 1.6 2.45 3.88 3.43.54.23.96.37 1.29.48.54.17 1.04.15 1.43.09.44-.07 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.1-.21-.16-.44-.27z"
          fill="#0E1012"
        />
      </svg>
    );
  }

  // Mono variant: clean vector outline/glyph
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
