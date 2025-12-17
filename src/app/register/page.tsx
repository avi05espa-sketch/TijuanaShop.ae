"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { useToast } from "@/hooks/use-toast";
import { useFirebase } from "@/firebase";
import { FirebaseError } from "firebase/app";

export default function RegisterPage() {
  const { app } = useFirebase();
  const auth = getAuth(app);
  const db = getFirestore(app);
  const router = useRouter();
  const { toast } = useToast();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast({
        variant: "destructive",
        title: "Contraseña inválida",
        description: "La contraseña debe tener al menos 6 caracteres.",
      });
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: fullName,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: fullName,
        email: user.email,
        profilePicture: user.photoURL || `https://picsum.photos/seed/${user.uid}/400/400`,
        createdAt: serverTimestamp(),
        location: "Tijuana",
      });

      toast({
        title: "¡Cuenta creada!",
        description: "Hemos creado tu cuenta exitosamente.",
      });
      router.push("/");

    } catch (error) {
      console.error(error);
      let description = "Ocurrió un error inesperado.";
       if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          description = "Este correo electrónico ya está en uso.";
        }
      }
      toast({
        variant: "destructive",
        title: "Error en el registro",
        description,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="space-y-4">
            <div className="flex justify-center">
             <Logo />
            </div>
          <CardTitle className="text-2xl text-center">Crear una cuenta</CardTitle>
          <CardDescription className="text-center">
            Ingresa tus datos para registrarte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name">Nombre completo</Label>
              <Input
                id="full-name"
                placeholder="Juan Perez"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creando cuenta..." : "Crear cuenta"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="underline">
              Iniciar sesión
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
