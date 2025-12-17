import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" prefetch={false}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        {/* Verde */}
        <path d="M0 8L8 0H16L8 8H0Z" fill="#22C55E" /> 
        {/* Naranja */}
        <path d="M8 16L16 8V0L0 16H8Z" fill="#F97316" />
        {/* Amarillo */}
        <path d="M24 16L16 24V32L32 16H24Z" fill="#FBBF24" />
        {/* Rosa */}
        <path d="M16 24L24 32H32L24 24H16Z" fill="#EC4899" />
      </svg>
      <span className="text-xl font-bold text-foreground hidden sm:inline-block">
        Tijuana<span className="text-primary">Shop</span>
      </span>
    </Link>
  );
}
