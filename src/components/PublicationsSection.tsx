import { ExternalLink, Calendar, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Applications of Machine Learning in Detecting Unethical Sources of Raw Materials in Supply Chains in the Cosmetic Industry",
    journal: "IEEE",
    date: "15 Aug 2024", 
    authors: ["Shreyansh Singh", "Co-authors"],
    abstract: "This research explores the application of machine learning techniques to identify and detect unethical sourcing practices in cosmetic industry supply chains, providing a comprehensive framework for ethical supply chain management.",
    url: "#"
  }
];

const PublicationsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Publications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          {publications.map((publication, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover-glow animate-slide-up"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-sm font-heading font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {publication.journal}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4 leading-tight">
                    {publication.title}
                  </h3>
                  
                  <div className="flex items-center gap-6 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-body text-sm">{publication.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="font-body text-sm">{publication.authors.join(", ")}</span>
                    </div>
                  </div>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {publication.abstract}
                  </p>
                  
                  <Button variant="outline" asChild>
                    <a 
                      href={publication.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Read Publication
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;