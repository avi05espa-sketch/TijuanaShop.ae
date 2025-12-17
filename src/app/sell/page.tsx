
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser, useFirebase } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getCategories, addProduct } from "@/lib/data";
import { Loader2 } from "lucide-react";
import type { Product } from "@/lib/types";

export default function SellPage() {
  const categories = getCategories();
  const { firestore } = useFirebase();
  const { user, loading: userLoading } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState<"Nuevo" | "Usado">();
  const [location, setLocation] = useState("Tijuana");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      toast({
        variant: "destructive",
        title: "No has iniciado sesión",
        description: "Debes iniciar sesión para publicar un producto.",
      });
      router.push('/auth');
      return;
    }

    if (!title || !description || !price || !category || !condition || !location) {
      toast({
        variant: "destructive",
        title: "Campos incompletos",
        description: "Por favor, completa todos los campos requeridos.",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Generate placeholder images instead of requiring upload
      const imageUrls = Array.from({ length: 3 }, (_, i) => `https://picsum.photos/seed/${user.uid}-${Date.now()}-${i}/600/400`);

      const productData = {
        title,
        description,
        price: Number(price),
        category,
        condition,
        location,
        sellerId: user.uid,
        images: imageUrls,
      };
      
      // The addProduct function now handles its own permission errors via the emitter.
      const docRef = await addProduct(firestore, productData);

      toast({
        title: "¡Producto publicado!",
        description: "Tu artículo ya está visible para todos.",
      });

      router.push(`/product/${docRef.id}`);

    } catch (error) {
      console.error("Error publishing product:", error);
      // The specific error toast is now handled by the error emitter,
      // but we can show a generic one here as a fallback in case the
      // error is not a permission error.
      toast({
        variant: "destructive",
        title: "Error al publicar",
        description: "Hubo un problema al guardar tu producto. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Button variant="outline" asChild>
            <Link href="/">← Cancelar</Link>
          </Button>
          <h1 className="text-xl font-bold font-headline">Publicar un Producto</h1>
          <div className="w-24"></div>
        </div>
      </header>
      <main className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Detalles del producto</CardTitle>
            <CardDescription>
              Completa la información para publicar tu artículo. Las imágenes se generarán automáticamente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="title">Título</Label>
                <Input 
                  id="title" 
                  placeholder="Ej: iPhone 14 en excelentes condiciones" 
                  required 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-zinc-100 dark:bg-zinc-800"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe tu producto detalladamente..." 
                  required 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={isSubmitting}
                   className="bg-zinc-100 dark:bg-zinc-800"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="price">Precio (MXN)</Label>
                  <Input 
                    id="price" 
                    type="number" 
                    placeholder="2500" 
                    required 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    disabled={isSubmitting}
                    className="bg-zinc-100 dark:bg-zinc-800"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoría</Label>
                  <Select 
                    required 
                    onValueChange={setCategory}
                    value={category}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger id="category" className="bg-zinc-100 dark:bg-zinc-800">
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
               <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="condition">Condición</Label>
                  <Select 
                    required 
                    onValueChange={(value: "Nuevo" | "Usado") => setCondition(value)}
                    value={condition}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger id="condition" className="bg-zinc-100 dark:bg-zinc-800">
                      <SelectValue placeholder="Selecciona la condición" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Nuevo">Nuevo</SelectItem>
                      <SelectItem value="Usado">Usado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Ubicación</Label>
                  <Input 
                    id="location" 
                    value="Tijuana"
                    disabled
                    className="bg-zinc-100 dark:bg-zinc-800"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" type="button" asChild disabled={isSubmitting}><Link href="/">Cancelar</Link></Button>
                <Button type="submit" disabled={isSubmitting || userLoading}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSubmitting ? "Publicando..." : "Publicar Anuncio"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
