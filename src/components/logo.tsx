import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
       <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <path 
          d="M5 35 C 5 25, 15 5, 20 5 C 25 5, 35 25, 35 35" 
          stroke="hsl(var(--primary))" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M2 35 L 38 35" 
          stroke="hsl(var(--primary))" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold text-foreground hidden sm:inline-block">
        Tijuana Shop
      </span>
    </Link>
  );
}
