import { Brush, Camera, Globe, Megaphone, Palette, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Create stunning visual identities that capture your brand's essence and make lasting impressions.",
      features: ["Logo Design", "Business Cards", "Brochures & Flyers", "Package Design"],
      price: "Starting from $299"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production and post-production services for all your marketing needs.",
      features: ["Corporate Videos", "Social Media Content", "Event Coverage", "Motion Graphics"],
      price: "Starting from $499"
    },
    {
      icon: Brush,
      title: "Brand Identity",
      description: "Complete brand development services to establish a cohesive and memorable brand presence.",
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Materials"],
      price: "Starting from $799"
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Modern, responsive websites that convert visitors into customers and grow your business.",
      features: ["Website Design", "E-commerce Sites", "Landing Pages", "UI/UX Design"],
      price: "Starting from $1,299"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic digital campaigns that increase your online presence and drive real results.",
      features: ["Social Media Marketing", "Content Strategy", "Email Marketing", "SEO Optimization"],
      price: "Starting from $699/month"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for products, events, and corporate headshots.",
      features: ["Product Photography", "Event Coverage", "Corporate Headshots", "Lifestyle Shoots"],
      price: "Starting from $399"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive creative solutions to elevate your brand and drive business growth. From concept to completion, we're your creative partners.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary mb-4">{service.price}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven process to ensure every project exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience." },
              { step: "02", title: "Strategy", description: "We develop a custom strategy tailored to your needs." },
              { step: "03", title: "Creation", description: "Our team brings your vision to life with expert craftsmanship." },
              { step: "04", title: "Delivery", description: "We deliver exceptional results and provide ongoing support." }
            ].map((phase, index) => (
              <div key={phase.step} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-primary text-white shadow-elegant">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Contact us for a free consultation.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Start Your Project Today</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Services;