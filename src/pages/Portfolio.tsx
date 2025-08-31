import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Graphic Design", "Video Editing", "Branding", "Web Design"];

  const projects = [
    {
      id: 1,
      title: "TechStart Logo Design",
      category: "Graphic Design",
      description: "Modern logo design for a technology startup",
      tags: ["Logo", "Branding", "Tech"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Restaurant Branding Package",
      category: "Branding",
      description: "Complete brand identity for a local restaurant chain",
      tags: ["Branding", "Restaurant", "Identity"],
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Product Launch Video",
      category: "Video Editing",
      description: "Promotional video for a new product launch",
      tags: ["Video", "Product", "Marketing"],
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "E-commerce Website",
      category: "Web Design",
      description: "Modern e-commerce platform with custom features",
      tags: ["Website", "E-commerce", "UI/UX"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Annual Report Design",
      category: "Graphic Design",
      description: "Corporate annual report with infographics",
      tags: ["Report", "Corporate", "Infographics"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Healthcare Brand Identity",
      category: "Branding",
      description: "Brand development for a healthcare provider",
      tags: ["Healthcare", "Branding", "Identity"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our latest work and see how we've helped businesses transform their brand presence and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">View Project</Button>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Case Study</h2>
              <p className="text-xl text-muted-foreground">
                Deep dive into how we transformed a local business's brand identity.
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Savanna Coffee Rebrand</h3>
                    <p className="text-muted-foreground">
                      We helped Savanna Coffee, a local coffee shop chain, completely transform their brand identity to better reflect their premium quality and African heritage.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">
                          Outdated branding that didn't reflect the quality of their products or connect with their target audience.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">
                          Complete brand overhaul including new logo, packaging design, and marketing materials with African-inspired elements.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Results</h4>
                        <p className="text-sm text-muted-foreground">
                          40% increase in brand recognition and 25% boost in sales within 6 months of launch.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-card rounded-xl p-8 text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop" 
                      alt="Savanna Coffee Case Study"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">+40%</div>
                        <div className="text-sm text-muted-foreground">Brand Recognition</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">+25%</div>
                        <div className="text-sm text-muted-foreground">Sales Increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-primary text-white shadow-elegant">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Like What You See?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's create something amazing for your brand. Every great project starts with a conversation.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <a href="/contact">Start Your Project</a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Portfolio;