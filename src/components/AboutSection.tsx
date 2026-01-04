import textureImage from "@/assets/texture-detail.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="font-body text-gold text-sm uppercase tracking-[0.2em] font-medium">
                The Art of Surfaces
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-light text-foreground mb-8 leading-[1.15]">
              What is <span className="italic text-gold/80">Micro Cement?</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Micro cement is a polymer-modified cement coating that creates a seamless, 
                continuous surface without joints or grout lines. Applied in thin layers, 
                it transforms any space into a vision of modern minimalism.
              </p>
              <p>
                Unlike traditional tiles or stone, micro cement offers a fluid aesthetic 
                that flows uninterrupted across walls, floors, and surfaces. Its waterproof 
                nature makes it ideal for bathrooms, kitchens, and wet areas.
              </p>
              <p className="border-l-2 border-gold pl-6 py-2 italic text-foreground/80">
                At Flofen Solutions, we are specialists dedicated to the craft 
                of micro cement, delivering finishes that stand the test of time.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-12">
              {[
                { label: "Seamless", desc: "No joints or grout lines" },
                { label: "Waterproof", desc: "Ideal for wet areas" },
                { label: "Durable", desc: "Long-lasting finish" },
                { label: "Versatile", desc: "Walls, floors & more" },
              ].map((feature, idx) => (
                <div 
                  key={feature.label} 
                  className="bg-muted/30 p-6 rounded-sm border border-border/50 hover:border-gold/30 transition-colors duration-300"
                >
                  <p className="font-display text-xl font-medium text-foreground mb-2">
                    {feature.label}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <div className="absolute inset-0 border-[1px] border-white/20 z-10 m-4 rounded-sm" />
              <img
                src={textureImage}
                alt="Micro cement texture detail"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
