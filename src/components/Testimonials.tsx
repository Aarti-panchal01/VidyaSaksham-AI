import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      grade: "Class 12, NEET Aspirant",
      location: "Delhi",
      text: "VidyaSaksham AI helped me understand complex Biology concepts in Hindi. My NEET mock scores improved by 40% in just 2 months!",
      subject: "Biology",
      improvement: "+40% Score",
      avatar: "PS"
    },
    {
      name: "Arjun Patel",
      grade: "Class 11, JEE Preparation", 
      location: "Gujarat",
      text: "The instant doubt solving feature is amazing! I can ask Physics questions in Gujarati and get clear explanations with examples.",
      subject: "Physics",
      improvement: "Top 5% Rank",
      avatar: "AP"
    },
    {
      name: "Kavya Reddy",
      grade: "Class 10, CBSE",
      location: "Hyderabad",
      text: "Mathematics was my weakest subject. Now I solve problems confidently thanks to step-by-step AI explanations in Telugu.",
      subject: "Mathematics", 
      improvement: "A+ Grade",
      avatar: "KR"
    },
    {
      name: "Rohit Kumar",
      grade: "Class 12, UPSC Preparation",
      location: "Bihar",
      text: "The personalized study plan and progress tracking helped me stay focused. The AI adapts to my learning pace perfectly.",
      subject: "General Studies",
      improvement: "Consistent Progress",
      avatar: "RK"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">What Students Say About Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from students who've transformed their learning journey with VidyaSaksham AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="lesson-card floating-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.grade}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          {testimonial.improvement}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-sm leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <Badge variant="outline" className="text-xs">
                      {testimonial.subject}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span>4.9/5 average rating from 10,000+ students</span>
          </div>
        </div>
      </div>
    </section>
  );
};