import { useState } from "react";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    src: galleryLiving,
    alt: "Modern Living Space",
    category: "Living Room",
    description: "Seamless floor-to-wall application"
  },
  {
    src: galleryBathroom,
    alt: "Spa-like Sanctuary",
    category: "Bathroom",
    description: "Waterproof elegance in limestone finish"
  },
  {
    src: galleryKitchen,
    alt: "Contemporary Kitchen",
    category: "Kitchen",
    description: "High-durability countertop surfaces"
  },
  {
    src: galleryBedroom,
    alt: "Serene Retreat",
    category: "Bedroom",
    description: "Textured accent walls for depth"
  },
];

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-body text-gold text-sm uppercase tracking-[0.2em] mb-4 block">
              Selected Works
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              Surfaces That <span className="italic font-medium text-gold/80">Inspire</span>
            </h2>
          </div>
          <p className="font-body text-muted-foreground text-lg max-w-md leading-relaxed pb-2">
            A curated selection of our recent projects showcasing the versatility 
            and timeless elegance of micro cement finishes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative group overflow-hidden cursor-pointer bg-muted aspect-[4/3]",
                // Stagger effect for visual interest
                 index % 2 === 1 ? "md:mt-12" : "" 
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div 
                className={cn(
                  "absolute inset-0 bg-black/40 transition-opacity duration-500 flex flex-col justify-end p-8 lg:p-10",
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                )}
              >
                 <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex justify-between items-end border-b border-white/30 pb-4 mb-4">
                      <div>
                        <p className="font-body text-gold text-xs uppercase tracking-[0.2em] mb-2">
                          {image.category}
                        </p>
                        <h3 className="font-display text-2xl lg:text-3xl text-white font-medium">
                          {image.alt}
                        </h3>
                      </div>
                      <ArrowUpRight className="text-white w-6 h-6 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                    </div>
                    <p className="font-body text-white/80 text-sm">
                      {image.description}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
