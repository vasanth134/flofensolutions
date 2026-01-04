import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-gold text-sm uppercase tracking-[0.2em] mb-6">
            Start Your Project
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-warm-white leading-tight mb-6">
            Ready to Transform{" "}
            <span className="font-medium block mt-2">Your Space?</span>
          </h2>
          <p className="font-body text-warm-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Let us help you create interiors that inspire. Schedule a free consultation 
            and discover what micro cement can do for your home or project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button variant="gold" size="xl" asChild>
              <a href="#contact">Book a Consultation</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+1234567890">Call Us Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
