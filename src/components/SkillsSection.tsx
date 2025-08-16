const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "HTML", "CSS", "Java", "R"]
  },
  {
    title: "Data Structures & Algorithms",
    skills: ["Machine Learning", "Scikit-learn", "TensorFlow", "PyTorch", "CNN", "RNN", "LSTM", "Transformers"]
  },
  {
    title: "Development Tools", 
    skills: ["DevOps", "MLflow", "Kubeflow", "Jenkins", "Prometheus", "PostgreSQL", "Grafana", "Docker", "Kubernetes", "Redis", "Kafka"]
  },
  {
    title: "Ecosystem",
    skills: ["LangGraph", "LangChain", "LoRA", "QLoRA", "MLOps", "Vectordb", "FastAPI", "Streamlit", "SciKit-learn", "TensorFlow", "PyTorch"]
  },
  {
    title: "Certifications",
    skills: ["Python for Data Science and Machine Learning", "AWS Certified Cloud Practitioner", "MLOps Bootcamp: Mastering ML Operations for Success"]
  },
  {
    title: "Soft Skills",
    skills: ["Adaptability", "Problem Solving", "Critical Thinking", "Communication", "Presentation"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-heading font-semibold text-primary mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-sm font-body hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;