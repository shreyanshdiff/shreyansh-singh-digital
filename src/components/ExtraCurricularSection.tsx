import { Trophy, Users, Calendar, MapPin } from "lucide-react";

const activities = [
  {
    role: "Finance Coordinator",
    organization: "BIF, VIT",
    duration: "Sep 2022 - May 2023",
    location: "Vellore, India",
    description: "Oversaw financial planning, budgeting, and sponsorship acquisition for major university events, ensuring financial stability.",
    achievements: [
      "Managed financial operations for multiple large-scale events",
      "Successfully secured sponsorships worth significant amounts",
      "Implemented cost-effective budget management strategies"
    ]
  },
  {
    role: "Registration Coordinator", 
    organization: "Riviera - VIT's largest cultural fest",
    duration: "Feb 2023 - Mar 2023",
    location: "Vellore, India", 
    description: "Led event logistics, team coordination, and registration planning for VIT's largest cultural fest, successfully managing thousands of participants.",
    achievements: [
      "Coordinated registration for thousands of participants",
      "Streamlined event logistics and management processes",
      "Led cross-functional teams for seamless event execution"
    ]
  }
];

const ExtraCurricularSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Leadership & Extra Curricular
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Role Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {activity.role}
                    </h3>
                  </div>
                  
                  <h4 className="text-lg font-heading font-medium text-primary mb-3">
                    {activity.organization}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-body text-sm">{activity.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="font-body text-sm">{activity.location}</span>
                  </div>
                </div>
                
                {/* Description & Achievements */}
                <div className="lg:w-2/3">
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-heading font-medium text-foreground flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {activity.achievements.map((achievement, achIndex) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricularSection;