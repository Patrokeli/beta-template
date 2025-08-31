import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              
              <div>
                <span className="text-xl font-bold text-foreground">Beta 360</span>
                <p className="text-xs text-muted-foreground mt-1">Strategic Branding Agency</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We transform visions into powerful brands through strategic design, digital excellence, 
              and compelling storytelling that drives growth and connection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Brand Identity Design",
                "Web Design & Development",
                "Social Media Management",
                "SEO Optimization",
                "Creative Content Production",
                "Strategic Consulting",
                "Marketing Positioning",
                "Growth Strategy"
              ].map((service) => (
                <li key={service} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  <span className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-full mt-0.5">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="text-muted-foreground text-sm block">+255 677 988 582</span>
                  <span className="text-xs text-muted-foreground/70">Mon-Fri, 8AM-6PM</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-full mt-0.5">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="text-muted-foreground text-sm block">info@beta360.com</span>
                  <span className="text-xs text-muted-foreground/70">We reply within 24 hours</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-full mt-0.5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="text-muted-foreground text-sm block">Dar es Salaam, Tanzania</span>
                  <span className="text-xs text-muted-foreground/70">Available worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Beta 360. All rights reserved. | Crafting brands that matter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;