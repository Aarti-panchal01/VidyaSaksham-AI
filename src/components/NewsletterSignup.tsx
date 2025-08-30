import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Gift, Star, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate newsletter signup
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Welcome to VidyaSaksham AI!",
        description: "You'll receive exclusive updates and learning tips in your inbox.",
      });
    }, 500);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="lesson-card border-0 text-center">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold gradient-text mb-4">Welcome Aboard!</h3>
                <p className="text-muted-foreground mb-6">
                  You're now part of our exclusive community. Check your inbox for a special welcome gift!
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Gift className="h-4 w-4 mr-2" />
                    Free Premium Trial
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="lesson-card border-0 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content Side */}
              <CardHeader className="lg:p-8 p-6">
                <div className="space-y-6">
                  <Badge variant="outline" className="w-fit">
                    <Mail className="h-4 w-4 mr-2" />
                    Early Access
                  </Badge>
                  
                  <CardTitle className="text-2xl gradient-text">
                    Get Exclusive Learning Updates
                  </CardTitle>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Join 25,000+ students already getting weekly study tips, exam strategies, 
                    and early access to new AI features.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm">Weekly study tips & strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Early access to new features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Exclusive exam preparation content</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      <span className="text-sm">Success stories from top performers</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="text-sm text-muted-foreground">4.9/5 rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">25K+ subscribers</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              {/* Form Side */}
              <CardContent className="lg:p-8 p-6 bg-gradient-to-br from-card to-accent/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">📚</div>
                    <h4 className="font-semibold text-lg mb-2">Start Learning Smarter Today</h4>
                    <p className="text-sm text-muted-foreground">
                      Join our community and get a free study planner as a welcome gift!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12"
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full educational-button h-12 text-lg"
                      disabled={!email}
                    >
                      Get Free Updates & Study Tips
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      🔒 Your email is safe with us. Unsubscribe anytime.
                    </p>
                  </div>

                  {/* Special Offer */}
                  <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                    <div className="text-center">
                      <Badge variant="secondary" className="mb-2">
                        <Gift className="h-3 w-3 mr-1" />
                        Limited Time
                      </Badge>
                      <p className="text-sm font-medium text-success">
                        First 1000 subscribers get 1 month premium access FREE!
                      </p>
                    </div>
                  </div>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};