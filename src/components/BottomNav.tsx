import { Home, PlusSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-card/80 backdrop-blur-lg pb-safe">
      <div className="flex h-16 items-center justify-around px-4">
        <Link to="/" className={`flex flex-col items-center gap-1 ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>
          <Home size={24} />
          <span className="text-[10px] font-bold uppercase">Inicio</span>
        </Link>

        <Link to="/sell" className={`flex flex-col items-center gap-1 ${isActive("/sell") ? "text-primary" : "text-muted-foreground"}`}>
          <PlusSquare size={24} />
          <span className="text-[10px] font-bold uppercase">Vender</span>
        </Link>

        <Link to="/profile" className={`flex flex-col items-center gap-1 ${isActive("/profile") ? "text-primary" : "text-muted-foreground"}`}>
          <User size={24} />
          <span className="text-[10px] font-bold uppercase">Perfil</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
