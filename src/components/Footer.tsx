import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">CreativeStudio</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your partner in creative excellence. We bring your brand to life through innovative design and strategic thinking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Testimonials", href: "/testimonials" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Graphic Design",
                "Video Editing",
                "Brand Identity",
                "Web Design",
                "Digital Marketing"
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">hello@creativestudio.co.tz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CreativeStudio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;