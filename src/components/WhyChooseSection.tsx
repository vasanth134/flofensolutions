import { Award, Palette, Eye, Wrench, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Master applicators with years of specialized experience in micro cement finishes.",
  },
  {
    icon: Palette,
    title: "Premium Materials",
    description: "We source only the finest European micro cement systems for superior results.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Every surface is meticulously prepared and finished to perfection.",
  },
  {
    icon: Wrench,
    title: "Tailored Solutions",
    description: "Custom color matching and finish options to complement your design vision.",
  },
  {
    icon: Shield,
    title: "Long-lasting Performance",
    description: "Durable, wear-resistant surfaces backed by our quality guarantee.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="font-body text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
            Craftsmanship That{" "}
            <span className="font-medium">Speaks for Itself</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background p-8 lg:p-10 shadow-soft hover:shadow-elegant transition-smooth"
            >
              <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-smooth">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
