
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, MessageSquare, ShieldAlert } from "lucide-react";
import Link from 'next/link';

const stats = [
    { title: "Usuarios Registrados", value: "1,250", icon: Users, change: "+12%", changeType: "increase" },
    { title: "Publicaciones Activas", value: "8,420", icon: Package, change: "+5%", changeType: "increase" },
    { title: "Mensajes Totales", value: "11,203", icon: MessageSquare, change: "+8%", changeType: "increase" },
    { title: "Reportes Pendientes", value: "15", icon: ShieldAlert, change: "+3", changeType: "decrease" },
]

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-900">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-6">
            <h1 className="text-xl font-semibold">Panel de Administración</h1>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Volver a la tienda
            </Link>
        </header>
        <main className="flex-1 p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                <span className={stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}>{stat.change}</span>
                                {" "}desde el mes pasado
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Actividad Reciente</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">Próximamente: una fuente de actividad reciente, como nuevos usuarios y publicaciones.</p>
                    </CardContent>
                </Card>
            </div>
        </main>
    </div>
  );
}
