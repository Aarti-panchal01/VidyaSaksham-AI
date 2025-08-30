import { Sparkles, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";

export const HeroSection = () => {
  return (
    <section className="hero-section py-20 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Study Companion for Indian Students</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Master Every Subject with{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                VidyaSaksham AI
              </span>
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-lg">
              Get instant doubt solving, personalized exam prep, and interactive learning in your language. 
              Built specifically for NEET, JEE, CBSE, and competitive exams.
            </p>
            
            <div className="space-y-3 text-white/90">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>✓ Personalized learning paths for every student</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span>✓ Instant doubt solving in 5+ Indian languages</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>✓ NEET, JEE, CBSE & board exam preparation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple rounded-full"></div>
                <span>✓ Progress tracking with detailed analytics</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 educational-button text-lg px-8 py-4 h-auto">
                Start Learning Free
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
                Try Live Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-white/70">Students Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-white/70">AI Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="floating-card">
              <img 
                src={heroImage} 
                alt="Students learning with VidyaSaksham AI" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-6 py-3 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold">Live Learning</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span className="font-semibold">Personalized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};