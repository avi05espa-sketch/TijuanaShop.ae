
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function AdminSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Ajustes Generales</h1>

        <Card>
            <CardHeader>
                <CardTitle>Notificaciones por Correo</CardTitle>
                <CardDescription>
                    Gestiona las notificaciones automáticas por correo electrónico que se envían a los administradores.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-4 rounded-md border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="new-user-notification" className="text-base">Nuevos Usuarios</Label>
                        <p className="text-sm text-muted-foreground">
                            Enviar un correo cuando un nuevo usuario se registre en la plataforma.
                        </p>
                    </div>
                    <Switch
                        id="new-user-notification"
                        aria-label="Notificación de nuevo usuario"
                        defaultChecked
                    />
                </div>
                 <div className="flex items-center justify-between space-x-4 rounded-md border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="new-product-notification" className="text-base">Nuevas Publicaciones</Label>
                        <p className="text-sm text-muted-foreground">
                            Enviar un correo por cada nueva publicación de un artículo.
                        </p>
                    </div>
                    <Switch
                        id="new-product-notification"
                        aria-label="Notificación de nueva publicación"
                    />
                </div>
                 <div className="flex items-center justify-between space-x-4 rounded-md border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="report-notification" className="text-base">Artículos Reportados</Label>
                        <p className="text-sm text-muted-foreground">
                           Notificar inmediatamente cuando un usuario reporte un artículo o un comportamiento.
                        </p>
                    </div>
                    <Switch
                        id="report-notification"
                        aria-label="Notificación de artículo reportado"
                        defaultChecked
                    />
                </div>
                 <Separator />
                 <div className="flex items-center justify-between space-x-4 rounded-md border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="summary-notification" className="text-base">Resumen Semanal</Label>
                        <p className="text-sm text-muted-foreground">
                           Recibir un resumen semanal con las estadísticas clave de la aplicación.
                        </p>
                    </div>
                    <Switch
                        id="summary-notification"
                        aria-label="Notificación de resumen semanal"
                        defaultChecked
                    />
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
                <Button>Guardar Cambios</Button>
            </CardFooter>
        </Card>
    </div>
  );
}
