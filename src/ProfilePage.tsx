import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package, ShoppingBag, LogOut, User, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProfilePage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{ display_name: string } | null>(null);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    if (!user) return;

    const fetchProfileData = async () => {
      // 1. Obtener datos del perfil (nombre público)
      const { data: profileData } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("user_id", user.id)
        .single();
      
      if (profileData) setProfile(profileData);

      // 2. Contar productos publicados por este usuario
      const { count } = await supabase
        .from("products")
        .select("*", { count: 'exact', head: true })
        .eq("seller_id", user.id);
      
      if (count !== null) setProductCount(count);
    };

    fetchProfileData();
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    toast.success("Sesión cerrada correctamente");
    navigate("/auth");
  };

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center bg-background">
        <User size={64} className="text-muted-foreground opacity-20" />
        <h2 className="text-xl font-bold">Inicia sesión para ver tu perfil</h2>
        <Button onClick={() => navigate("/auth")} className="w-full max-w-xs">Ir al Login</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header con color Violeta Avi-Espa */}
      <div className="bg-primary pt-12 pb-24 px-6 text-primary-foreground">
