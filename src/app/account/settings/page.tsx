
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
import { Loader2 } from "lucide-react";

export default function AccountSettingsPage() {
    const { user, loading } = useUser();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        )
    }

    if (!user) {
        return (
             <div className="flex flex-col items-center justify-center h-screen text-center">
                <p className="text-lg">Debes iniciar sesión para ver tus ajustes.</p>
                <Button asChild className="mt-4">
                    <Link href="/auth">Iniciar Sesión</Link>
                </Button>
            </div>
        )
    }

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Button variant="outline" asChild>
                <Link href="/">← Volver</Link>
            </Button>
            <h1 className="text-xl font-bold font-headline">Ajustes de Cuenta</h1>
            <div className="w-24"></div>
            </div>
        </header>

        <main className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
            <Card>
                <CardHeader>
                    <CardTitle>Perfil Público</CardTitle>
                    <CardDescription>
                        Esta información será visible para otros usuarios en la plataforma.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20 border">
                            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'Usuario'} />
                            <AvatarFallback className="text-2xl">{user.displayName?.charAt(0) || 'U'}</AvatarFallback>
                        </Avatar>
                        <Button variant="outline">Cambiar foto</Button>
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="displayName">Nombre</Label>
                        <Input id="displayName" defaultValue={user.displayName || ''} />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" defaultValue={user.email || ''} disabled />
                        <p className="text-xs text-muted-foreground">No puedes cambiar tu correo electrónico.</p>
                    </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Guardar Cambios</Button>
                </CardFooter>
            </Card>

             <Separator className="my-8" />

            <Card>
                <CardHeader>
                    <CardTitle>Seguridad</CardTitle>
                    <CardDescription>
                        Gestiona la seguridad de tu cuenta.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <Button variant="outline">Cambiar contraseña</Button>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}

    