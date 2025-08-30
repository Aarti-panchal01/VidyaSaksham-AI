import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuestionForm } from "@/components/QuestionForm";
import { LessonDisplay } from "@/components/LessonDisplay";
import { QuizInterface } from "@/components/QuizInterface";
import { FeatureCards } from "@/components/FeatureCards";
import { TrustSignals } from "@/components/TrustSignals";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { AboutSection } from "@/components/AboutSection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { FloatingSupport } from "@/components/FloatingSupport";

export type LessonData = {
  explanation: string;
  example: string;
  practice_questions: Array<{
    q: string;
    answer: string;
  }>;
  key_takeaways: string[];
  sources: string[];
  translated?: string;
  audio_url?: string;
};

export type QuizData = Array<{
  type: "mcq" | "short";
  q: string;
  options?: string[];
  answer: string;
}>;

const Index = () => {
  const [currentLesson, setCurrentLesson] = useState<LessonData | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<QuizData | null>(null);
  const [activeTab, setActiveTab] = useState<"lesson" | "quiz">("lesson");
  const [isLoading, setIsLoading] = useState(false);

  const handleAskQuestion = async (question: string, grade: string, language: string) => {
    setIsLoading(true);
    setActiveTab("lesson");
    
    // Simulate API call - replace with actual API integration
    setTimeout(() => {
      const mockLesson: LessonData = {
        explanation: `Photosynthesis is the amazing process by which plants make their own food using sunlight. Plants are like tiny factories that combine water from their roots and carbon dioxide from the air to create sugar (glucose), which gives them energy to grow. During this process, plants also release oxygen into the air, which is what we breathe!`,
        example: `Think of a green leaf as a solar panel. When sunlight hits the leaf, special green parts called chloroplasts capture the light energy. Just like how solar panels convert sunlight into electricity, chloroplasts convert sunlight into chemical energy that plants can use.`,
        practice_questions: [
          { q: "What gas do plants release during photosynthesis?", answer: "Oxygen" },
          { q: "Where in the plant does photosynthesis mainly occur?", answer: "In the leaves, specifically in chloroplasts" },
          { q: "What are the two main raw materials plants need for photosynthesis?", answer: "Water and carbon dioxide" }
        ],
        key_takeaways: [
          "Plants make their own food using sunlight through photosynthesis",
          "Chlorophyll in leaves captures light energy",
          "Oxygen is released as a beneficial by-product for us to breathe"
        ],
        sources: ["NCERT Class 8 Biology Chapter 1", "Science Textbook Grade 8"]
      };
      setCurrentLesson(mockLesson);
      setIsLoading(false);
    }, 2000);
  };

  const handleGenerateQuiz = async (topic: string, grade: string, numQuestions: number) => {
    setIsLoading(true);
    setActiveTab("quiz");
    
    // Simulate API call - replace with actual API integration
    setTimeout(() => {
      const mockQuiz: QuizData = [
        {
          type: "mcq",
          q: "What is the main purpose of photosynthesis?",
          options: ["To make flowers", "To make food for the plant", "To make the plant green", "To make roots grow"],
          answer: "To make food for the plant"
        },
        {
          type: "mcq", 
          q: "Which gas is absorbed by plants during photosynthesis?",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
          answer: "Carbon dioxide"
        },
        {
          type: "short",
          q: "Name the green substance in plants that helps capture sunlight.",
          answer: "Chlorophyll"
        }
      ];
      setCurrentQuiz(mockQuiz);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        {/* Trust Signals */}
        <TrustSignals />
        
        {/* Interactive Learning Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold gradient-text">
                Try VidyaSaksham AI Now
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ask any question or generate a quiz to experience the power of AI-driven learning
              </p>
            </div>
            
            <QuestionForm 
              onAskQuestion={handleAskQuestion}
              onGenerateQuiz={handleGenerateQuiz}
              isLoading={isLoading}
            />
            
            <div className="mt-12">
              {activeTab === "lesson" && currentLesson && (
                <LessonDisplay lesson={currentLesson} />
              )}
              
              {activeTab === "quiz" && currentQuiz && (
                <QuizInterface quiz={currentQuiz} />
              )}
              
              {!currentLesson && !currentQuiz && !isLoading && (
                <div id="features">
                  <FeatureCards />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials">
          <Testimonials />
        </div>

        {/* About Section */}
        <div id="about">
          <AboutSection />
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>

      {/* Floating Support */}
      <FloatingSupport />
    </div>
  );
};

export default Index;