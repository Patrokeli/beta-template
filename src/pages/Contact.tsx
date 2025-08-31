import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+255 123 456 789",
      link: "tel:+255123456789"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+255 123 456 789",
      link: "https://wa.me/255123456789"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@creativestudio.co.tz",
      link: "mailto:hello@creativestudio.co.tz"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Dar es Salaam, Tanzania",
      link: "#"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to bring your vision to life? Let's start a conversation about your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select name="service">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="graphic-design">Graphic Design</SelectItem>
                        <SelectItem value="video-editing">Video Editing</SelectItem>
                        <SelectItem value="branding">Brand Identity</SelectItem>
                        <SelectItem value="web-design">Web Design</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select name="budget">
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000-plus">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={6}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-white shadow-elegant">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-bold">Need Immediate Help?</h3>
                <p className="text-white/90">
                  WhatsApp us for quick responses and real-time project updates.
                </p>
                <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <a href="https://wa.me/255123456789">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary depending on scope and complexity. Most projects take 2-4 weeks from start to finish."
                },
                {
                  question: "Do you work with clients outside Tanzania?",
                  answer: "Yes! We work with clients globally and have experience with remote collaboration and international projects."
                },
                {
                  question: "What's included in your pricing?",
                  answer: "Our pricing includes all design work, revisions (up to 3 rounds), final files, and basic usage rights. Additional services are quoted separately."
                },
                {
                  question: "Do you offer rush services?",
                  answer: "Yes, we offer expedited services for urgent projects. Rush fees may apply depending on the timeline and scope."
                }
              ].map((faq, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;