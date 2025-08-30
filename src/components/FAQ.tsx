import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FAQ = () => {
  const faqs = [
    {
      question: "Is VidyaSaksham AI completely free to use?",
      answer: "Yes! We offer a generous free tier that includes unlimited doubt solving, basic quiz generation, and access to our AI tutor. Premium features like advanced analytics and personalized study plans are available with our paid plans."
    },
    {
      question: "Which exams and boards does VidyaSaksham AI support?",
      answer: "We support NEET, JEE (Main & Advanced), CBSE, ICSE, State Boards, UPSC, SSC, Bank PO, and many other competitive exams. Our content is aligned with NCERT curriculum and updated regularly."
    },
    {
      question: "Can I ask questions in my regional language?",
      answer: "Absolutely! We support Hindi, Tamil, Telugu, Bengali, Gujarati, Marathi, and more. You can ask questions in your preferred language and get explanations in the same language for better understanding."
    },
    {
      question: "How does the AI personalize learning for each student?",
      answer: "Our AI analyzes your learning patterns, strengths, weaknesses, and progress to create personalized study plans. It adapts question difficulty, suggests topics to focus on, and provides explanations at your comprehension level."
    },
    {
      question: "Is my study data and progress secure?",
      answer: "Yes, we take data security very seriously. All your personal information and study data are encrypted and stored securely. We never share your data with third parties and comply with privacy regulations."
    },
    {
      question: "Can I use VidyaSaksham AI offline?",
      answer: "While the core AI features require internet connectivity, you can download study materials, notes, and practice questions to access offline. Your progress syncs automatically when you're back online."
    },
    {
      question: "How accurate are the AI explanations?",
      answer: "Our AI is trained on verified educational content and continuously improved. We maintain 95%+ accuracy rate and have subject matter experts reviewing responses to ensure quality and correctness."
    },
    {
      question: "What age groups or grades can use this platform?",
      answer: "VidyaSaksham AI is designed for students from Class 1 to 12, plus competitive exam aspirants. The AI automatically adjusts content complexity based on the student's grade level and understanding."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg font-medium">
              Got questions? We've got answers! Find everything you need to know about VidyaSaksham AI.
            </p>
          </div>

          <Card className="lesson-card border-0">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-primary">Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg text-primary hover:text-primary/80">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground leading-relaxed font-medium text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:support@vidyasaksham.ai" 
                className="text-primary hover:underline font-medium"
              >
                📧 support@vidyasaksham.ai
              </a>
              <a 
                href="https://wa.me/1234567890" 
                className="text-success hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};