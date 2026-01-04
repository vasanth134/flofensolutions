import { Button } from "./ui/button";
import heroImage from "@/assets/hero-micro-cement.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <p 
            className="font-body text-gold-muted text-sm uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Premium Micro Cement Finishes
          </p>

          {/* Main Headline */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-warm-white leading-tight mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Seamless Elegance
            <span className="block font-medium mt-2">
              For Modern Living
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="font-body text-warm-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Transform your interiors with continuous, waterproof micro cement surfaces 
            that define understated luxury and timeless sophistication.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Get Free Consultation</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#gallery">View Our Work</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
      >
        <div className="w-6 h-10 border-2 border-warm-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-warm-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
