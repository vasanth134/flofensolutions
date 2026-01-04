import { MessageSquare, Palette, Layers, CheckCircle, Home } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description: "We discuss your vision, assess the space, and understand your design preferences.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design Selection",
    description: "Choose from our range of colors and textures, or let us create a custom blend.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Surface Preparation",
    description: "Thorough preparation ensures optimal adhesion and a flawless final result.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Application",
    description: "Expert application of multiple micro cement layers, each carefully crafted.",
  },
  {
    icon: Home,
    number: "05",
    title: "Final Handover",
    description: "Sealing, curing, and a complete walkthrough of your transformed space.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="font-body text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Our Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
            From Vision to{" "}
            <span className="font-medium">Reality</span>
          </h2>
          <p className="font-body text-muted-foreground mt-6 leading-relaxed">
            A transparent, structured approach that ensures every project 
            meets our exacting standards.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Step Marker */}
                <div className="relative z-10 w-20 h-20 mx-auto bg-background border-2 border-gold flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                
                {/* Step Number */}
                <p className="font-display text-gold text-sm tracking-widest mb-3">
                  {step.number}
                </p>
                
                {/* Step Title */}
                <h3 className="font-display text-lg font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
