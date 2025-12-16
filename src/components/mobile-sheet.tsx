import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Menu,
  Home,
  User,
  LayoutGrid,
  MessageSquare,
  Heart,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';
import { Logo } from './logo';
import { Separator } from './ui/separator';

const menuItems = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/account/profile', label: 'Perfil', icon: User },
  { href: '/account/listings', label: 'Mis publicaciones', icon: LayoutGrid },
  { href: '/account/messages', label: 'Mensajes', icon: MessageSquare },
  { href: '/account/favorites', label: 'Favoritos', icon: Heart },
];

const secondaryMenuItems = [
  { href: '/account/settings', label: 'Ajustes', icon: Settings },
  { href: '/help', label: 'Ayuda', icon: HelpCircle },
  { href: '/login', label: 'Cerrar sesión', icon: LogOut },
];

export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col w-72 sm:w-80">
        <div className="p-4">
          <Logo />
        </div>
        <Separator />
        <nav className="flex-1 px-2 py-4 space-y-2">
          {menuItems.map(({ href, label, icon: Icon }) => (
            <SheetClose asChild key={label}>
              <Link href={href} passHref>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base"
                >
                  <Icon className="mr-4 h-5 w-5" />
                  {label}
                </Button>
              </Link>
            </SheetClose>
          ))}
        </nav>
        <Separator />
        <div className="px-2 py-4 space-y-2">
          {secondaryMenuItems.map(({ href, label, icon: Icon }) => (
             <SheetClose asChild key={label}>
                <Link href={href} passHref>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base"
                  >
                    <Icon className="mr-4 h-5 w-5" />
                    {label}
                  </Button>
                </Link>
              </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
