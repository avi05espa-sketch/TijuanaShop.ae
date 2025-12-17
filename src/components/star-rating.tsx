
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
  size?: number;
}

export function StarRating({ rating, totalStars = 5, className, size = 16 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialStarPercentage = (rating % 1) * 100;
  const emptyStars = totalStars - Math.ceil(rating);

  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="text-yellow-400 fill-yellow-400" style={{ width: size, height: size }} />
      ))}
      {partialStarPercentage > 0 && (
        <div className="relative" style={{ width: size, height: size }}>
          <Star className="text-yellow-400" style={{ width: size, height: size }} />
          <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${partialStarPercentage}%` }}>
            <Star className="text-yellow-400 fill-yellow-400" style={{ width: size, height: size }} />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="text-yellow-400" style={{ width: size, height: size }} />
      ))}
    </div>
  );
}
