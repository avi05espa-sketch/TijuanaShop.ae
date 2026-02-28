import { Home, PlusSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  // Función para saber si el botón está activo (y pintarlo de violeta)
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-card/80 backdrop-blur-lg pb-safe-area-inset-bottom">
      <div className="flex h-16 items-center justify-around px-4">
        {/* Botón de Inicio */}
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 transition-colors ${
            isActive("/") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Home size={24} strokeWidth={isActive("/") ? 2.5 : 2} />
          <span className="text-[10px] font-medium uppercase tracking-wide">Inicio</span>
        </Link>

        {/* Botón de Vender (El del centro) */}
        <Link
          to="/sell"
          className={`flex flex-col items-center gap-1 transition-colors ${
            isActive("/sell") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <PlusSquare size={24} strokeWidth={isActive("/sell") ? 2.5 : 2} />
          <span className="text-[10px] font-medium uppercase tracking-wide">Vender</span>
        </Link>

        {/* Botón de Perfil */}
        <Link
          to="/profile"
          className={`flex flex-col items-center gap-1 transition-colors ${
            isActive("/profile") ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <User size={24} strokeWidth={isActive("/profile") ? 2.5 : 2} />
          <span className="text-[10px] font-medium uppercase tracking-wide">Perfil</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
