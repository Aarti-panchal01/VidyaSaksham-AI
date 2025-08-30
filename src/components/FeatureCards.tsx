import { BookOpen, Brain, Globe, Zap, Users, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const FeatureCards = () => {
  const features = [{
    icon: Brain,
    title: "AI-Powered Explanations",
    description: "Get personalized, easy-to-understand explanations tailored to your grade level and learning style.",
    badge: "Smart Learning",
    color: "text-primary"
  }, {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Learn in your preferred language with translations in Hindi, Tamil, Telugu, Bengali, and more.",
    badge: "5+ Languages",
    color: "text-secondary"
  }, {
    icon: BookOpen,
    title: "Interactive Quizzes",
    description: "Test your knowledge with automatically generated quizzes based on NCERT curriculum.",
    badge: "NCERT Aligned",
    color: "text-success"
  }, {
    icon: Zap,
    title: "Instant Responses",
    description: "Get immediate answers to your questions powered by advanced AI technology.",
    badge: "Real-time",
    color: "text-warning"
  }, {
    icon: Users,
    title: "Grade-Appropriate Content",
    description: "Content automatically adjusted for Class 1-12 with age-appropriate language and examples.",
    badge: "All Grades",
    color: "text-primary"
  }, {
    icon: Target,
    title: "Practice Questions",
    description: "Reinforce learning with practice questions and detailed solutions for better understanding.",
    badge: "Skill Building",
    color: "text-secondary"
  }];
  return <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold gradient-text">
          Why Choose VidyaSaksham AI?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Experience the future of education with AI-powered learning that adapts to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
        const Icon = feature.icon;
        return <Card key={index} className="lesson-card floating-card border-0 h-full">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-card to-accent/30 flex items-center justify-center ${feature.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>;
      })}
      </div>

      <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-center shadow-2xl">
        <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Learning?</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-white font-medium">
          Experience the power of AI-driven learning with VidyaSaksham AI. 
          Ask your first question or generate a quiz to get started!
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white font-medium">
          <span>✓ Prototype Demo</span>
          <span>✓ NCERT aligned</span>
          <span>✓ AI powered</span>
          <span>✓ Multi-language</span>
        </div>
      </div>
    </div>;
};