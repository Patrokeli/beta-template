import { Award, Heart, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every project we deliver."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every detail, no matter how small."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your success is our success. We work as partners, not just vendors."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We stay ahead of trends to bring you cutting-edge solutions."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      description: "10+ years in brand design with a passion for storytelling through visuals."
    },
    {
      name: "Mike Chen",
      role: "Video Production Lead",
      description: "Award-winning filmmaker specializing in commercial and corporate content."
    },
    {
      name: "Amina Hassan",
      role: "Digital Marketing Strategist",
      description: "Data-driven marketer helping brands connect with their audiences."
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">About CreativeStudio</h1>
            <p className="text-xl text-muted-foreground">
              We're a passionate team of creators, strategists, and innovators dedicated to helping businesses tell their stories through exceptional design and digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2019 in the heart of Dar es Salaam, CreativeStudio began as a small team with a big vision: to help local and international businesses communicate their values through powerful visual storytelling.
              </p>
              <p>
                What started as a graphic design studio has evolved into a full-service creative agency. We've had the privilege of working with over 200 clients, from startups to established corporations, helping them build memorable brands and digital experiences.
              </p>
              <p>
                Today, we're proud to be recognized as one of Tanzania's leading creative agencies, but we haven't forgotten our roots. We still approach every project with the same passion and attention to detail that defined us from day one.
              </p>
            </div>
          </div>
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented individuals who bring creativity and expertise to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              To empower businesses across Tanzania and beyond with creative solutions that not only look amazing but drive real results. We believe that great design has the power to transform brands, connect communities, and create lasting impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;