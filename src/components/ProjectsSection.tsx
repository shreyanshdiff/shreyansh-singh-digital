import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Q&A Bot",
    description: "Developed an LLM-based chatbot using FastAPI and Streamlit, enabling real-time interaction through a clean and user-friendly learning experience.",
    technologies: ["FastAPI", "Streamlit", "LLM", "Python"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "MLflow Pipeline Integration", 
    description: "Integrated Large Language Model (LLM) responses with contextual memory retrieval to deliver personalized and coherent Q&A sessions utilizing state-of-the-art memory-driven neural networks.",
    technologies: ["MLflow", "Neural Networks", "Memory Systems", "Python"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Brain Tumor Classification",
    description: "Developed a deep learning model using UNet for MRI segmentation, achieving 90% accuracy. Built predictive maintenance model with 87% accuracy, 95% recall, and 89% precision.",
    technologies: ["UNet", "Deep Learning", "MRI Processing", "TensorFlow"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "MLOps Pipeline Architecture",
    description: "Deployed ML model using Docker, Kubernetes, and Nginx, implementing real-time monitoring with MLflow tracking, Jenkins for CI/CD, improving model delivery efficiency by 55%.",
    technologies: ["Docker", "Kubernetes", "MLflow", "Jenkins", "Nginx"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                
                <Button variant="default" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;