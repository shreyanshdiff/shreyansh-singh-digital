import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-heading font-semibold mb-8 text-foreground">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-medium text-foreground">Email</p>
                  <a 
                    href="mailto:shreyansh1702@gmail.com" 
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    shreyansh1702@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-medium text-foreground">Phone</p>
                  <a 
                    href="tel:+918830339404" 
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8530539404
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-medium text-foreground">Location</p>
                  <p className="font-body text-muted-foreground">Vellore, India</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-heading font-medium text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/shreyansh-singh-940691234/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/shreyanshdiff" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Send a Message
              </h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-heading font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="font-heading font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="font-heading font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={5}
                    className="mt-2"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
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
