import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Palette, Video, Zap, Globe, Film, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import video1 from "@/assets/videos/1.mp4";
import video2 from "@/assets/videos/2.mp4";
import video3 from "@/assets/videos/3.mp4";

const videos = [video1, video2, video3];

const services = [
  {
    title: "Brand Identity",
    description:
      "Crafting your unique story through logo design, color palettes, taglines, and comprehensive brand guidelines.",
    icon: Palette, // Represents design and color
  },
  {
    title: "Digital Presence",
    description:
      "Designing, building, and optimizing your website and social media to attract and engage your ideal customers.",
    icon: Globe, // Represents web and global reach
  },
  {
    title: "Creative Content",
    description:
      "Developing compelling visuals—from social graphics to videos—that stop the scroll and communicate your message.",
    icon: Film, // Represents video and motion
  },
  {
    title: "Strategic Consulting",
    description:
      "Providing data-driven insights on your market, positioning, and growth strategy to ensure long-term success.",
    icon: TrendingUp, // Represents growth and analytics
  },
];

const highlights = [
  "5+ Years of Creative Excellence",
  "200+ Satisfied Clients",
  "Award-Winning Designs",
  "24/7 Customer Support",
];

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  // ⏳ Change video every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentVideo]);

  return (
    <div className="space-y-20">
      {/* Hero Section with Video Slideshow */}
      <section className="relative overflow-hidden h-screen flex items-center">
        <video
          key={currentVideo}
          className="absolute inset-0 object-cover w-full h-full"
          src={videos[currentVideo]}
          autoPlay
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
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
              className="bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-100 border border-white"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

{/* New 4-Column Services Section - Improved Titles & Description */}
<section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
  <div className="text-center space-y-4 mb-16">
    <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
      Your full-service partner for building a powerful, cohesive, and profitable brand.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {services.map((service, index) => (
      <Card
        key={service.title}
        className="relative overflow-hidden border-0 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 animate-scale-in"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <CardContent className="p-8 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-20 h-20 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl shadow-md">
            <service.icon className="h-10 w-10" />
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {service.description}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>

  <div className="text-center mt-12">
    <Button asChild variant="outline" size="lg" className="hover:bg-blue-50">
      <Link to="/services">Explore Our Process</Link>
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
  <Card className="rounded-xl shadow-elegant overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
    <CardContent className="p-12 text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Ready to Transform Your Brand?
      </h2>
      <p className="text-xl text-white/90 max-w-2xl mx-auto">
        Let's work together to create something extraordinary that sets
        you apart from the competition.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-white text-blue-600 hover:bg-white/90"
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
