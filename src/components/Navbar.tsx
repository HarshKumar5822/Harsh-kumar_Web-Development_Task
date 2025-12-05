import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId?: string) => {
    const scrollAction = () => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollAction, 150);
    } else {
      scrollAction();
    }

    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
              <span className="text-gold-gradient">LUXE</span>
              <span className="font-light">PARFUM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection()}
              className="link-underline font-body text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("collection")} 
              className="link-underline font-body text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors"
            >
              Collection
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="link-underline font-body text-sm uppercase tracking-widest text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative text-foreground hover:text-accent hover:bg-accent/10"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-accent hover:bg-accent/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection()} 
                className="text-left font-body text-sm uppercase tracking-widest text-foreground/80 hover:text-accent transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("collection")} 
                className="text-left font-body text-sm uppercase tracking-widest text-foreground/80 hover:text-accent transition-colors py-2"
              >
                Collection
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-left font-body text-sm uppercase tracking-widest text-foreground/80 hover:text-accent transition-colors py-2"
              >
                About
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
