import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "SECUINIX",
    role: "VIT Incubated Startup, AI/ML Solutions Lead - Student Community",
    location: "Vellore, India",
    duration: "Sep 2024 - Apr 2025",
    achievements: [
      "Spearheaded development of AI/ML smart automation solutions, leveraging advanced machine learning techniques",
      "Designed and implemented object depth detection model using heatmap analysis, significantly enhancing spatial awareness",
      "Improved model completion time by 70% and reduced processing latency by 45%, optimizing overall system performance",
      "Led a cross-functional team in end-to-end product development with expertise in deep learning, model deployment, and data analytics"
    ]
  },
  {
    company: "KONCARENS & DEMANG PVT LTD",
    role: "PLM Consultant & Data Analyst - Internship",
    location: "Pune, India", 
    duration: "Oct 2023 - Dec 2023",
    achievements: [
      "Automated end-to-end Product Lifecycle Management (PLM) workflows by integrating Teamcenter PLM with AutoCAD",
      "Developed Agile-based automation solutions using Jenkins & Grafana, boosting collaboration between cross-functional teams",
      "Streamlined data migration and pipeline optimization, improving database efficiency by 34% through scalable & resilient cloud-based architectures"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {exp.company}
                    </h3>
                  </div>
                  
                  <h4 className="text-lg font-heading font-medium text-primary mb-3">
                    {exp.role}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-body text-sm">{exp.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="font-body text-sm">{exp.location}</span>
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="lg:w-2/3">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="font-body text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;