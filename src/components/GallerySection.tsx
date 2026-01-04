import { useState } from "react";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";

const galleryImages = [
  {
    src: galleryLiving,
    alt: "Modern living room with micro cement floors and walls",
    category: "Living Room",
  },
  {
    src: galleryBathroom,
    alt: "Luxury bathroom with seamless micro cement finish",
    category: "Bathroom",
  },
  {
    src: galleryKitchen,
    alt: "Contemporary kitchen featuring micro cement surfaces",
    category: "Kitchen",
  },
  {
    src: galleryBedroom,
    alt: "Elegant bedroom with micro cement accent wall",
    category: "Bedroom",
  },
];

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="font-body text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Our Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-warm-white leading-tight">
            Surfaces That{" "}
            <span className="font-medium">Inspire</span>
          </h2>
          <p className="font-body text-warm-white/60 mt-6 leading-relaxed">
            A curated selection of our recent projects showcasing the versatility 
            and elegance of micro cement finishes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className={`absolute inset-0 bg-charcoal/60 flex items-end justify-start p-8 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div>
                  <p className="font-body text-gold text-sm uppercase tracking-[0.15em] mb-2">
                    {image.category}
                  </p>
                  <p className="font-display text-xl text-warm-white">
                    {image.alt}
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
