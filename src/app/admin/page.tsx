
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, MessageSquare, ShieldAlert } from "lucide-react";
import Link from 'next/link';

const stats = [
    { title: "Usuarios Registrados", value: "1,250", icon: Users, change: "+12%", changeType: "increase", iconColor: "text-chart-1" },
    { title: "Publicaciones Activas", value: "8,420", icon: Package, change: "+5%", changeType: "increase", iconColor: "text-chart-2" },
    { title: "Mensajes Totales", value: "11,203", icon: MessageSquare, change: "+8%", changeType: "increase", iconColor: "text-chart-3" },
    { title: "Reportes Pendientes", value: "15", icon: ShieldAlert, change: "+3", changeType: "decrease", iconColor: "text-chart-4" },
]

export default function AdminDashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
              <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <stat.icon className={`h-4 w-4 text-muted-foreground ${stat.iconColor}`} />
                  </CardHeader>
                  <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">
                          <span className={stat.changeType === 'increase' ? 'text-primary' : 'text-destructive'}>{stat.change}</span>
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
    </>
  );
}
