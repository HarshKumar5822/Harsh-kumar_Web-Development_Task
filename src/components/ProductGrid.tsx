import { useQuery } from "@tanstack/react-query";
import { productsApi, type Product } from "@/lib/api";
import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

const ProductGrid = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: productsApi.getAll,
  });

  return (
    <section id="collection" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="font-elegant text-accent text-lg tracking-[0.3em] uppercase">
            Our Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Signature <span className="text-gold-gradient italic">Fragrances</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Each scent is a journey through time and emotion, crafted with the finest ingredients 
            from around the world.
          </p>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Skeleton className="w-full h-80 rounded-lg" />
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {isError && !isLoading && (
          <div className="text-center">
            <p className="font-body text-muted-foreground">
              We couldn&apos;t load our collection right now. Please try again shortly.
            </p>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && !isError && products && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product._id}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  id={product._id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  images={product.images}
                  index={index}
                />
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isError && (!products || products.length === 0) && (
          <div className="text-center">
            <p className="font-body text-muted-foreground">
              No products found. Please seed the database to see the collection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
