import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const placeholder = PlaceHolderImages.find(p => p.imageUrl === product.images[0]);
    const imageHint = placeholder?.imageHint || 'product photo';

  return (
    <Link href={`/product/${product.id}`} className="group">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-xl">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={imageHint}
            />
        </div>
        <CardContent className="p-4 flex-grow flex flex-col">
          <h3 className="font-semibold text-lg leading-tight truncate font-headline group-hover:text-primary">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{product.location}</p>
          <div className="flex-grow" />
          <p className="font-bold text-xl mt-2">${product.price.toLocaleString('es-MX')}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
