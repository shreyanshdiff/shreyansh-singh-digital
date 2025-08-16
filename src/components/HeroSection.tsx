import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Mail, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground">
          Shreyansh Singh
        </h1>
        
        <p className="text-xl md:text-2xl font-heading font-medium text-primary mb-4">
          AI/ML Engineer | Data Analyst | Product Enthusiast
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 font-body leading-relaxed">
          I build AI-driven solutions, optimize automation, and design scalable data systems 
          that bridge the gap between complex algorithms and real-world applications.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            asChild
            className="hover-lift"
          >
            <a 
              href="https://linkedin.com/in/shreyansh-singh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            variant="elegant" 
            size="lg"
            asChild
            className="hover-lift"
          >
            <a 
              href="https://github.com/shreyanshsingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="elegant" 
            size="lg"
            asChild
            className="hover-lift"
          >
            <a 
              href="mailto:shreyansh1702@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-primary rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;