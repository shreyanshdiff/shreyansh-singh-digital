const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              I'm a passionate AI/ML Engineer and Data Analyst with a strong foundation in computer science 
              from VIT Vellore. My journey spans from developing sophisticated machine learning models to 
              building scalable data pipelines that drive business insights.
            </p>
            
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              Currently pursuing my B.Tech in Information Technology with a specialization in AI/ML, 
              I've gained hands-on experience in deep learning, natural language processing, and 
              data analytics through roles at innovative startups like SECUINIX and Koncarens & Demang.
            </p>
            
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              I'm driven by the challenge of transforming complex data into actionable insights and 
              building intelligent systems that solve real-world problems. When I'm not coding, 
              you'll find me exploring the latest in AI research or contributing to open-source projects.
            </p>
          </div>
          
          <div className="bg-gradient-subtle rounded-2xl p-8 shadow-soft animate-slide-up">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
              Education
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-heading font-medium text-foreground">
                  B.Tech Information Technology
                </h4>
                <p className="text-muted-foreground font-body">
                  Vellore Institute of Technology
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Specialization in AI/ML • 7.49 CGPA • Sep 2021 - May 2025
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-heading font-medium text-foreground">
                  The Lexicon International School
                </h4>
                <p className="text-muted-foreground font-body">
                  High School Education
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  May 2020 • Pune
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;