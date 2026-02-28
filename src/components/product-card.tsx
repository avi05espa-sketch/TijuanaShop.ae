import { Product } from "@/lib/data";

export default function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer rounded-xl border bg-card p-2 shadow-sm hover:shadow-md transition-all">
      <img src={product.images[0]} alt={product.title} className="aspect-square rounded-lg object-cover mb-2" />
      <p className="font-bold text-sm">${product.price} MXN</p>
      <h3 className="text-xs text-muted-foreground truncate">{product.title}</h3>
    </div>
  );
}
