
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFirebase, useUser } from '@/firebase';
import { getUser } from '@/lib/data';
import { Loader2 } from 'lucide-react';
import type { User } from '@/lib/types';

// Hardcoded Admin UID for development purposes.
// In a production app, this should be managed via custom claims or a secure database role system.
const ADMIN_UID = "s0O2t5yTLYh4VnSgxjS13iK1xay1";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { firestore } = useFirebase();
  const { user, loading: authLoading } = useUser();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthorization = async () => {
      if (authLoading) {
        return;
      }

      if (!user) {
        router.replace('/auth');
        return;
      }

      // Option 1: Hardcoded check (simple, for dev)
      if (user.uid === ADMIN_UID) {
        setIsAuthorized(true);
        setLoading(false);
        return;
      }
      
      // Option 2: Firestore role check (more flexible)
      if (firestore) {
        const userDoc = await getUser(firestore, user.uid);
        if (userDoc && userDoc.role === 'admin') {
          setIsAuthorized(true);
        } else {
          router.replace('/');
        }
      } else {
         router.replace('/');
      }
      setLoading(false);
    };

    checkAuthorization();
  }, [user, authLoading, firestore, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-2">Verificando autorización...</p>
      </div>
    );
  }

  if (!isAuthorized) {
    // This part should ideally not be reached due to the redirect, but it's a good fallback.
    return (
        <div className="flex h-screen items-center justify-center">
            <p>No estás autorizado para ver esta página.</p>
        </div>
    );
  }

  return <>{children}</>;
}
