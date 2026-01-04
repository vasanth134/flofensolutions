import { Home, Bath, ChefHat, Bed, Building2, LayoutGrid } from "lucide-react";

const applications = [
  {
    icon: Home,
    title: "Living Rooms",
    description: "Create a sense of continuity and flow with seamless micro cement floors and accent walls.",
  },
  {
    icon: Bath,
    title: "Bathrooms",
    description: "Waterproof and elegant, perfect for shower walls, vanities, and entire bathroom surfaces.",
  },
  {
    icon: ChefHat,
    title: "Kitchens",
    description: "Durable surfaces for floors, backsplashes, and countertops that withstand daily use.",
  },
  {
    icon: Bed,
    title: "Bedrooms",
    description: "Subtle, sophisticated finishes that create a serene and modern sleeping space.",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Retail, hospitality, and office interiors that demand a premium, professional look.",
  },
  {
    icon: LayoutGrid,
    title: "Feature Walls",
    description: "Statement surfaces that become the focal point of any room.",
  },
];

const ApplicationsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="font-body text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Applications
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
            Where Micro Cement{" "}
            <span className="font-medium">Transforms Spaces</span>
          </h2>
          <p className="font-body text-muted-foreground mt-6 leading-relaxed">
            From intimate residential spaces to expansive commercial interiors, 
            micro cement adapts beautifully to every environment.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div
              key={app.title}
              className="group relative p-8 border border-border hover:border-gold/50 transition-smooth bg-background hover:bg-cream/50"
            >
              <app.icon className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {app.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
