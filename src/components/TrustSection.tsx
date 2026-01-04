import { Users, Ruler, Clock } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <p className="font-body text-gold text-sm uppercase tracking-[0.2em] mb-4">
              Trust & Excellence
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight">
              Built on{" "}
              <span className="font-medium">Reputation</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                Flofen Solutions has earned the trust of homeowners, architects, 
                and interior designers across the region. Our commitment to quality 
                and attention to detail sets us apart in the industry.
              </p>
              <p>
                We collaborate closely with design professionals to ensure our finishes 
                integrate seamlessly with broader design concepts. Every project is an 
                opportunity to demonstrate our dedication to excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <p className="font-display text-3xl font-medium text-foreground">150+</p>
                <p className="font-body text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Ruler className="w-5 h-5 text-gold" />
                </div>
                <p className="font-display text-3xl font-medium text-foreground">8,000+</p>
                <p className="font-body text-sm text-muted-foreground">Square Meters</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <p className="font-display text-3xl font-medium text-foreground">10+</p>
                <p className="font-body text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-cream p-10 lg:p-12 relative">
            <div className="absolute top-8 left-8 text-gold/20 font-display text-8xl leading-none">
              "
            </div>
            <div className="relative z-10">
              <p className="font-display text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                Flofen Solutions transformed our entire ground floor with micro cement. 
                The result exceeded our expectations – a seamless, elegant surface that 
                has become the talking point of our home.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone rounded-full flex items-center justify-center">
                  <span className="font-display text-lg font-medium text-foreground">JM</span>
                </div>
                <div>
                  <p className="font-display font-medium text-foreground">James Mitchell</p>
                  <p className="font-body text-sm text-muted-foreground">Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
