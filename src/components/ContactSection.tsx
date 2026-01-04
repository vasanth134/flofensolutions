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
    <section id="contact" className="py-24 lg:py-32 bg-background relative">
       {/* Decorative noise/texture overlay could go here */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
               <div className="h-[1px] w-12 bg-gold" />
               <span className="font-body text-gold text-sm uppercase tracking-[0.2em] font-medium">
                 Get in Touch
               </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              Let's Discuss{" "}
              <span className="italic text-gold/80 block mt-2">Your Project</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
              Whether you're planning a renovation or building from scratch, 
              we're here to help you explore the possibilities of micro cement 
              for your space.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-300 rounded-sm">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                  <p className="font-display text-xl text-foreground group-hover:text-gold transition-colors">+1 234 567 890</p>
                </div>
              </a>

              <a
                href="mailto:info@flofensolutions.com"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-300 rounded-sm">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="font-display text-xl text-foreground group-hover:text-gold transition-colors">info@flofensolutions.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 border border-border flex items-center justify-center rounded-sm">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                  <p className="font-display text-xl text-foreground">Serving the Greater Metro Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 lg:p-12 shadow-soft rounded-sm border border-border/50">
            <h3 className="font-display text-3xl font-light text-foreground mb-8">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-2 group-focus-within:text-gold transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-gold focus:outline-none transition-colors font-body text-foreground placeholder:text-muted-foreground/30 rounded-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="email" className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-2 group-focus-within:text-gold transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-gold focus:outline-none transition-colors font-body text-foreground placeholder:text-muted-foreground/30 rounded-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-2 group-focus-within:text-gold transition-colors">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-gold focus:outline-none transition-colors font-body text-foreground placeholder:text-muted-foreground/30 rounded-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="font-body text-xs uppercase tracking-widest text-muted-foreground block mb-2 group-focus-within:text-gold transition-colors">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-gold focus:outline-none transition-colors font-body text-foreground resize-none placeholder:text-muted-foreground/30 rounded-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <div className="pt-4">
                <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full md:w-auto min-w-[200px]"
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
