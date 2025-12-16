import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/logo';
import { MobileSheet } from './mobile-sheet';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <MobileSheet />
          </div>
          <Logo />
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <form action="/search" className="w-full relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              name="q"
              placeholder="Buscar producto..."
              className="w-full pl-10"
            />
          </form>
        </div>

        <div className="flex items-center gap-2">
           <div className="md:hidden">
             <Button variant="ghost" size="icon" asChild>
                <Link href="/search"><Search className="h-5 w-5"/></Link>
             </Button>
           </div>
          <Button variant="ghost" asChild>
            <Link href="/login">Iniciar sesión</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Crear cuenta</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
