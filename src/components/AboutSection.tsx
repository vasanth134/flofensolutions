import textureImage from "@/assets/texture-detail.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="font-body text-gold text-sm uppercase tracking-[0.2em] mb-4">
              The Art of Surfaces
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight">
              What is{" "}
              <span className="font-medium">Micro Cement?</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
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
              <p>
                At Flofen Solutions, we are not general contractors. We are specialists 
                dedicated to the craft of micro cement, delivering finishes that stand 
                the test of time while elevating your interior design.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { label: "Seamless", desc: "No joints or grout lines" },
                { label: "Waterproof", desc: "Ideal for wet areas" },
                { label: "Durable", desc: "Long-lasting finish" },
                { label: "Versatile", desc: "Walls, floors & more" },
              ].map((feature) => (
                <div key={feature.label} className="border-l-2 border-gold pl-4">
                  <p className="font-display text-lg font-medium text-foreground">
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
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src={textureImage}
                alt="Micro cement texture detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/30 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
