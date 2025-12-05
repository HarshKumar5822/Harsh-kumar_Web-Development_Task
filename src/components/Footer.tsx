import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-3xl font-semibold tracking-wide">
                <span className="text-gold-gradient">LUXE</span>
                <span className="font-light">PARFUM</span>
              </span>
            </Link>
            <p className="font-body text-primary-foreground/70 leading-relaxed max-w-md">
              Since 1998, we have been crafting extraordinary fragrances that capture 
              the essence of elegance and sophistication.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/#collection" className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Collection
              </Link>
              <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                About Us
              </a>
              <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg">Contact</h4>
            <div className="space-y-3">
              <p className="font-body text-sm text-primary-foreground/70">
                123 Luxury Avenue<br />
                New York, NY 10001
              </p>
              <p className="font-body text-sm text-primary-foreground/70">
                contact@luxeparfum.com
              </p>
              <p className="font-body text-sm text-primary-foreground/70">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/50">
            © 2024 LUXE PARFUM. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-primary-foreground/50 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-primary-foreground/50 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
