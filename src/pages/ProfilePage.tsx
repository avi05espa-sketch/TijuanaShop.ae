import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package, ShoppingBag, LogOut, User, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{ display_name: string } | null>(null);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const [profileRes, productsRes] = await Promise.all([
        supabase.from("profiles").select("display_name").eq("user_id", user.id).single(),
        supabase.from("products").select("id", { count: "exact", head: true }).eq("seller_id", user.id),
      ]);
      if (profileRes.data) setProfile(profileRes.data);
      if (productsRes.count !== null) setProductCount(productsRes.count);
    };
    fetchData();
  }, [user]);

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-6">
        <p className="text-muted-foreground text-center">Inicia sesión para ver tu perfil en Tijuana Shop</p>
        <Button onClick={() => navigate("/auth")} className="w-full max-w-xs">Ir al Login</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header con el Violeta Moderno */}
      <div className="bg-primary px-6 pt-12 pb-20 text-primary-foreground">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Mi Cuenta</h1>
          <button onClick={() => signOut()} className="p-2 hover:bg-white/10 rounded-full">
            <LogOut size={20} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/40 shadow-xl">
            <User size={40} />
          </div>
          <div>
            <h2 className="text-xl font-bold">{profile?.display_name || user.email?.split("@")[0]}</h2>
            <p className="text-sm opacity-80">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-10 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-card p-4 shadow-lg border border-border">
          <Package className="text-primary mb-2" size={24} />
          <p className="text-2xl font-bold text-foreground">{productCount}</p>
          <p className="text-xs text-muted-foreground font-semibold">MIS PRODUCTOS</p>
        </div>
        <div className="rounded-2xl bg-card p-4 shadow-lg border border-border">
          <ShoppingBag className="text-accent mb-2" size={24} />
          <p className="text-2xl font-bold text-foreground">0</p>
          <p className="text-xs text-muted-foreground font-semibold">COMPRAS</p>
        </div>
      </div>

      <div className="mt-8 px-6 space-y-4">
        <Button variant="outline" className="w-full justify-start gap-3 h-12 rounded-xl border-dashed">
          <Settings size={18} />
          Configuración del perfil
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
