import { MapPin } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: number;
    image_url: string | null;
    pickup_point: string;
  };
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex w-full flex-col overflow-hidden rounded-2xl bg-card text-left shadow-sm transition-all hover:shadow-md border border-border"
    >
      <div className="aspect-square w-full overflow-hidden bg-muted">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground text-xs italic">
            Sin foto
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <span className="text-lg font-bold text-foreground">
          ${product.price.toLocaleString('es-MX')}
        </span>
        <span className="line-clamp-2 text-sm text-foreground font-medium leading-tight">
          {product.title}
        </span>
        <div className="mt-auto flex items-center gap-1 pt-2 text-muted-foreground">
          <MapPin size={12} className="text-primary" />
          <span className="line-clamp-1 text-[10px] uppercase font-bold tracking-tighter">
            {product.pickup_point}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
