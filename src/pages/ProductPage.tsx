import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ShoppingBag, Heart, Star } from "lucide-react";
import { useState } from "react";
import { productsApi, reviewsApi, type Review } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import ReviewCard from "@/components/ReviewCard";
import ReviewForm from "@/components/ReviewForm";
import ShareButtons from "@/components/ShareButtons";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<string>("");

  // Fetch product
  const { data: product, isLoading: productLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productsApi.getById(id!),
    enabled: !!id,
  });

  // Fetch reviews
  const { data: reviews, isLoading: reviewsLoading } = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => reviewsApi.getByProductId(id!),
    enabled: !!id,
  });

  // Calculate average rating
  const averageRating = reviews?.length
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
    : 0;

  if (productLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <Skeleton className="aspect-square rounded-lg" />
              <div className="space-y-6">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="font-display text-3xl text-foreground">Product Not Found</h1>
            <p className="font-body text-muted-foreground">
              The product you're looking for doesn't exist.
            </p>
            <Link to="/">
              <Button variant="outline" className="font-body uppercase tracking-widest text-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const productUrl = `${window.location.origin}/product/${product._id}`;

  return (
    <>
      <Helmet>
        <title>{product.name} | LUXE PARFUM</title>
        <meta name="description" content={product.description.slice(0, 160)} />
        <meta property="og:title" content={`${product.name} | LUXE PARFUM`} />
        <meta property="og:description" content={product.description.slice(0, 160)} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:url" content={productUrl} />
        <link rel="canonical" href={productUrl} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          {/* Breadcrumb */}
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Collection
            </Link>
          </div>

          {/* Product Details */}
          <section className="container mx-auto px-4 lg:px-8 pb-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Image Gallery */}
              <div className="opacity-0 animate-fade-up">
                <ImageGallery images={product.images} productName={product.name} />
              </div>

              {/* Product Info */}
              <div className="space-y-8 opacity-0 animate-fade-up stagger-1">
                {/* Name & Rating */}
                <div className="space-y-4">
                  <h1 className="font-display text-4xl md:text-5xl text-foreground">
                    {product.name}
                  </h1>
                  
                  {reviews && reviews.length > 0 && (
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.round(averageRating)
                                ? "text-gold fill-gold"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-body text-sm text-muted-foreground">
                        {averageRating.toFixed(1)} ({reviews.length} review{reviews.length !== 1 ? "s" : ""})
                      </span>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div>
                  <p className="font-elegant text-4xl text-accent">${product.price.toFixed(2)}</p>
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    Free shipping on orders over $100
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h2 className="font-display text-lg text-foreground">About this fragrance</h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Size Selector */}
                <div className="space-y-4">
                  <h3 className="font-body text-sm uppercase tracking-wider text-foreground">
                    Select Size
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg border font-body text-sm sm:text-base transition-all min-w-[80px] sm:min-w-[100px] ${
                          selectedSize === size
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border hover:border-accent/50 text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-gold-gradient text-accent-foreground font-body uppercase tracking-widest text-xs sm:text-sm py-4 sm:py-6 px-4 sm:px-6 hover:shadow-gold transition-all min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
                    disabled={!selectedSize}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="whitespace-nowrap">{selectedSize ? "Add to Cart" : "Select a Size"}</span>
                  </Button>
                  <Button 
                    variant="outline"
                    className="py-4 sm:py-6 px-4 sm:px-6 border-border hover:border-accent hover:bg-accent/10 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto sm:flex-shrink-0"
                  >
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>

                {/* Share */}
                <div className="pt-4 border-t border-border">
                  <ShareButtons productName={product.name} productUrl={productUrl} />
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="bg-secondary py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl text-foreground mb-8">
                  Customer Reviews
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Review Form */}
                  <div className="opacity-0 animate-fade-up">
                    <ReviewForm productId={product._id} />
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-4 opacity-0 animate-fade-up stagger-1">
                    {reviewsLoading ? (
                      <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                          <Skeleton key={i} className="h-32 rounded-lg" />
                        ))}
                      </div>
                    ) : reviews && reviews.length > 0 ? (
                      reviews.map((review) => (
                        <ReviewCard
                          key={review._id}
                          username={review.username}
                          rating={review.rating}
                          comment={review.comment}
                          created_at={review.createdAt || review.created_at || new Date().toISOString()}
                        />
                      ))
                    ) : (
                      <div className="bg-card rounded-lg p-8 text-center border border-border/50">
                        <p className="font-body text-muted-foreground">
                          No reviews yet. Be the first to share your experience!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
