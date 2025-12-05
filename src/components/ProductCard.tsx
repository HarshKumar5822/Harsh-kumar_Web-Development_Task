import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  index?: number;
}

// Use a stable, high-quality generic perfume image as a visible fallback
const FALLBACK_IMAGE =
  "https://up.yimg.com/ib/th/id/OIP.ugKj0tBVXzFrDVoJjsfqZwHaJR?pid=Api&rs=1&c=1&qlt=95&w=93&h=116";

const ProductCard = ({ id, name, description, price, images, index = 0 }: ProductCardProps) => {
  const [imageSrc, setImageSrc] = useState<string>(images[0] || FALLBACK_IMAGE);

  useEffect(() => {
    setImageSrc(images[0] || FALLBACK_IMAGE);
  }, [images]);

  const handleImageError = () => {
    setImageSrc(FALLBACK_IMAGE);
  };

  return (
    <Link 
      to={`/product/${id}`}
      className="group block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <article className="product-card bg-card rounded-lg overflow-hidden shadow-card">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={handleImageError}
            referrerPolicy="no-referrer"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Quick view button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <Button 
              className="w-full bg-primary-foreground text-primary font-body text-xs uppercase tracking-widest hover:bg-gold hover:text-accent-foreground"
            >
              View Details
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 bg-gold/90 text-accent-foreground text-[10px] uppercase tracking-wider font-body px-3 py-1 rounded-full">
              <Star className="h-3 w-3 fill-current" />
              Bestseller
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          {/* Name */}
          <h3 className="font-display text-xl text-card-foreground group-hover:text-accent transition-colors">
            {name}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="font-elegant text-2xl text-accent">${price.toFixed(2)}</p>
              <p className="font-body text-[10px] uppercase tracking-wider text-muted-foreground">
                Starting from
              </p>
            </div>
            
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
