import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Banner = () => {
  const scrollToCollection = () => {
    const element = document.getElementById("collection");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gold/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-rose-gold/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tagline */}
          <p className="font-elegant text-gold-light text-lg md:text-xl tracking-[0.3em] uppercase opacity-0 animate-fade-up">
            The Art of Fragrance
          </p>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground leading-tight opacity-0 animate-fade-up stagger-1">
            Discover Your
            <br />
            <span className="text-gold-gradient italic">Signature Scent</span>
          </h1>

          {/* Description */}
          <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-2">
            Immerse yourself in a world of exquisite fragrances, 
            where each bottle tells a story of elegance, passion, and timeless beauty.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-up stagger-3">
            <Button 
              onClick={scrollToCollection}
              className="group bg-gold-gradient text-accent-foreground font-body uppercase tracking-widest text-sm px-8 py-6 hover:shadow-gold transition-all duration-300"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToAbout}
              className="font-body uppercase tracking-widest text-sm px-8 py-6 border-primary-foreground/30 text-primary-foreground bg-background/80 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-12 md:gap-20 pt-16 opacity-0 animate-fade-up stagger-4">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gold">50+</p>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60 mt-2">
                Fragrances
              </p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gold">15k</p>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60 mt-2">
                Happy Clients
              </p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gold">25</p>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/60 mt-2">
                Years Legacy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
