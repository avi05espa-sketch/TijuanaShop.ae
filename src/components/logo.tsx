import Link from 'next/link';
import { Store } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Store className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground hidden sm:inline-block">
        Tijuana Marketplace
      </span>
    </Link>
  );
}
