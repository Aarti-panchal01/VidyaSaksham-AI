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
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  VidyaSaksham AI was born from a simple observation: every Indian student deserves quality education, 
                  regardless of their location, language, or economic background.
                </p>
                <p>
                  Our founders, former NEET and JEE aspirants themselves, experienced firsthand the challenges 
                  of accessing quality doubt-solving and personalized guidance. They spent countless hours traveling 
                  to coaching centers, struggling with language barriers, and feeling lost in one-size-fits-all approaches.
                </p>
                <p>
                  That's when they decided to build something different - an AI-powered learning companion that 
                  understands Indian education, speaks your language, and adapts to your unique learning style.
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
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize quality education for every Indian student by making AI-powered learning 
                    accessible, affordable, and effective in their preferred language.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">2023</div>
                      <div className="text-sm text-muted-foreground">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">50K+</div>
                      <div className="text-sm text-muted-foreground">Students Helped</div>
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

          {/* Team CTA */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-[var(--gradient-hero)] text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Be part of the educational revolution. Connect with us on social media and stay updated 
              with the latest features and success stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Follow on Instagram
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Connect on LinkedIn
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Join Discord Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};