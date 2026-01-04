import { Button } from "./ui/button";
import heroImage from "@/assets/hero-micro-cement.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-scale-in transition-transform duration-[2s]"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Tagline */}
          <div 
            className="flex items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-[1px] w-12 bg-gold/60" />
            <p className="font-body text-gold/90 text-sm md:text-base uppercase tracking-[0.3em] font-medium">
              Premium Micro Cement Finishes
            </p>
            <div className="h-[1px] w-12 bg-gold/60" />
          </div>

          {/* Main Headline */}
          <h1 
            className="font-display text-5xl md:text-6xl lg:text-8xl font-light text-white leading-[1.1] opacity-0 animate-fade-up tracking-tight"
            style={{ animationDelay: "0.4s" }}
          >
            Seamless Elegance
            <span className="block font-medium italic text-white/90 mt-2 transform -translate-y-2">
              For Modern Living
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="font-body text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Transform your interiors with continuous, waterproof surface design 
            that defines understated luxury and timeless sophistication.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="hero" size="xl" asChild className="min-w-[200px]">
              <a href="#contact">Get Consultation</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild className="min-w-[200px]">
              <a href="#gallery">View Portfolio</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in flex flex-col items-center gap-2"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-gold/50 to-white/0" />
      </div>
    </section>
  );
};

export default HeroSection;
