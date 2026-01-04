import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-border/50 py-2 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className={cn(
              "font-display text-2xl font-semibold tracking-wide transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white" // Assuming hero has dark bg, need to check if hero is always dark or light.
              // Wait, previous hero text was warm-white. So hero needs white text.
              // But if scrolled, we want readable text. If background is light, text should be dark.
            )}>
              Flofen
            </span>
            <span className={cn(
              "font-display text-2xl font-light transition-colors duration-300",
               isScrolled ? "text-gold" : "text-gold/90"
            )}>
              Solutions
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                  isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className={cn(
                "flex items-center gap-2 text-sm transition-colors duration-300 hover:text-gold",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>+1 234 567 890</span>
            </a>
            <Button 
              variant={isScrolled ? "premium" : "hero-outline"} 
              size="sm" 
              asChild
              className={isScrolled ? "" : "border-white/30 text-white hover:bg-white/10 hover:border-white"}
            >
              <a href="#contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border/50 p-6 lg:hidden animate-fade-in shadow-xl">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-body text-lg text-foreground/80 hover:text-gold transition-colors py-2 border-b border-border/30 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 mt-2 flex flex-col gap-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 234 567 890</span>
                </a>
                <Button variant="premium" className="w-full" asChild>
                  <a href="#contact">Get Quote</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
