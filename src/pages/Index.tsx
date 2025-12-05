import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LUXE PARFUM | Luxury Fragrances & Designer Perfumes</title>
        <meta 
          name="description" 
          content="Discover exquisite luxury perfumes at LUXE PARFUM. Shop our collection of signature fragrances crafted with the finest ingredients. Free shipping on orders over $100." 
        />
        <meta name="keywords" content="luxury perfume, designer fragrance, signature scent, parfum, eau de toilette" />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Banner />
          <ProductGrid />
          
          {/* About Section */}
          <section id="about" className="py-24 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 opacity-0 animate-fade-up">
                  <p className="font-elegant text-accent text-lg tracking-[0.3em] uppercase">
                    Our Philosophy
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                    Crafted with <span className="text-gold-gradient italic">Passion</span>
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    At LUXE PARFUM, we believe that fragrance is the ultimate form of self-expression. 
                    Each of our perfumes is a masterpiece, carefully composed by world-renowned perfumers 
                    using only the most precious ingredients sourced from around the globe.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    From the first spritz to the final dry-down, our fragrances tell stories of 
                    elegance, mystery, and timeless beauty. We invite you to discover your 
                    signature scent and let it become an extension of who you are.
                  </p>
                  <div className="flex items-center gap-8 pt-4">
                    <div>
                      <p className="font-display text-3xl text-accent">100%</p>
                      <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                        Authentic
                      </p>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div>
                      <p className="font-display text-3xl text-accent">Cruelty</p>
                      <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                        Free
                      </p>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div>
                      <p className="font-display text-3xl text-accent">Eco</p>
                      <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                        Friendly
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative opacity-0 animate-fade-up stagger-2">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant">
                    <img
                      src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
                      alt="Luxury perfume craftsmanship"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold rounded-lg -z-10" />
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

export default Index;
