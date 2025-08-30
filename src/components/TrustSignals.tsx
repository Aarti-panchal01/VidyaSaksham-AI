import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Trophy, Users, Award } from "lucide-react";

export const TrustSignals = () => {
  const examLogos = [
    { name: "NEET", color: "bg-success/10 text-success", icon: Award },
    { name: "JEE", color: "bg-primary/10 text-primary", icon: Trophy },
    { name: "CBSE", color: "bg-secondary/10 text-secondary", icon: BookOpen },
    { name: "UPSC", color: "bg-purple/10 text-purple", icon: Users },
    { name: "SSC", color: "bg-warning/10 text-warning", icon: Award },
    { name: "Bank PO", color: "bg-success/10 text-success", icon: Trophy }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Trusted by Students Across India</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Preparing students for India's most competitive exams with AI-powered learning
            </p>
          </div>

          {/* Exam Support */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {examLogos.map((exam, index) => {
              const Icon = exam.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto rounded-xl ${exam.color} flex items-center justify-center mb-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="font-semibold text-sm">{exam.name}</p>
                    <p className="text-xs text-muted-foreground">Supported</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <p className="text-muted-foreground">Students see improvement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
              <p className="text-muted-foreground">Active learners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">1M+</div>
              <p className="text-muted-foreground">Doubts solved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-muted-foreground">AI assistance</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              🔒 100% Secure & Private
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              📚 NCERT Aligned Content
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              🇮🇳 Made for Indian Students
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              ⚡ Instant AI Responses
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};