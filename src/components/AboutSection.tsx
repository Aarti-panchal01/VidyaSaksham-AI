import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Target, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Student-First Approach",
      description: "Every feature is designed with student success in mind, making learning accessible and enjoyable.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Inclusive Education",
      description: "Supporting students from all backgrounds with multi-language learning and affordable access.",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Goal-Oriented Learning",
      description: "Focused preparation for competitive exams with personalized study plans and progress tracking.",
      color: "text-success"
    },
    {
      icon: Lightbulb,
      title: "Innovation in Education",
      description: "Using cutting-edge AI to revolutionize how Indian students learn and prepare for their future.",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">Our Story</Badge>
              <h2 className="text-3xl font-bold">
                Built by Students, for Students
              </h2>
              <div className="space-y-4 text-foreground leading-relaxed font-medium">
                <p>
                  VidyaSaksham AI is a prototype demonstration of an AI-powered learning platform designed 
                  for Indian students across all educational levels.
                </p>
                <p>
                  This demo showcases how artificial intelligence can personalize education, provide instant 
                  doubt solving, and make quality learning accessible in multiple Indian languages.
                </p>
                <p>
                  Experience the potential of AI in education through this interactive prototype that 
                  demonstrates multi-language support, adaptive learning, and personalized tutoring capabilities.
                </p>
              </div>
              <Button className="educational-button">
                Learn More About Our Mission
              </Button>
            </div>
            
            <div className="relative">
              <Card className="lesson-card floating-card border-0 p-8">
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold gradient-text">Our Mission</h3>
                  <p className="text-foreground leading-relaxed font-medium">
                    To demonstrate how AI can democratize quality education for every Indian student 
                    by making learning accessible and effective in their preferred language.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">Demo</div>
                      <div className="text-sm text-muted-foreground">Prototype</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">AI</div>
                      <div className="text-sm text-muted-foreground">Powered</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide everything we do at VidyaSaksham AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="lesson-card floating-card border-0 h-full">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-card to-accent/30 flex items-center justify-center ${value.color} mb-4`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Prototype CTA */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Explore the Prototype</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto text-white font-medium">
              Experience the potential of AI-powered education through this interactive demonstration. 
              Try the features and see how technology can transform learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 font-bold">
                Try Demo Features
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 font-bold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};