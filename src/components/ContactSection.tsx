import { useState } from "react";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We will contact you shortly.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <p className="font-body text-gold text-sm uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight">
              Let's Discuss{" "}
              <span className="font-medium">Your Project</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-12">
              Whether you're planning a renovation or building from scratch, 
              we're here to help you explore the possibilities of micro cement 
              for your space.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-cream flex items-center justify-center group-hover:bg-gold/20 transition-smooth">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Phone</p>
                  <p className="font-display text-lg text-foreground">+1 234 567 890</p>
                </div>
              </a>

              <a
                href="mailto:info@flofensolutions.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-cream flex items-center justify-center group-hover:bg-gold/20 transition-smooth">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Email</p>
                  <p className="font-display text-lg text-foreground">info@flofensolutions.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Location</p>
                  <p className="font-display text-lg text-foreground">Serving the Greater Metro Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cream p-8 lg:p-12">
            <h3 className="font-display text-2xl font-medium text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-body text-sm text-muted-foreground block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-smooth font-body text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="font-body text-sm text-muted-foreground block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-smooth font-body text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="font-body text-sm text-muted-foreground block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-smooth font-body text-foreground"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-body text-sm text-muted-foreground block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-smooth font-body text-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="premium"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
