
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from './ui/badge';
import { Eye, Heart } from 'lucide-react';

interface SellerProductCardProps {
  product: Product;
}

export function SellerProductCard({ product }: SellerProductCardProps) {
    const placeholder = PlaceHolderImages.find(p => p.imageUrl === product.images[0]);
    const imageHint = placeholder?.imageHint || 'product photo';

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-xl border rounded-lg">
        <Link href={`/product/${product.id}`} className="group">
            <div className="relative w-full aspect-square overflow-hidden">
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={imageHint}
                />
                <Badge variant={product.condition === 'Nuevo' ? 'default' : 'secondary'} className="absolute top-2 right-2">
                    {product.condition}
                </Badge>
            </div>
            <CardContent className="p-3">
            <h3 className="font-semibold text-base leading-tight truncate group-hover:text-primary">
                {product.title}
            </h3>
            <p className="font-bold text-lg mt-1">${product.price.toLocaleString('es-MX')}</p>
            </CardContent>
        </Link>
        <CardFooter className="p-3 pt-0 border-t mt-auto">
            <div className="flex items-center justify-between text-xs text-muted-foreground w-full">
                <div className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4" />
                    <span>{product.viewCount || 0}</span>
                </div>
                 <div className="flex items-center gap-1.5">
                    <Heart className="h-4 w-4" />
                    <span>{product.favoritedBy?.length || 0}</span>
                </div>
            </div>
        </CardFooter>
    </Card>
  );
}
