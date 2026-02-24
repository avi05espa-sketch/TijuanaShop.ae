'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/lib/auth-store';

interface FavoriteProduct {
  id: string;
  product_id: string;
  products: {
    id: string;
    title: string;
    price: number;
    image_urls: string[];
  } | null;
}

export default function FavoritosPage() {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const userLoading = useAuthStore((state) => state.loading);

  useEffect(() => {
    if (!userLoading && !user) {
      router.push('/login');
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('favorites')
          .select('id, product_id, products(id, title, price, image_urls)')
          .eq('user_id', user.id);

        if (error) throw error;
        setFavorites((data as any) || []);
      } catch (err) {
        console.error('Error fetching favorites:', err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchFavorites();
    }
  }, [user]);

  const handleRemoveFavorite = async (favoriteId: string) => {
    try {
      await supabase.from('favorites').delete().eq('id', favoriteId);
      setFavorites(favorites.filter((f) => f.id !== favoriteId));
    } catch (err) {
      console.error('Error removing favorite:', err);
    }
  };

  if (userLoading || !user || loading) {
    return null;
  }

  return (
    <main style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#FFF', padding: '20px', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h2 style={{ fontSize: '22px', color: '#FF8C00', fontWeight: 'bold', margin: 0 }}>Mis Favoritos</h2>
        <span style={{ fontSize: '20px' }}>⭐</span>
      </header>

      {favorites.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {favorites.map((fav) => (
            <Link key={fav.product_id} href={`/producto/${fav.product_id}`}>
              <div
                style={{
                  backgroundColor: '#1E1E1E',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #333',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveFavorite(fav.id);
                  }}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    color: '#FF8C00',
                    cursor: 'pointer',
                    fontSize: '18px',
                    zIndex: 10
                  }}
                >
                  ★
                </button>

                <div
                  style={{
                    width: '100%',
                    height: '120px',
                    backgroundColor: '#0D0D0D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {fav.products?.image_urls && fav.products.image_urls.length > 0 ? (
                    <img
                      src={fav.products.image_urls[0]}
                      alt={fav.products.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <span style={{ fontSize: '30px' }}>📷</span>
                  )}
                </div>

                <div style={{ padding: '10px' }}>
                  <h3 style={{ fontSize: '14px', color: '#FFF', margin: '0 0 5px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {fav.products?.title || 'Producto'}
                  </h3>
                  <span style={{ fontSize: '15px', color: '#FF8C00', fontWeight: 'bold' }}>
                    ${fav.products?.price ? fav.products.price.toFixed(2) : '0.00'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>
          <p>Aún no tienes productos guardados.</p>
        </div>
      )}
    </main>
  );
}
