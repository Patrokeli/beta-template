import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Palette, Video, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import video1 from "@/assets/videos/1.mp4";
import video2 from "@/assets/videos/2.mp4";
import video3 from "@/assets/videos/3.mp4";

const videos = [video1, video2, video3];

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // ⏳ Change video every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000); // 5000ms = 5s

    return () => clearTimeout(timer);
  }, [currentVideo]);

  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "Logo design, branding, and visual identity solutions that make your brand stand out.",
    },
    {
      icon: Video,
      title: "Video Editing",
      description:
        "Professional video production and editing for marketing, events, and social media.",
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description:
        "Strategic digital campaigns that drive engagement and grow your business.",
    },
  ];

  const highlights = [
    "5+ Years of Creative Excellence",
    "200+ Satisfied Clients",
    "Award-Winning Designs",
    "24/7 Customer Support",
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section with Video Slideshow */}
      <section className="relative overflow-hidden h-screen flex items-center">
        {/* Background Slideshow Video */}
        <video
          key={currentVideo}
          className="absolute inset-0 object-cover w-full h-full"
          src={videos[currentVideo]}
          autoPlay
          muted
          playsInline
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Style{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-600">
              Vision with us
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Beta 360 helps brands stand out with bold design and digital
            experiences that inspire and engage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:border-blue-400 hover:text-blue-400"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to creation, we offer comprehensive creative services
            to help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                <p className="font-semibold">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-primary text-white shadow-elegant">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's work together to create something extraordinary that sets
              you apart from the competition.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
