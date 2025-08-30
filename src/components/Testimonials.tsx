import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Demo User 1",
      grade: "Student",
      location: "India",
      text: "This is a prototype demonstration of VidyaSaksham AI's capabilities for personalized learning.",
      subject: "Demo",
      improvement: "Prototype",
      avatar: "D1"
    },
    {
      name: "Demo User 2",
      grade: "Student", 
      location: "India",
      text: "Sample testimonial showcasing the multi-language AI tutoring features in development.",
      subject: "Demo",
      improvement: "Prototype",
      avatar: "D2"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-primary">Prototype Testimonials</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sample testimonials demonstrating VidyaSaksham AI's potential impact on student learning
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
            <span>Prototype demonstration - Sample testimonials</span>
          </div>
        </div>
      </div>
    </section>
  );
};