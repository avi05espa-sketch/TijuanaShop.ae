import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getCategories } from "@/lib/data";

export default function SellPage() {
  const categories = getCategories();

  return (
    <div className="bg-secondary min-h-screen">
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
              Completa la información para publicar tu artículo en el marketplace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="photos">Fotos</Label>
                <Input id="photos" type="file" multiple required />
                <p className="text-sm text-muted-foreground">Sube una o más imágenes de tu producto.</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title">Título</Label>
                <Input id="title" placeholder="Ej: iPhone 14 en excelentes condiciones" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea id="description" placeholder="Describe tu producto detalladamente..." required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="price">Precio (MXN)</Label>
                  <Input id="price" type="number" placeholder="2500" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoría</Label>
                  <Select required>
                    <SelectTrigger id="category">
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
                  <Label htmlFor="condition">Estado</Label>
                  <Select required>
                    <SelectTrigger id="condition">
                      <SelectValue placeholder="Selecciona el estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nuevo">Nuevo</SelectItem>
                      <SelectItem value="usado">Usado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Ubicación general</Label>
                  <Input id="location" placeholder="Ej: Playas de Tijuana" required />
                </div>
              </div>
              <div className="grid gap-2">
                  <Label htmlFor="contact">Teléfono o chat</Label>
                  <Input id="contact" placeholder="Tu número de teléfono (opcional)" />
                  <p className="text-sm text-muted-foreground">
                    Si no lo proporcionas, los compradores solo podrán contactarte por el chat de la app.
                  </p>
                </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" type="button" asChild><Link href="/">Cancelar</Link></Button>
                <Button type="submit">Publicar</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
