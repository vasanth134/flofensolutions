import { Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-stone/20">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="font-display text-2xl font-semibold tracking-wide text-warm-white">
                Flofen
              </span>
              <span className="font-display text-2xl font-light text-gold">
                Solutions
              </span>
            </a>
            <p className="font-body text-warm-white/60 leading-relaxed max-w-md mb-8">
              Specialists in micro cement wall and floor finishes. 
              Creating seamless, elegant surfaces that define modern interiors.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-warm-white/20 flex items-center justify-center text-warm-white/60 hover:text-gold hover:border-gold transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-warm-white/20 flex items-center justify-center text-warm-white/60 hover:text-gold hover:border-gold transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-warm-white/20 flex items-center justify-center text-warm-white/60 hover:text-gold hover:border-gold transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium text-warm-white mb-6">
              Quick Links
            </h4>
            <nav className="space-y-4">
              {[
                { href: "#about", label: "About Micro Cement" },
                { href: "#services", label: "Why Choose Us" },
                { href: "#gallery", label: "Our Gallery" },
                { href: "#process", label: "Our Process" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-body text-warm-white/60 hover:text-gold transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium text-warm-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 font-body text-warm-white/60 hover:text-gold transition-smooth"
              >
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </a>
              <a
                href="mailto:info@flofensolutions.com"
                className="flex items-center gap-3 font-body text-warm-white/60 hover:text-gold transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span>info@flofensolutions.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-warm-white/40">
            © {new Date().getFullYear()} Flofen Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-sm text-warm-white/40 hover:text-gold transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-warm-white/40 hover:text-gold transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
